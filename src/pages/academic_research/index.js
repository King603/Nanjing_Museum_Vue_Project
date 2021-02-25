import Nav from "../../assets/js/Nav";
import { $id, $add, academic } from "../../assets/js/common";
import axios from "axios";
import "normalize.css";
import "../../assets/css/common.css";
import "../../assets/css/top-nav.css";
import "./index.css";
console.clear();
new Nav(6);
// PageList({ method: "GET", url: "academic_research.json" });
axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";
var pageNum = 0;
var size = 6;
var page = 1;
var info = [];
/**@type {[]} */
var list = [];
var $content_czyd = $id("content_czyd");
var $fenye = $id("fenye");
var lis = $fenye.getElementsByTagName("li");
var $select = $fenye.getElementsByTagName("select")[0];
$select.style.width = "71px";
var $options = $select.getElementsByTagName("option");
// axios({ method: "GET", url: "academic_research.json" }).then((res) => {
info = academic.research;
pageNum = Math.ceil(info.length / size);
$select.innerHTML = "";
for (var i = 1; i <= pageNum; i++) {
    var option = $add("option");
    option.value = i.toString();
    option.innerHTML = "\u7B2C" + i + "\u9875";
    $select.appendChild(option);
}
setListener(0, toFrist);
setListener(1, shangyiye);
setListener(lis.length - 2, xiayiye);
setListener(lis.length - 1, toEnd);
$select.addEventListener("change", function () {
    page = this[this.selectedIndex].value - 0;
    setPagesButton();
});
setList(page - 1);
// });
function setListener(index, click) {
    lis[index].addEventListener("click", function (ev) {
        if (ev.button == 0) {
            click();
        }
    });
}
function setPagesButton() {
    lis[0].className = page == 1 ? 'page1' : 'page';
    lis[1].style.display = page == 1 ? "none" : "block";
    lis[lis.length - 2].style.display = page == pageNum ? "none" : "block";
    lis[lis.length - 1].className = page == pageNum ? 'page1' : 'page';
    setList(page - 1);
}
function switchPage(n) {
    page += n;
    setOption();
}
function shangyiye() {
    if (page == 1)
        return;
    switchPage(-1);
}
function xiayiye() {
    if (page == pageNum)
        return;
    switchPage(1);
}
function toFrist() {
    page = 1;
    setOption();
}
function toEnd() {
    page = pageNum;
    setOption();
}
function setOption() {
    $options[page - 1].selected = true;
    setPagesButton();
    setList(page - 1);
}
function setList(page) {
    list = [];
    for (var i = 0; i < size && i + page * size < info.length; i++)
        list[i] = info[i + page * size];
    $content_czyd.innerHTML = "";
    list.forEach(function (li) {
        var list_list = $add("div");
        list_list.className = "list_list";
        $content_czyd.appendChild(list_list);
        var a = $add("a");
        list_list.appendChild(a);
        a.href = li.src;
        var list_l = $add("div");
        a.appendChild(list_l);
        list_l.className = "list_l";
        list_l.innerHTML = "<dt>" + li.name + "<span class=\"time\">" + li.time + "</span></dt><dd>" + li.abstract + "</dd>";
        a.innerHTML += '<div class="more"></div>';
    });
}
import("../../assets/js/research");
