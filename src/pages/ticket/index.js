import Nav from "../../assets/js/Nav";
import axios from "axios";
import "normalize.css";
import "../../assets/css/common.css";
import "../../assets/css/top-nav.css";
import "./index.css";
import { $add, $id, ticket } from "../../assets/js/common";
console.clear();
axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";
new Nav(5);
var nav_tit = ["主题免费票", "普通门票", "年票"];
var nav_tit_index = 1;
var dateList = [];
var time_index = -1;
var news_num = 4;
var days = 10;
var newsList = [];
function getDateList() {
    var dates = [];
    dates[0] = new Date();
    for (var i = 1; i < days + 1; i++)
        dates[i] = new Date(dates[i - 1].getTime() + 86400000);
    var dateList = [];
    for (var i = 0, j = 0; i < 21; i++) {
        var isOut = i < dates[0].getDay() - 1 || j >= dates.length;
        dateList[i] = {
            m: isOut ? "" : (dates[j].getMonth() + 1).toString(),
            d: isOut ? "" : dates[j].getDate().toString(),
            t: isOut
                ? ""
                : dates[j++].getDay() == 1
                    ? "闭馆"
                    : j - 1 == 0
                        ? "已售罄"
                        : "\u4F59" + parseInt((Math.random() * 10000).toString()) + "\u4EBA",
            className: isOut
                ? ""
                : j - 1 == 0 || dates[j - 1].getDay() == 1
                    ? "closed"
                    : "date"
        };
    }
    return dateList;
}
function set_am_pm(i) {
    time_index = i;
}
function set_date(date) {
    console.log(date);
}
var $nav_tit = $id("nav_tit");
nav_tit.forEach(function (nav, i) {
    var div = $add("div");
    div.className = nav_tit_index == i ? "active" : "";
    div.innerHTML = nav;
    $nav_tit.appendChild(div);
});
dateList = getDateList();
var $date = $id("date");
dateList.forEach(function (date, i) {
    var li = $add("li");
    li.className = date.className;
    li.addEventListener("click", function (ev) { return ev.button == 0 && set_date(date); });
    date.m && (li.innerHTML = "<span>" + date.m + "\u6708" + date.d + "\u65E5</span><br />" + date.t);
    $date.appendChild(li);
});
var $setting = $id("setting");
["上午", "下午", "当日"].forEach(function (set, i) {
    var div = $add("div");
    div.className = time_index == i ? "active" : "";
    div.innerHTML = set;
    div.addEventListener("click", function (ev) { return ev.button == 0 && set_am_pm(i); });
    $setting.appendChild(div);
});
// axios({ method: "GET", url: "ticket.json", }).then((res) => {
// 	if (res.status == 200) {
var result = ticket;
for (var i = 0; i < news_num && i < result.dataList.length; i++)
    newsList[i] = result.dataList[i];
var $newsList = $id("newsList");
newsList.forEach(function (news, i) {
    var div = $add("div");
    div.innerHTML = "<p><span>" + i + "</span><span>" + news.title + "</span><span>" + news.year + "/" + news.month + "/" + news.date + "</span></p><br />";
    $newsList.appendChild(div);
});
$newsList.innerHTML += '<div class="button">更多&gt;&gt;</div>';
result.ticket_list.forEach(function (ticket) { return olList($id("gou"), ticket); });
result.refund_list.forEach(function (ticket) { return olList($id("tui"), ticket); });
result.checking_list.forEach(function (ticket) { return olList($id("yan"), ticket); });
function olList(HTMLElement, ticket) {
    var li = $add("li");
    li.innerHTML = ticket;
    HTMLElement.appendChild(li);
}
result.Visit_time.forEach(function (time, i) {
    var tr = $add("tr");
    tr.innerHTML = "<th>" + (i == 0 ? "旺季" : "淡季") + "\uFF08\u6BCF\u5E74" + time.start + "\u81F3" + time.end + "\uFF09</th><td>" + time.Start_selling_tickets + "</td><td>" + time.Stop_selling_tickets + "</td><td>" + time.Stop_to_enter + "</td><td>" + time.Scenic_area_closed + "</td>";
    document.querySelectorAll("#Visit>tbody")[0].appendChild(tr);
});
result.line.forEach(function (line) {
    var li = $add("li");
    li.innerHTML = line;
    $id("line").appendChild(li);
});
result.policy.forEach(function (p) {
    var li = $add("li");
    $id("policy").appendChild(li);
    li.innerHTML = "<h3>" + p.title + "</h3>";
    var ol = $add("ol");
    li.appendChild(ol);
    ol.className = "ordered_list";
    p.texts.forEach(function (text) {
        var li = $add("li");
        ol.appendChild(li);
        li.innerHTML = text;
    });
});
// 	} else console.log(res.statusText);
// }).catch((res) => console.log(res));
