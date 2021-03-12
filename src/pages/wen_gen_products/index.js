"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = __importDefault(require("../../assets/js/Nav"));
const GoToTop_1 = __importDefault(require("../../assets/js/GoToTop"));
const axios_1 = __importDefault(require("axios"));
const common_1 = require("../../assets/js/common");
const Swiper = require("../../assets/lib/swiper");
require("normalize.css");
require("../../assets/scss/common.scss");
require("../../assets/scss/top-nav.scss");
require("../../assets/css/swiper.css");
require("./index.scss");
console.clear();
new Nav_1.default(4);
axios_1.default.defaults.baseURL = common_1.baseURL;
let titles = ["产品图文介绍", "产品防伪溯源信息查询、举报"];
;
let products = [
    { img: "", tit: "", price: "", num: 0 },
    { img: "", tit: "", price: "", num: 0 },
    { img: "", tit: "", price: "", num: 0 },
    { img: "", tit: "", price: "", num: 0 },
];
let artgoods_page = 0;
let artgoods_title = [];
let allsort_index = 0;
// 本页导航
let leftlist = common_1.$id("leftlist");
titles.forEach((tit, i) => {
    let li = common_1.$add("li");
    li.className = `titList${i == 0 ? " active" : ""}`;
    li.innerHTML = tit;
    li.addEventListener("click", ev => {
        if (ev.button == 0) {
            (i => show(i))(i);
        }
    });
    leftlist.appendChild(li);
});
let products_good_list = common_1.$id("products-good_list");
let products_page = common_1.$id("products");
let products_buy = common_1.$id("buy");
products_buy.getElementsByTagName("button")[1].addEventListener("click", function (ev) {
    if (ev.button == 0) {
        products_buy.style.display = "none";
        products_buy.getElementsByTagName("img")[0].src = "";
        products_buy.querySelectorAll("p[name='name']")[0].innerHTML = "";
        products_buy.querySelectorAll("p[name='price']")[0].innerHTML = "";
        products_buy.querySelectorAll("p[name='num']")[0].innerHTML = "";
    }
});
products_buy.getElementsByTagName("button")[0].addEventListener("click", function (ev) {
    if (ev.button == 0) {
    }
});
let products_cx = common_1.$id("cx");
showPage(0);
// 产品图文介绍
// axios({ method: "GET", url: "artgoods.json" }).then((res) => {
// 	if (res.status == 200) {
let artgoods_allsort = common_1.artgoods.allsorts[allsort_index];
artgoods_title = common_1.artgoods.title;
let swiperImg = common_1.artgoods.swiperImg;
swiperImg.forEach((img) => {
    let swiper_slide = common_1.$add("div");
    swiper_slide.className = "swiper-slide";
    let image = new Image();
    image.src = img.src;
    swiper_slide.appendChild(image);
    common_1.$class("swiper-wrapper")[0].appendChild(swiper_slide);
});
new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
});
/**@type {HTMLDivElement} */
let products_artgoods_allsort = common_1.$class("products-artgoods-allsort")[0];
products_artgoods_allsort.style.background = `url(${artgoods_allsort}) no-repeat`;
let ul = products_artgoods_allsort.getElementsByTagName("ul")[0];
for (let i = 1; i <= artgoods_title.length; i++) {
    let li = common_1.$add("li");
    ul.appendChild(li);
    li.addEventListener("click", ev => {
        if (ev.button == 0) {
            (i => to(i))(i);
        }
    });
}
let products_artgoods_img = common_1.$class("products-artgoods-img")[0];
artgoods_title.forEach((title, i) => {
    let img = new Image();
    img.src = title.src;
    products_artgoods_img.appendChild(img);
    img.addEventListener("click", ev => ev.button == 0 && (i => to(i + 1))(i));
});
// 	} else console.log(res.statusText);
// }).catch(err => console.log(err));
function showPage(n) {
    switch (n) {
        case -1:
            products_good_list.style.display = "block";
            products_page.style.display = "none";
            products_cx.style.display = "none";
            break;
        case 0:
            products_good_list.style.display = "none";
            products_page.style.display = "block";
            products_cx.style.display = "none";
            break;
        case 1:
            products_good_list.style.display = "none";
            products_page.style.display = "none";
            products_cx.style.display = "block";
            break;
    }
}
function show(index) {
    let lis = common_1.$class("titList");
    for (let i = 0; i < lis.length; i++)
        lis[i].className = `titList${i == index ? " active" : ""}`;
    showPage(index);
}
function to(i) {
    console.log(i);
    artgoods_page = i;
    showPage(-1);
    console.log("跳轉成功，當前頁是" + artgoods_title[i - 1].tit);
    let products_good_title = common_1.$class("products-good_title")[0];
    let span = products_good_title.getElementsByTagName("span");
    span[1].innerHTML = titles[0];
    span[1].style.cursor = "pointer";
    span[1].addEventListener("click", ev => ev.button == 0 && showPage(0));
    span[2].innerHTML = artgoods_title[i - 1].tit;
    showProducts_good(artgoods_title[i - 1].tit);
}
function showProducts_good(name) {
    /**@type {{ src: string; height: string; goods: { src: any; price: string; num: number; name: string; }[]; }[]} */
    let goods_img = null;
    let goods = common_1.$id("goods");
    let goods_info = goods.getElementsByTagName("table")[0];
    goods_info.innerHTML = "";
    // axios({ method: "GET", url: "wen_gen_products.json", data: { name: name } }).then(res => {
    // 	if (res.status == 200) {
    goods_img = common_1.artproducts;
    goods_img.forEach((img, i) => {
        let tr = common_1.$add("tr");
        goods_info.appendChild(tr);
        let td = common_1.$add("td");
        tr.appendChild(td);
        td.className = "goods";
        let image = new Image();
        image.src = img.src;
        image.style.width = "100%";
        image.style.height = img.height;
        td.appendChild(image);
        img.goods.forEach((g, j) => {
            let good_div = common_1.$add("div");
            td.appendChild(good_div);
            let img = new Image();
            img.src = g.src;
            good_div.appendChild(img);
            good_div.innerHTML += `<div><span>${g.name}</span><span>RMB:${g.price}</span><button>点击购买</button></div>`;
            good_div.getElementsByTagName("button")[0].addEventListener("click", (ev) => ev.button == 0 && toBuy(g));
        });
    });
    console.log(artgoods_title);
    let $pages = common_1.$id("pages");
    $pages.innerHTML = "";
    setPagesButton({ innerHTML: "首页", title: artgoods_title[0].tit, click: () => to(1) });
    artgoods_page > 1 && setPagesButton({ innerHTML: "上一页", title: artgoods_title[artgoods_page - 2].tit, click: () => to(artgoods_page - 1) });
    artgoods_title.forEach((goods, i) => setPagesButton({ innerHTML: (i + 1).toString(), title: '该页为' + goods.tit, click: () => to(i + 1) }));
    artgoods_page < artgoods_title.length - 1 && setPagesButton({ innerHTML: "下一页", title: artgoods_title[artgoods_page].tit, click: () => to(artgoods_page + 1) });
    setPagesButton({ innerHTML: "末页", title: artgoods_title[0].tit, click: () => to(artgoods_title.length) });
    function setPagesButton({ innerHTML, title, click }) {
        let page = common_1.$add("span");
        page.innerHTML = innerHTML;
        page.title = title;
        page.addEventListener("click", ev => ev.button == 0 && click());
        page.style.cursor = "pointer";
        $pages.appendChild(page);
    }
    // 	} else console.log(res.statusText);
    // }).catch((err) => console.log(err));
}
function toBuy(good) {
    products_buy.style.display = "block";
    products_buy.getElementsByTagName("img")[0].src = good.src;
    products_buy.querySelectorAll("p[name='name']")[0].innerHTML = good.name;
    products_buy.querySelectorAll("p[name='price']")[0].innerHTML = good.price;
    products_buy.querySelectorAll("p[name='num']")[0].innerHTML = good.num;
    common_1.$id("PurchaseQuantity").focus();
}
new GoToTop_1.default();
