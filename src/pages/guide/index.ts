import Nav from "../../assets/js/Nav";
import GoToTop from "../../assets/js/GoToTop";
import { $all, $id, $add, $class, guide } from "../../assets/js/common";
import "normalize.css";
import "../../assets/css/common.css";
import "../../assets/css/top-nav.css";
import "./index.css";
import axios from "axios";

console.clear();
new Nav(3);

axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";

let navList = [
	{ title: "交通与周边信息" },
	{ title: "参观须知" },
	{ title: "场馆地图" },
];
let index = 0;

document.body.style.backgroundColor = "rgb(246, 239, 229)";
let ul = $all(".guide-nav>ul")[0];
navList.forEach((nav, i) => {
	let li = $add("li");
	li.className = i == 0 ? "list guide-active" : "list";
	li.innerHTML = nav.title;
	li.addEventListener("click", ev => ev.button == 0 && (i => show(i))(i));
	ul.appendChild(li);
});

let guide_page = $class("guide-page");
init_guide_page(0);
showPage1()

function show(i: number) {
	index = i;
	init_guide_page(i);
	let lis = ul.getElementsByTagName("li");
	for (let i = 0; i < lis.length; i++)
		lis[i].className = `list${index == i ? " guide-active" : ""}`;
	switch (index) {
		case 0: showPage1(); break;
		case 1: showPage2(); break;
		case 2: showPage3(); break;
	}
}

function init_guide_page(index: number) {
	for (let i = 0; i < guide_page.length; i++)
		guide_page[i].style.display = i == index ? "block" : "none";
}

function showPage1() {
	let titles = ["交通信息", "酒店住宿", "餐饮服务", "文化休闲"];
	type PageInfo = {
		img: any;
		span: string;
	} | {
		name: string;
		address: string;
		postcode: string;
		phone: string;
		url: string;
		local: string;
		src: string;
	}[] | {
		name: string;
		address: string;
		postcode: string;
		phone: string;
		local: string;
		src: string;
	}[]
	let page_info: PageInfo = [];

	let tr_button = $id("button");
	tr_button.style.display = "flex";
	tr_button.innerHTML = "";
	let page1_1 = $id("page1_1");
	let page1_2 = $id("page1_2");
	let page1_2_table = page1_2.getElementsByTagName("table")[0];
	titles.forEach((tit, i) => {
		let td = $add("td");
		td.className = i == 0 ? "tit active" : "tit";
		td.style.width = `${100 / titles.length}%`;
		tr_button.appendChild(td);
		let button = $add("button");
		td.appendChild(button);
		button.innerHTML = tit;
		button.addEventListener("click", ev => ev.button == 0 && (i => {
			console.log(i)
			show(i);
			let buttons = $class("tit");
			for (let j = 0; j < buttons.length; j++) {
				if (i == j) buttons[j].classList.add("active");
				else buttons[j].classList.remove("active");
				console.log(buttons[j].className);
			}
		})(i));
	});

	// axios({ method: "GET", url: "guide-list-info.json" }).then(res => {
	// 	if (res.status == 200) {
	guide.list.forEach(({ info }, i) => page_info[i] = info);
	show(0);
	// 	} else console.log(res.statusText);
	// }).catch((err) => console.log(err));

	function show(i: number) {
		console.log(page1_1)
		switch (i) {
			case 0:
				page1_1.style.display = "block";
				page1_2.style.display = "none";
				page1_1.getElementsByTagName("img")[0].src = page_info[0].img;
				page1_1.getElementsByTagName("p")[0].innerHTML = page_info[0].span;
				break;
			case 1: case 2: case 3:
				page1_2.style.display = "block";
				page1_1.style.display = "none";
				page1_2_table.innerHTML = "";
				page_info[i].forEach((info: { name: any; address: any; postcode: any; phone: any; url: any; local: any; src: any; }) => {
					let tr = $add("tr");
					page1_2_table.appendChild(tr);
					createTd(`<p><strong>名称：${info.name}</strong><br />地址：${info.address}<br />邮编：${info.postcode}<br />联系电话：${info.phone}<br /><span>官方网址：<a href="${info.url}" target="_blank">${info.url}<br /></a></span>（点击地图查看详细位置）&nbsp;</p>`);
					createTd(`<a href="${info.local}" target="_blank"><img src="${info.src}" /></a>`);
					function createTd(innerHTML: string) {
						let td = $add("td");
						tr.appendChild(td);
						td.innerHTML = innerHTML;
					}
				});
				break;
		}
	}
}
function showPage2() {
	// axios({ method: "GET", url: "guide-info.json" }).then(res => {
	// 	if (res.status == 200) {
	let { info } = guide;
	$id("text1").innerHTML = info.text1;
	$id("text2").innerHTML = info.text2;
	$id("text3").innerHTML = info.text3;
	$id("wangzh").href = info.yuyue.wangzh;
	$id("weixin").href = info.yuyue.weixin;
	$id("date").innerHTML = info.date;
	// 	} else console.log(res.statusText);
	// }).catch((err) => console.log(err));
}
function showPage3() {
	// axios({ method: "GET", url: "guide-nav.json" }).then(res => {
	// 	if (res.status == 200) {
	guide.nav.forEach(images => {
		let p = $add("p");
		p.className = "img";
		$id("page3").appendChild(p);
		let a = $add("a");
		p.appendChild(a);
		a.href = images.href;
		a.target = "_blank";
		let img = new Image();
		a.appendChild(img);
		img.src = images.src;
		img.alt = "楼层地图";
	});
	// 	} else console.log(res.statusText);
	// }).catch(err => console.log(err));
}

new GoToTop();