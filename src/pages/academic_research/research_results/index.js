"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = __importDefault(require("../../../assets/js/Nav"));
const common_1 = require("../../../assets/js/common");
const axios_1 = __importDefault(require("axios"));
require("normalize.css");
require("../../../assets/css/common.css");
require("../../../assets/css/top-nav.css");
require("./index.css");
console.clear();
new Nav_1.default(6);
axios_1.default.defaults.baseURL = common_1.baseURL;
let pageNum = 0;
let size = 5;
let page = 1;
let info = [];
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
    for (let i = 0; i < size && i + page * size < info.length; i++)
        list[i] = info[i + page * size];
    $content_czyd.innerHTML = "";
    list.forEach((li) => {
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
// axios({ method: "GET", url: "academic_research_results.json" }).then(
// 	(res) => {
info = common_1.academic.results;
pageNum = Math.ceil(info.length / size);
setList(0);
$select.innerHTML = "";
for (let i = 1; i <= pageNum; i++) {
    let option = common_1.$add("option");
    option.value = i.toString();
    option.innerHTML = `第${i}页`;
    $select.appendChild(option);
}
setListener(0, toFrist);
setListener(1, shangyiye);
setListener(lis.length - 2, xiayiye);
setListener(lis.length - 1, toEnd);
$select.addEventListener("change", function (ev) {
    page = parseInt(this[this.selectedIndex].value) - 0;
    setPagesButton();
});
// 	}
// );
Promise.resolve().then(() => __importStar(require("../../../assets/js/research")));
