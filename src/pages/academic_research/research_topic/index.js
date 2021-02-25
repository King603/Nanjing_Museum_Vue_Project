import Nav from "../../../assets/js/Nav";
import { $class, $id, $add, academic } from "../../../assets/js/common";
import axios from "axios";
import "normalize.css";
import "../../../assets/css/common.css";
import "../../../assets/css/top-nav.css";
import "./index.css";
console.clear();
new Nav(6);
axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";
import("../../../assets/js/research");
var h1 = "研究课题表";
$class("h1")[0].innerHTML = h1;
// axios({ method: "GET", url: "academic-research_topic.json" }).then((res) => {
academic.topic.forEach(function (_a) {
    var theme = _a.theme, titles = _a.titles;
    var tr = $add("tr");
    $id("info").appendChild(tr);
    tr.innerHTML = "<td class=\"theme\">" + theme + "</td>";
    var td = $add("td");
    td.className = "title";
    var ol = $add("ol");
    td.appendChild(ol);
    tr.appendChild(td);
    titles.forEach(function (_a, i) {
        var title = _a.title, url = _a.url;
        var li = $add("li");
        ol.appendChild(li);
        var a = $add("a");
        a.href = url;
        a.innerHTML = i + 1 + "\u3001" + title;
        li.appendChild(a);
    });
});
// }).catch((err) => console.log(err));
