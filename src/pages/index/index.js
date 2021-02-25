import Nav from "../../assets/js/Nav";
import "normalize.css";
import "../../assets/css/common.css";
import "../../assets/css/top-nav.css";
import axios from "axios";
import { $id, $add, swiperImgs, newList } from '../../assets/js/common.js';
var Swiper = /**@class */ require("../../assets/lib/swiper");
import "../../assets/css/swiper.css";
import "./index.css";
import "./news.css";
axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";
console.clear();
// 头部导航
new Nav(0);
// axios({ method: "GET", url: "swiper.json" }).then(res => {
// 	if (res.status == 200) {
swiperImgs.forEach(function (img_src) {
    var swiper_slide = $add("div");
    swiper_slide.className = "swiper-slide";
    var img = new Image();
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
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
});
// 	} else console.log(res.statusText);
// }).catch((res) => console.log(res));
var list = [];
var size = 3;
var pages = 0;
var n = 0;
var $news = $id("news");
var $pages = $id("pages");
// axios({ method: "GET", url: "newsList.json" }).then((res) => {
// 	if (res.status == 200) {
var newsList = newList;
// 计算页数
pages = Math.ceil(newsList.length / size);
$news.innerHTML = "";
list.forEach(function (news, i) {
    var a = $add("a");
    a.href = news.to;
    $news.appendChild(a);
    var div_newsList = $add("div");
    div_newsList.className = "newsList";
    a.appendChild(div_newsList);
    var img = new Image();
    img.src = news.img.src;
    img.title = news.img.title;
    div_newsList.appendChild(img);
    div_newsList.innerHTML += "<div class=\"info\"><h3>" + news.title + "</h3><p>" + news.text + "</p></div><div class=\"date\"><h2>" + news.month + "/" + news.date + "</h2><p>" + news.year + "</p></div>";
});
console.log(pages);
setPages("首页", function () { return n != 1 && showList(1); });
setPages("上一页", function () { return n != 1 && shangye(); });
var _loop_1 = function (num) {
    setPages(num.toString(), function () { return num != n && showList(num); });
};
for (var num = 1; num <= pages; num++) {
    _loop_1(num);
}
setPages("下一页", function () { return n != pages && xiaye(); });
setPages("末页", function () { return n != pages && showList(pages); });
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
    for (var i = 0; (n - 1) * size + i < newsList.length && i < size; i++) {
        list[i] = newsList[(n - 1) * size + i];
    }
    $news.innerHTML = "";
    list.forEach(function (news, i) {
        var a = $add("a");
        a.href = news.to;
        $news.appendChild(a);
        var div_newsList = $add("div");
        div_newsList.className = "newsList";
        a.appendChild(div_newsList);
        var img = new Image();
        img.src = news.img.src;
        img.title = news.img.title;
        div_newsList.appendChild(img);
        div_newsList.innerHTML += "<div class=\"info\"><h3>" + news.title + "</h3><p>" + news.text + "</p></div><div class=\"date\"><h2>" + news.month + "/" + news.date + "</h2><p>" + news.year + "</p></div>";
    });
    var lis = $pages.getElementsByTagName("li");
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
    for (var i = 0; i <= pages; i++) {
        var _a = lis[i + 1].classList, add = _a.add, remove = _a.remove;
        i == n ? add("active") : remove("active");
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
    var li = $add("li");
    $pages.appendChild(li);
    li.innerHTML = "<span>" + innerHTML + "</span>";
    li.addEventListener("click", function (ev) { return ev.button == 0 && click(); });
}
