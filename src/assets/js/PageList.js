"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const common_1 = require("./common");
function default_1({ url, method }) {
    let pageNum = 0;
    let size = 10;
    let page = 1;
    let info = [];
    /**@type {[]} */
    let list = [];
    let $content_czyd = common_1.$id("content_czyd");
    let $fenye = common_1.$id("fenye");
    let lis = $fenye.getElementsByTagName("li");
    let $select = $fenye.getElementsByTagName("select")[0];
    $select.style.width = "71px";
    let $options = $select.getElementsByTagName("option");
    function setListener(index, click) {
        lis[index].addEventListener("click", ev => ev.button == 0 && click());
    }
    function setPagesButton() {
        lis[0].className = page == 1 ? 'page1' : 'page';
        lis[1].style.display = page == 1 ? "none" : "block";
        lis[lis.length - 2].style.display = page == pageNum ? "none" : "block";
        lis[lis.length - 1].className = page == pageNum ? 'page1' : 'page';
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
        setList();
    }
    function setList() {
        list = [];
        for (let i = 0; i < size && i + (page - 1) * size < info.length; i++)
            list[i] = info[i + (page - 1) * size];
        $content_czyd.innerHTML = "";
        list.forEach((li, i) => {
            let list_list = common_1.$add("div");
            list_list.className = "list_list";
            $content_czyd.appendChild(list_list);
            let a = common_1.$add("a");
            list_list.appendChild(a);
            a.href = li.src;
            let list_l = common_1.$add("div");
            a.appendChild(list_l);
            list_l.className = "list_l";
            list_l.innerHTML = `<dt>${li.name}<span class="time">${li.time}</span></dt><dd>${li.abstract}</dd>`;
            a.innerHTML += '<div class="more"></div>';
        });
    }
    axios_1.default({ method, url }).then((res) => {
        if (res.status == 200) {
            info = res.data;
            pageNum = Math.ceil(info.length / size);
            setList();
            $select.innerHTML = "";
            for (let i = 1; i <= pageNum; i++) {
                let option = document.createElement("option");
                option.value = i.toString();
                option.innerHTML = `第${i}页`;
                $select.appendChild(option);
            }
            setListener(0, toFrist);
            setListener(1, shangyiye);
            setListener(lis.length - 2, xiayiye);
            setListener(lis.length - 1, toEnd);
            $select.addEventListener("change", function () {
                page = parseInt(this[this.selectedIndex].value) - 0;
                setPagesButton();
            });
        }
        else
            console.log(res.statusText);
    }).catch(err => console.log(err));
}
exports.default = default_1;
