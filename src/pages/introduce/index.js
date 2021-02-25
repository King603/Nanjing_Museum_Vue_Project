import Nav from "../../assets/js/Nav";
import GoTotop from "../../assets/js/GoToTop";
import { $all, $class, $id, $add, introduces, eventList, List, Info } from "../../assets/js/common";
import axios from "axios";
import "normalize.css";
import "../../assets/css/common.css";
import "../../assets/css/top-nav.css";
import "./index.css";
console.clear();
axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";
// 主体
(function () {
    new Nav(1);
    var bgImgUrl = require("../../assets/static/bg/2bg.jpg");
    var logoBgUrl = require("../../assets/static/bg/indextop.jpg");
    var logo = require("../../assets/static/logo/logo.png");
    var index = 0;
    var buttonList = ["博物馆简介", "大事记", "名人致辞"];
    var iframes = $all(".main .iframe");
    initIframe();
    document.body.style.backgroundImage = "url(" + bgImgUrl + ")";
    /**@type {HTMLDivElement} */
    var logobg = $class("logobg")[0];
    logobg.style.backgroundImage = "url(" + logoBgUrl + ")";
    var img = new Image();
    img.src = logo;
    img.className = "introduce-logo";
    logobg.appendChild(img);
    var title = logobg.getElementsByClassName("title")[0];
    updatePage(index);
    buttonList.forEach(function (name, i) {
        var div = document.createElement("div");
        div.className = "title_bg";
        div.innerHTML = name;
        title.appendChild(div);
    });
    var title_bg = title.getElementsByClassName("title_bg");
    title_bg[0].className = "title_bg designate";
    var _loop_1 = function (i) {
        title_bg[i].addEventListener("click", function (ev) { return (ev.button == 0) && showPage(i); });
    };
    for (var i = 0; i < title_bg.length; i++) {
        _loop_1(i);
    }
    function showPage(n) {
        index = n;
        for (var i = 0; i < title_bg.length; i++)
            title_bg[i].className = "title_bg" + (index == i ? " designate" : "");
        updatePage(index);
    }
    function updatePage(index) {
        initIframe();
        iframes[index].className = "";
    }
    function initIframe() {
        for (var i = 0; i < iframes.length; i++)
            iframes[i].className = "hidden";
    }
})();
// Page1
(function () {
    // axios({ method: "GET", url: "introduces.json" }).then((res) => {
    // 	if (res.status == 200) {
    $class("introduce-title")[0].innerHTML = introduces.title;
    introduces.text.split("\n").forEach(function (text) {
        var div = $add("div");
        div.className = "text";
        div.innerHTML = text;
        $id("text").appendChild(div);
    });
    var $introduces = $id("introduces");
    introduces.introduces.forEach(function (_a) {
        var imgs = _a.imgs, title = _a.title;
        imgs.forEach(function (_a) {
            var src = _a.src, small = _a.small;
            var image = new Image();
            image.src = src;
            image.className = small ? "small_img" : "";
            $introduces.appendChild(image);
        });
        var p = $add("p");
        p.innerHTML = title;
        $introduces.appendChild(p);
    });
    // 	} else console.log(res.statusText);
    // }).catch((res) => console.log(res));
})();
// Page2
(function () {
    var list_style_image = require("../../assets/static/icon.jpg");
    var ul = document.getElementsByClassName("box_event02-ul")[0];
    // axios({ method: "GET", url: "eventList.json" }).then((res) => {
    // 	if (res.status == 200) {
    eventList.forEach(function (news) {
        var li = $add("li");
        li.addEventListener("click", function (ev) {
            if (ev.button == 0) {
                show(news.year, news.date);
            }
        });
        ul.appendChild(li);
        var img = new Image();
        img.src = list_style_image;
        li.appendChild(img);
        li.innerHTML += "<span>" + news.year + "\u5E74\u535A\u7269\u9986\u5927\u4E8B\u8BB0</span><span>" + news.date + "</span>";
    });
    // 	} else console.log(res.statusText);
    // }).catch((res) => console.log(res));
    var info1 = $id("info1");
    var info2 = $id("info2");
    info2.style.display = "none";
    info2.getElementsByClassName("goBack")[0].addEventListener("click", function (ev) { return ev.button == 0 && goBack(); });
    var page2Title = info2.getElementsByClassName("page2Title")[0];
    var author = info2.getElementsByClassName("author")[0];
    var article_t = info2.getElementsByClassName("article_t")[0];
    function show(yy, dd) {
        // 获取年份带入获取信息
        var year = yy;
        var date = dd;
        // axios({ method: "GET", url: "list.json", data: { year: yy, date: dd } }).then((res) => {
        // 	if (res.status == 200) {
        var _a = List({ year: yy, date: dd }), list = _a.list, name = _a.name;
        var visitNum = parseInt((Math.random() * 20000).toString());
        var readNum = parseInt((Math.random() * 9999).toString());
        info1.style.display = "none";
        info2.style.display = "block";
        page2Title.innerHTML = year + "\u5E74\u535A\u7269\u9986\u5927\u4E8B\u8BB0";
        author.innerHTML = date;
        list.forEach(function (data) {
            var p = document.createElement("p");
            p.innerHTML = "<strong>" + data.date + "\uFF1A&nbsp;</strong><span>" + data.info + "</span>";
            article_t.appendChild(p);
        });
        article_t.innerHTML += "<br /><br /><br /><div><p>\u535A\u7269\u9986\u5168\u5E74\u63A5\u5F85\u53C2\u89C2" + visitNum + "\u4EBA\u6B21\u3002</p><p>\u5FAE\u4FE1\u516C\u4F17\u53F7\u5173\u6CE8\u4EBA\u6570" + readNum + "\u4EBA\uFF0C\u7D2F\u8BA1\u9605\u8BFB\u91CF4.5\u4E07\u4F59\u4EBA\u6B21\u3002</p><p>\uFF08" + name + "\uFF09</p></div>";
        // 	}
        // }).catch((res) => console.log(res));
    }
    function goBack() {
        info2.style.display = "none";
        info1.style.display = "block";
        page2Title.innerHTML = "";
        author.innerHTML = "";
        article_t.innerHTML = "";
    }
})();
// page3
(function () {
    var wenben = document.getElementById("wenben");
    // axios({ method: "GET", url: "info.json" }).then((res) => {
    var title = Info.title, responsive = Info.responsive, info = Info.info, signature = Info.signature, matter = Info.matter;
    var texts = matter.split("\n");
    $class("page3Title")[0].innerHTML = title;
    $class("responsive-img")[0].src = responsive;
    $class("page3Info")[0].innerHTML = "<p>" + info.name + "</p><p>" + info.position + "</p>";
    wenben.innerHTML = "";
    texts.forEach(function (text) {
        var p = document.createElement("p");
        p.className = "wenben";
        p.innerHTML = "<span>" + text + "</span>";
        wenben.appendChild(p);
    });
    $class("newsInfo")[0].src = signature;
    // }).catch((res) => console.log(res));
})();
new GoTotop();
