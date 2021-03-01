"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = __importDefault(require("../../assets/js/Nav"));
require("normalize.css");
require("../../assets/css/common.css");
require("../../assets/css/top-nav.css");
const axios_1 = __importDefault(require("axios"));
const common_js_1 = require("../../assets/js/common.js");
const Swiper = /**@class */ require("../../assets/lib/swiper");
require("../../assets/css/swiper.css");
require("./index.css");
require("./news.css");
axios_1.default.defaults.baseURL = common_js_1.baseURL;
console.clear();
// 头部导航
new Nav_1.default(0);
// axios({ method: "GET", url: "swiper.json" }).then(res => {
// 	if (res.status == 200) {
common_js_1.swiperImgs.forEach((img_src) => {
    let swiper_slide = common_js_1.$add("div");
    swiper_slide.className = "swiper-slide";
    let img = new Image();
    img.src = img_src;
    swiper_slide.appendChild(img);
    document.getElementsByClassName("swiper-wrapper")[0].appendChild(swiper_slide);
});
new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
// 	} else console.log(res.statusText);
// }).catch((res) => console.log(res));
let list = [];
let size = 3;
let pages = 0;
let n = 0;
let $news = common_js_1.$id("news");
let $pages = common_js_1.$id("pages");
// axios({ method: "GET", url: "newsList.json" }).then((res) => {
// 	if (res.status == 200) {
let newsList = common_js_1.newList;
// 计算页数
pages = Math.ceil(newsList.length / size);
$news.innerHTML = "";
list.forEach((news, i) => {
    let a = common_js_1.$add("a");
    a.href = news.to;
    $news.appendChild(a);
    let div_newsList = common_js_1.$add("div");
    div_newsList.className = "newsList";
    a.appendChild(div_newsList);
    let img = new Image();
    img.src = news.img.src;
    img.title = news.img.title;
    div_newsList.appendChild(img);
    div_newsList.innerHTML += `<div class="info"><h3>${news.title}</h3><p>${news.text}</p></div><div class="date"><h2>${news.month}/${news.date}</h2><p>${news.year}</p></div>`;
});
console.log(pages);
setPages("首页", () => n != 1 && showList(1));
setPages("上一页", () => n != 1 && shangye());
for (let num = 1; num <= pages; num++) {
    setPages(num.toString(), () => num != n && showList(num));
}
setPages("下一页", () => n != pages && xiaye());
setPages("末页", () => n != pages && showList(pages));
// 显示第一页内容
showList(1);
// 	} else console.log(res.statusText);
// }).catch((res) => console.log(res));
/**
 * 显示当前页内容
 * @param {number} page 页码
 */
function showList(page) {
    console.log(page);
    // 记录当前页
    n = page;
    // 初始化显示列表为空
    list = [];
    // 循环遍历每一页且不超过 newsList 的个数
    for (let i = 0; (n - 1) * size + i < newsList.length && i < size; i++) {
        list[i] = newsList[(n - 1) * size + i];
    }
    $news.innerHTML = "";
    list.forEach((news, i) => {
        let a = common_js_1.$add("a");
        a.href = news.to;
        $news.appendChild(a);
        let div_newsList = common_js_1.$add("div");
        div_newsList.className = "newsList";
        a.appendChild(div_newsList);
        let img = new Image();
        img.src = news.img.src;
        img.title = news.img.title;
        div_newsList.appendChild(img);
        div_newsList.innerHTML += `<div class="info"><h3>${news.title}</h3><p>${news.text}</p></div><div class="date"><h2>${news.month}/${news.date}</h2><p>${news.year}</p></div>`;
    });
    let lis = $pages.getElementsByTagName("li");
    switch (n + 0) {
        case 1:
            lis[lis.length - 2].className = lis[lis.length - 1].className = "";
            lis[0].className = lis[1].className = "disabled";
            break;
        case lis.length - 4:
            lis[0].className = lis[1].className = "";
            lis[lis.length - 2].className = lis[lis.length - 1].className = "disabled";
            break;
        default:
            lis[lis.length - 2].className = lis[lis.length - 1].className = lis[0].className = lis[1].className = "";
    }
    for (let i = 0; i <= pages; i++) {
        i == n ? lis[i + 1].classList.add("active") : lis[i + 1].classList.remove("active");
    }
}
function shangye() {
    showList(--n);
}
function xiaye() {
    showList(++n);
}
/**
 *
 * @param {string} innerHTML
 * @param {() => void} click
 */
function setPages(innerHTML, click) {
    let li = common_js_1.$add("li");
    $pages.appendChild(li);
    li.innerHTML = `<span>${innerHTML}</span>`;
    li.addEventListener("click", ev => ev.button == 0 && click());
}
