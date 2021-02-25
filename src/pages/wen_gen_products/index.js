import Nav from "../../assets/js/Nav";
import GoTotop from "../../assets/js/GoToTop";
import axios from "axios";
import { $add, $class, $id, artgoods, artproducts } from "../../assets/js/common";
var Swiper = require("../../assets/lib/swiper");
import "normalize.css";
import "../../assets/css/common.css";
import "../../assets/css/top-nav.css";
import "../../assets/css/swiper.css";
import "./index.css";
console.clear();
new Nav(4);
axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";
var titles = ["产品图文介绍", "产品购买", "产品防伪溯源信息查询、举报"];
var products = [
    { img: "", tit: "", price: "", num: 0 },
    { img: "", tit: "", price: "", num: 0 },
    { img: "", tit: "", price: "", num: 0 },
    { img: "", tit: "", price: "", num: 0 },
];
var artgoods_page = 0;
var artgoods_title = [];
var allsort_index = 0;
// 本页导航
var leftlist = $id("leftlist");
titles.forEach(function (tit, i) {
    var li = $add("li");
    li.className = "titList" + (i == 0 ? " active" : "");
    li.innerHTML = tit;
    li.addEventListener("click", function (ev) {
        if (ev.button == 0) {
            (function (i) { return show(i); })(i);
        }
    });
    leftlist.appendChild(li);
});
var products_good_list = $id("products-good_list");
var products_page = $id("products");
var products_buy = $id("buy");
var products_cx = $id("cx");
showPage(0);
// 产品图文介绍
// axios({ method: "GET", url: "artgoods.json" }).then((res) => {
// 	if (res.status == 200) {
var artgoods_allsort = artgoods.allsorts[allsort_index];
artgoods_title = artgoods.title;
var swiperImg = artgoods.swiperImg;
swiperImg.forEach(function (img) {
    var swiper_slide = $add("div");
    swiper_slide.className = "swiper-slide";
    var image = new Image();
    image.src = img.src;
    swiper_slide.appendChild(image);
    $class("swiper-wrapper")[0].appendChild(swiper_slide);
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
var products_artgoods_allsort = $class("products-artgoods-allsort")[0];
products_artgoods_allsort.style.background = "url(" + artgoods_allsort + ") no-repeat";
var ul = products_artgoods_allsort.getElementsByTagName("ul")[0];
var _loop_1 = function (i) {
    var li = $add("li");
    ul.appendChild(li);
    li.addEventListener("click", function (ev) {
        if (ev.button == 0) {
            (function (i) { return to(i); })(i);
        }
    });
};
for (var i = 1; i <= artgoods_title.length; i++) {
    _loop_1(i);
}
var products_artgoods_img = $class("products-artgoods-img")[0];
artgoods_title.forEach(function (title, i) {
    var img = new Image();
    img.src = title.src;
    products_artgoods_img.appendChild(img);
    img.addEventListener("click", function (ev) {
        if (ev.button == 0) {
            (function (i) { return to(i + 1); })(i);
        }
    });
});
// 	} else console.log(res.statusText);
// }).catch(err => console.log(err));
function showPage(n) {
    switch (n) {
        case -1:
            products_good_list.style.display = "block";
            products_page.style.display = "none";
            products_buy.style.display = "none";
            products_cx.style.display = "none";
            break;
        case 0:
            products_good_list.style.display = "none";
            products_page.style.display = "block";
            products_buy.style.display = "none";
            products_cx.style.display = "none";
            break;
        case 1:
            products_good_list.style.display = "none";
            products_page.style.display = "none";
            products_buy.style.display = "block";
            products_cx.style.display = "none";
            break;
        case 2:
            products_good_list.style.display = "none";
            products_page.style.display = "none";
            products_buy.style.display = "none";
            products_cx.style.display = "block";
            break;
    }
}
function show(index) {
    var lis = $class("titList");
    for (var i = 0; i < lis.length; i++)
        lis[i].className = "titList" + (i == index ? " active" : "");
    showPage(index);
}
function to(i) {
    console.log(i);
    artgoods_page = i;
    showPage(-1);
    console.log("跳轉成功，當前頁是" + artgoods_title[i - 1].tit);
    var products_good_title = $class("products-good_title")[0];
    var span = products_good_title.getElementsByTagName("span");
    span[1].innerHTML = titles[0];
    span[1].style.cursor = "pointer";
    span[1].addEventListener("click", function (ev) { return ev.button == 0 && showPage(0); });
    span[2].innerHTML = artgoods_title[i - 1].tit;
    showProducts_good(artgoods_title[i - 1].tit);
}
function showProducts_good(name) {
    var goods_img = null;
    var goods = $id("goods");
    var goods_info = goods.getElementsByTagName("table")[0];
    goods_info.innerHTML = "";
    // axios({ method: "GET", url: "wen_gen_products.json", data: { name: name } }).then(res => {
    // 	if (res.status == 200) {
    goods_img = artproducts;
    goods_img.forEach(function (img, i) {
        var tr = $add("tr");
        goods_info.appendChild(tr);
        var td = $add("td");
        tr.appendChild(td);
        td.className = "goods";
        var image = new Image();
        image.src = img.src;
        image.style.width = "100%";
        image.style.height = img.height;
        td.appendChild(image);
        img.goods.forEach(function (g, j) {
            var good_div = $add("div");
            td.appendChild(good_div);
            var img = new Image();
            img.src = g.src;
            good_div.appendChild(img);
            good_div.innerHTML += "<div><span>" + g.name + "</span><span>RMB:" + g.price + "</span><span>\u70B9\u51FB\u8D2D\u4E70</span></div>";
        });
    });
    console.log(artgoods_title);
    var $pages = $id("pages");
    $pages.innerHTML = "";
    setPagesButton("首页", artgoods_title[0].tit, function () { return to(1); });
    artgoods_page > 1 && setPagesButton("上一页", artgoods_title[artgoods_page - 2].tit, function () { return to(artgoods_page - 1); });
    artgoods_title.forEach(function (goods, i) { return setPagesButton(i + 1, '该页为' + goods.tit, function () { return to(i + 1); }); });
    artgoods_page < artgoods_title.length - 1 && setPagesButton("下一页", artgoods_title[artgoods_page].tit, function () { return to(artgoods_page + 1); });
    setPagesButton("末页", artgoods_title[0].tit, function () { return to(artgoods_title.length); });
    function setPagesButton(innerHTML, title, click) {
        var page = $add("span");
        page.innerHTML = innerHTML;
        page.title = title;
        page.addEventListener("click", function (ev) { return ev.button == 0 && click(); });
        page.style.cursor = "pointer";
        $pages.appendChild(page);
    }
    // 	} else console.log(res.statusText);
    // }).catch((err) => console.log(err));
}
new GoTotop();
