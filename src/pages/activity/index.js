import Nav from "../../assets/js/Nav";
import { $all, $id, $add, activity } from "../../assets/js/common";
import axios from "axios";
import "normalize.css";
import "../../assets/css/common.css";
import "../../assets/css/top-nav.css";
import "./index.css";
console.clear();
axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";
new Nav(7);
// axios({ method: "GET", url: "activity_nav.json" }).then(res => {
// 	if (res.status == 200) {
activity.nav.forEach(function (res) {
    var li = $add("li");
    $id("navigation").appendChild(li);
    var a = $add("a");
    a.href = res.url;
    a.innerHTML = res.title;
    a.target = "_blank";
    li.appendChild(a);
    if (res.navigation) {
        var ul_1 = $add("ul");
        li.appendChild(ul_1);
        res.navigation.forEach(function (res) {
            var li = $add("li");
            ul_1.appendChild(li);
            var a = $add("a");
            a.href = res.url;
            a.innerHTML = res.title;
            a.target = "_blank";
            li.appendChild(a);
            if (res.navigation) {
                var ul_2 = $add("ul");
                li.appendChild(ul_2);
                res.navigation.forEach(function (res) {
                    var li = $add("li");
                    ul_2.appendChild(li);
                    var a = $add("a");
                    a.href = res.url;
                    a.innerHTML = res.title;
                    a.target = "_blank";
                    li.appendChild(a);
                });
            }
        });
    }
});
$all("#navigation li").forEach(function (navigation) {
    var ul = navigation.getElementsByTagName("ul")[0];
    if (ul) {
        navigation.addEventListener("mousemove", function () { return ul.style.display = "block"; });
        navigation.addEventListener("mouseout", function () { return ul.style.display = "none"; });
    }
});
(function () {
    var size = 20;
    var pages = 0;
    var list = [];
    var page = 0;
    var result;
    var $fenye = $id("fenye");
    $fenye.style.margin = "30px 0";
    $fenye.style.textAlign = "center";
    $fenye.style.fontFamily = "微软雅黑";
    $fenye.style.fontSize = "12px";
    $fenye.style.color = "#000";
    // axios({ method: "GET", url: "activity_tit.json" }).then(res => {
    // 	if (res.status == 200) {
    result = activity.tit;
    setPagrs(result.length);
    setList(1);
    // 	} else console.log(res.statusText);
    // }).catch((err) => console.log(err));
    function setPagrs(length) {
        pages = Math.ceil(length / size);
        addSpan("[&lt;]", function () { return setList(page - 1); });
        var _loop_1 = function (i) {
            addSpan("[" + i + "]", function () { return setList(i); });
        };
        for (var i = 1; i <= pages; i++) {
            _loop_1(i);
        }
        addSpan("[&gt;]", function () { return setList(page + 1); });
    }
    function addSpan(html, click) {
        var span = $add("span");
        span.innerHTML = html;
        span.addEventListener("click", function (ev) { return ev.button == 0 && click(); });
        span.style.cursor = "pointer";
        $fenye.appendChild(span);
    }
    function setList(n) {
        console.log("page: ", n);
        if (n <= 0 || n > pages)
            return;
        page = n;
        for (var i = 0; i < size && i + (n - 1) * size < result.length; i++) {
            list[i] = result[i + (n - 1) * size];
        }
        $all(".titlist04.f14")[0].innerHTML = "";
        console.log($all(".titlist04.f14")[0].getElementsByTagName("li").length);
        list.forEach(function (info) {
            var li = $add("li");
            li.innerHTML = "<span>" + info.year + "-" + info.month + "-" + info.date + "</span>";
            var a = $add("a");
            a.href = info.url;
            a.target = "_blank";
            a.innerHTML = info.title;
            li.appendChild(a);
            $all(".titlist04.f14")[0].appendChild(li);
        });
        console.log($all(".titlist04.f14")[0].getElementsByTagName("li").length);
    }
})();
// axios({ method: "GET", url: "activity_erji.json" }).then(res => {
// 	if (res.status == 200) {
console.log($all(".erji-right.rl")[0]);
var $erji = $all(".erji-right.rl")[0];
/**@type {{ title: { url: string; tit: string; }; titlist: { url: string; tit: string; }[]; }[]} */
var data = activity.erji;
data.forEach(function (_a) {
    var title = _a.title, titlist = _a.titlist;
    var $column01 = $add("div");
    $column01.className = "column01";
    $erji.appendChild($column01);
    var $titlebg = $add("div");
    $column01.appendChild($titlebg);
    $titlebg.className = "titlebg";
    $titlebg.innerHTML = "<div class=\"txt bai\"><a href=\"" + title.url + "\" target=\"_blank\">" + title.tit + "</a></div>";
    var $titlist = $add("ul");
    $titlist.className = "titlist";
    $column01.appendChild($titlist);
    titlist.forEach(function (_a) {
        var url = _a.url, tit = _a.tit;
        return $titlist.innerHTML += "<li><a href=\"" + url + "\" target=\"_blank\">" + tit + "</a></li>";
    });
});
// 	}
// });
