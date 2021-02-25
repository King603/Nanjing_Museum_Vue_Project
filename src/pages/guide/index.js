import Nav from "../../assets/js/Nav";
import GoToTop from "../../assets/js/GoToTop";
import { $all, $id, $add, $class, guide } from "../../assets/js/common";
import "normalize.css";
import "../../assets/css/common.css";
import "../../assets/css/top-nav.css";
import "./index.css";
import axios from "axios";
console.clear();
new Nav(3);
axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";
var navList = [
    { title: "交通与周边信息" },
    { title: "参观须知" },
    { title: "场馆地图" },
];
var index = 0;
document.body.style.backgroundColor = "rgb(246, 239, 229)";
var ul = $all(".guide-nav>ul")[0];
navList.forEach(function (nav, i) {
    var li = $add("li");
    li.className = i == 0 ? "list guide-active" : "list";
    li.innerHTML = nav.title;
    li.addEventListener("click", function (ev) { return ev.button == 0 && (function (i) { return show(i); })(i); });
    ul.appendChild(li);
});
var guide_page = $class("guide-page");
init_guide_page(0);
showPage1();
function show(i) {
    index = i;
    init_guide_page(i);
    var lis = ul.getElementsByTagName("li");
    for (var i_1 = 0; i_1 < lis.length; i_1++)
        lis[i_1].className = "list" + (index == i_1 ? " guide-active" : "");
    switch (index) {
        case 0:
            showPage1();
            break;
        case 1:
            showPage2();
            break;
        case 2:
            showPage3();
            break;
    }
}
function init_guide_page(index) {
    for (var i = 0; i < guide_page.length; i++)
        guide_page[i].style.display = i == index ? "block" : "none";
}
function showPage1() {
    var titles = ["交通信息", "酒店住宿", "餐饮服务", "文化休闲"];
    var page_info = [];
    var tr_button = $id("button");
    tr_button.style.display = "flex";
    tr_button.innerHTML = "";
    var page1_1 = $id("page1_1");
    var page1_2 = $id("page1_2");
    var page1_2_table = page1_2.getElementsByTagName("table")[0];
    titles.forEach(function (tit, i) {
        var td = $add("td");
        td.className = i == 0 ? "tit active" : "tit";
        td.style.width = 100 / titles.length + "%";
        tr_button.appendChild(td);
        var button = $add("button");
        td.appendChild(button);
        button.innerHTML = tit;
        button.addEventListener("click", function (ev) { return ev.button == 0 && (function (i) {
            console.log(i);
            show(i);
            var buttons = $class("tit");
            for (var j = 0; j < buttons.length; j++) {
                if (i == j)
                    buttons[j].classList.add("active");
                else
                    buttons[j].classList.remove("active");
                console.log(buttons[j].className);
            }
        })(i); });
    });
    // axios({ method: "GET", url: "guide-list-info.json" }).then(res => {
    // 	if (res.status == 200) {
    guide.list.forEach(function (_a, i) {
        var info = _a.info;
        return page_info[i] = info;
    });
    show(0);
    // 	} else console.log(res.statusText);
    // }).catch((err) => console.log(err));
    function show(i) {
        console.log(page1_1);
        switch (i) {
            case 0:
                page1_1.style.display = "block";
                page1_2.style.display = "none";
                page1_1.getElementsByTagName("img")[0].src = page_info[0].img;
                page1_1.getElementsByTagName("p")[0].innerHTML = page_info[0].span;
                break;
            case 1:
            case 2:
            case 3:
                page1_2.style.display = "block";
                page1_1.style.display = "none";
                page1_2_table.innerHTML = "";
                page_info[i].forEach(function (info) {
                    var tr = $add("tr");
                    page1_2_table.appendChild(tr);
                    createTd("<p><strong>\u540D\u79F0\uFF1A" + info.name + "</strong><br />\u5730\u5740\uFF1A" + info.address + "<br />\u90AE\u7F16\uFF1A" + info.postcode + "<br />\u8054\u7CFB\u7535\u8BDD\uFF1A" + info.phone + "<br /><span>\u5B98\u65B9\u7F51\u5740\uFF1A<a href=\"" + info.url + "\" target=\"_blank\">" + info.url + "<br /></a></span>\uFF08\u70B9\u51FB\u5730\u56FE\u67E5\u770B\u8BE6\u7EC6\u4F4D\u7F6E\uFF09&nbsp;</p>");
                    createTd("<a href=\"" + info.local + "\" target=\"_blank\"><img src=\"" + info.src + "\" /></a>");
                    function createTd(innerHTML) {
                        var td = $add("td");
                        tr.appendChild(td);
                        td.innerHTML = innerHTML;
                    }
                });
                break;
        }
    }
}
function showPage2() {
    // axios({ method: "GET", url: "guide-info.json" }).then(res => {
    // 	if (res.status == 200) {
    var info = guide.info;
    $id("text1").innerHTML = info.text1;
    $id("text2").innerHTML = info.text2;
    $id("text3").innerHTML = info.text3;
    $id("wangzh").href = info.yuyue.wangzh;
    $id("weixin").href = info.yuyue.weixin;
    $id("date").innerHTML = info.date;
    // 	} else console.log(res.statusText);
    // }).catch((err) => console.log(err));
}
function showPage3() {
    // axios({ method: "GET", url: "guide-nav.json" }).then(res => {
    // 	if (res.status == 200) {
    guide.nav.forEach(function (images) {
        var p = $add("p");
        p.className = "img";
        $id("page3").appendChild(p);
        var a = $add("a");
        p.appendChild(a);
        a.href = images.href;
        a.target = "_blank";
        var img = new Image();
        a.appendChild(img);
        img.src = images.src;
        img.alt = "楼层地图";
    });
    // 	} else console.log(res.statusText);
    // }).catch(err => console.log(err));
}
new GoToTop();
