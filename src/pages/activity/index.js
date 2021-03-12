"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = __importDefault(require("../../assets/js/Nav"));
const common_1 = require("../../assets/js/common");
const axios_1 = __importDefault(require("axios"));
require("normalize.css");
require("../../assets/scss/common.scss");
require("../../assets/scss/top-nav.scss");
require("./index.scss");
console.clear();
axios_1.default.defaults.baseURL = common_1.baseURL;
new Nav_1.default(7);
// axios({ method: "GET", url: "activity_nav.json" }).then(res => {
// 	if (res.status == 200) {
common_1.activity.nav.forEach(res => {
    let li = common_1.$add("li");
    common_1.$id("navigation").appendChild(li);
    let a = common_1.$add("a");
    a.href = res.url;
    a.innerHTML = res.title;
    a.target = "_blank";
    li.appendChild(a);
    if (res.navigation) {
        let ul = common_1.$add("ul");
        li.appendChild(ul);
        res.navigation.forEach(res => {
            let li = common_1.$add("li");
            ul.appendChild(li);
            let a = common_1.$add("a");
            a.href = res.url;
            a.innerHTML = res.title;
            a.target = "_blank";
            li.appendChild(a);
            if (res.navigation) {
                let ul = common_1.$add("ul");
                li.appendChild(ul);
                res.navigation.forEach(res => {
                    let li = common_1.$add("li");
                    ul.appendChild(li);
                    let a = common_1.$add("a");
                    a.href = res.url;
                    a.innerHTML = res.title;
                    a.target = "_blank";
                    li.appendChild(a);
                });
            }
        });
    }
});
common_1.$all("#navigation li").forEach((navigation) => {
    let ul = navigation.getElementsByTagName("ul")[0];
    if (ul) {
        navigation.addEventListener("mousemove", () => ul.style.display = "block");
        navigation.addEventListener("mouseout", () => ul.style.display = "none");
    }
});
(() => {
    const size = 20;
    let pages = 0;
    let list = [];
    let page = 0;
    let result;
    let $fenye = common_1.$id("fenye");
    $fenye.style.margin = "30px 0";
    $fenye.style.textAlign = "center";
    $fenye.style.fontFamily = "微软雅黑";
    $fenye.style.fontSize = "12px";
    $fenye.style.color = "#000";
    // axios({ method: "GET", url: "activity_tit.json" }).then(res => {
    // 	if (res.status == 200) {
    result = common_1.activity.tit;
    setPagrs(result.length);
    setList(1);
    // 	} else console.log(res.statusText);
    // }).catch((err) => console.log(err));
    function setPagrs(length) {
        pages = Math.ceil(length / size);
        addSpan("[&lt;]", () => setList(page - 1));
        for (let i = 1; i <= pages; i++) {
            addSpan(`[${i}]`, () => setList(i));
        }
        addSpan("[&gt;]", () => setList(page + 1));
    }
    function addSpan(html, click) {
        let span = common_1.$add("span");
        span.innerHTML = html;
        span.addEventListener("click", ev => ev.button == 0 && click());
        span.style.cursor = "pointer";
        $fenye.appendChild(span);
    }
    function setList(n) {
        console.log("page: ", n);
        if (n <= 0 || n > pages)
            return;
        page = n;
        for (let i = 0; i < size && i + (n - 1) * size < result.length; i++) {
            list[i] = result[i + (n - 1) * size];
        }
        common_1.$all(".titlist04.f14")[0].innerHTML = "";
        console.log(common_1.$all(".titlist04.f14")[0].getElementsByTagName("li").length);
        list.forEach(info => {
            let li = common_1.$add("li");
            li.innerHTML = `<span>${info.year}-${info.month}-${info.date}</span>`;
            let a = common_1.$add("a");
            a.href = info.url;
            a.target = "_blank";
            a.innerHTML = info.title;
            li.appendChild(a);
            common_1.$all(".titlist04.f14")[0].appendChild(li);
        });
        console.log(common_1.$all(".titlist04.f14")[0].getElementsByTagName("li").length);
    }
})();
// axios({ method: "GET", url: "activity_erji.json" }).then(res => {
// 	if (res.status == 200) {
console.log(common_1.$all(".erji-right.rl")[0]);
let $erji = common_1.$all(".erji-right.rl")[0];
/**@type {{ title: { url: string; tit: string; }; titlist: { url: string; tit: string; }[]; }[]} */
let data = common_1.activity.erji;
data.forEach(({ title, titlist }) => {
    let $column01 = common_1.$add("div");
    $column01.className = "column01";
    $erji.appendChild($column01);
    let $titlebg = common_1.$add("div");
    $column01.appendChild($titlebg);
    $titlebg.className = "titlebg";
    $titlebg.innerHTML = `<div class="txt bai"><a href="${title.url}" target="_blank">${title.tit}</a></div>`;
    let $titlist = common_1.$add("ul");
    $titlist.className = "titlist";
    $column01.appendChild($titlist);
    titlist.forEach(({ url, tit }) => $titlist.innerHTML += `<li><a href="${url}" target="_blank">${tit}</a></li>`);
});
// 	}
// });
