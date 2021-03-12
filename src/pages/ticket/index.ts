import Nav from "../../assets/js/Nav";
import axios from "axios";
import "normalize.css";
import "../../assets/scss/common.scss";
import "../../assets/scss/top-nav.scss";
import "./index.scss";
import { $add, $id, baseURL, ticket } from "../../assets/js/common";

console.clear();
axios.defaults.baseURL = baseURL;
new Nav(5);

let nav_tit = ["主题免费票", "普通门票", "年票"];
let nav_tit_index = 1;
let dateList: LIST[] = [];
let time_index = -1;
let news_num = 4;
let days = 10;
let newsList = [];

interface LIST {
	m: string;
	d: string;
	t: string;
	className: string;
}
function getDateList() {
	let dates: Date[] = [];
	dates[0] = new Date();
	for (let i = 1; i < days + 1; i++)
		dates[i] = new Date(dates[i - 1].getTime() + 86400000);

	let dateList: LIST[] = [];
	for (let i = 0, j = 0; i < 21; i++) {
		let isOut = i < dates[0].getDay() - 1 || j >= dates.length;
		dateList[i] = {
			m: isOut ? "" : (dates[j].getMonth() + 1).toString(),
			d: isOut ? "" : dates[j].getDate().toString(),
			t: isOut
				? ""
				: dates[j++].getDay() == 1
					? "闭馆"
					: j - 1 == 0
						? "已售罄"
						: `余${parseInt((Math.random() * 10000).toString())}人`,
			className: isOut
				? ""
				: j - 1 == 0 || dates[j - 1].getDay() == 1
					? "closed"
					: "date",
		};
	}
	return dateList;
}
function set_am_pm(i: number) {
	time_index = i;
}
function set_date(date: LIST) {
	console.log(date)
}

let $nav_tit = $id("nav_tit");
nav_tit.forEach((nav, i) => {
	let div = $add("div");
	div.className = nav_tit_index == i ? "active" : "";
	div.innerHTML = nav;
	$nav_tit.appendChild(div);
});

dateList = getDateList();
let $date = $id("date");
dateList.forEach((date, i) => {
	let li = $add("li");
	li.className = date.className;
	li.addEventListener("click", ev => ev.button == 0 && set_date(date));
	date.m && (li.innerHTML = `<span>${date.m}月${date.d}日</span><br />${date.t}`);
	$date.appendChild(li);
});

let $setting = $id("setting");
["上午", "下午", "当日"].forEach((set, i) => {
	let div = $add("div");
	div.className = time_index == i ? "active" : "";
	div.innerHTML = set;
	div.addEventListener("click", ev => ev.button == 0 && set_am_pm(i));
	$setting.appendChild(div);
});

// axios({ method: "GET", url: "ticket.json", }).then((res) => {
// 	if (res.status == 200) {
let result = ticket;
for (let i = 0; i < news_num && i < result.dataList.length; i++)
	newsList[i] = result.dataList[i];
let $newsList = $id("newsList");
newsList.forEach((news, i) => {
	let div = $add("div");
	div.innerHTML = `<p><span>${i}</span><span>${news.title}</span><span>${news.year}/${news.month}/${news.date}</span></p><br />`;
	$newsList.appendChild(div);
});
$newsList.innerHTML += '<div class="button">更多&gt;&gt;</div>';
result.ticket_list.forEach(ticket => olList("gou", ticket));
result.refund_list.forEach(ticket => olList("tui", ticket));
result.checking_list.forEach(ticket => olList("yan", ticket));
function olList(id: string, ticket: string) {
	let li = $add("li");
	li.innerHTML = ticket;
	$id(id).appendChild(li);
}
result.Visit_time.forEach((time, i) => {
	let tr = $add("tr");
	tr.innerHTML = `<th>${i == 0 ? "旺季" : "淡季"}（每年${time.start}至${time.end}）</th><td>${time.Start_selling_tickets}</td><td>${time.Stop_selling_tickets}</td><td>${time.Stop_to_enter}</td><td>${time.Scenic_area_closed}</td>`;
	document.querySelectorAll("#Visit>tbody")[0].appendChild(tr);
});
result.line.forEach(line => {
	let li = $add("li");
	li.innerHTML = line;
	$id("line").appendChild(li);
});
result.policy.forEach(p => {
	let li = $add("li");
	$id("policy").appendChild(li);
	li.innerHTML = `<h3>${p.title}</h3>`;
	let ol = $add("ol");
	li.appendChild(ol);
	ol.className = "ordered_list";
	p.texts.forEach(text => {
		let li = $add("li");
		ol.appendChild(li);
		li.innerHTML = text;
	})
})
// 	} else console.log(res.statusText);
// }).catch((res) => console.log(res));