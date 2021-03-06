import Nav from "../../../assets/js/Nav";
import { $id, $add, academic, baseURL } from "../../../assets/js/common";
import axios from "axios";
import "normalize.css";
import "../../../assets/scss/common.scss";
import "../../../assets/scss/top-nav.scss";
import "./index.css";

console.clear();
new Nav(6);
axios.defaults.baseURL = baseURL;
// PageList({ method: "GET", url: "academic_research_results.json" });

type res = {
	src: string;
	name: string;
	time: string;
	abstract: string;
};

let pageNum = 0;
let size = 5;
let page = 1;
let info: res[] = [];
let list: res[] = [];

let $content_czyd = $id("content_czyd");
let $fenye = $id("fenye");
let lis = $fenye.getElementsByTagName("li");
let $select = $fenye.getElementsByTagName("select")[0];
$select.style.width = "71px";
let $options = $select.getElementsByTagName("option");

function setListener(index: number, click: () => void) {
	lis[index].addEventListener("click", ev => ev.button == 0 && click());
}
function setPagesButton() {
	lis[0].className = page == 1 ? 'page1' : 'page';
	lis[1].style.display = page == 1 ? "none" : "block";
	lis[lis.length - 2].style.display = page == pageNum ? "none" : "block";
	lis[lis.length - 1].className = page == pageNum ? 'page1' : 'page';
	setList(page - 1);
}
function switchPage(n: number) {
	page += n;
	setOption();
}
function shangyiye() {
	if (page == 1) return;
	switchPage(-1);
}
function xiayiye() {
	if (page == pageNum) return;
	switchPage(1);
}
function toFrist() {
	page = 1;
	setOption();
}
function toEnd() {
	page = pageNum;
	setOption();
}
function setOption() {
	$options[page - 1].selected = true;
	setPagesButton();
	setList(page - 1);
}
function setList(page: number) {
	for (let i = 0; i < size && i + page * size < info.length; i++)
		list[i] = info[i + page * size];

	$content_czyd.innerHTML = "";
	list.forEach((li) => {
		let list_list = $add("div");
		list_list.className = "list_list";
		$content_czyd.appendChild(list_list);
		let a = $add("a");
		list_list.appendChild(a);
		a.href = li.src;
		let list_l = $add("div");
		a.appendChild(list_l);
		list_l.className = "list_l";
		list_l.innerHTML = `<dt>${li.name}<span class="time">${li.time}</span></dt><dd>${li.abstract}</dd>`;
		a.innerHTML += '<div class="more"></div>';
	});
}

// axios({ method: "GET", url: "academic_research_results.json" }).then(
// 	(res) => {
info = academic.results;
pageNum = Math.ceil(info.length / size);

setList(0);
$select.innerHTML = "";
for (let i = 1; i <= pageNum; i++) {
	let option = $add("option");
	option.value = i.toString();
	option.innerHTML = `第${i}页`;
	$select.appendChild(option);
}

setListener(0, toFrist);
setListener(1, shangyiye);
setListener(lis.length - 2, xiayiye);
setListener(lis.length - 1, toEnd);

$select.addEventListener("change", function (ev) {
	page = parseInt((this[this.selectedIndex] as HTMLOptionElement).value) - 0;
	setPagesButton();
});
// 	}
// );
import("../../../assets/js/research");