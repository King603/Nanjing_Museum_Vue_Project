import Nav from "../../assets/js/Nav";
import GoToTop from "../../assets/js/GoToTop";
import { $all, $id, $add, $class, guide, baseURL, TitleInfo, TInfo } from "../../assets/js/common";
import "normalize.css";
import "../../assets/scss/common.scss";
import "../../assets/scss/top-nav.scss";
import "./index.scss";
import axios from "axios";

console.clear();
new Nav(3);

axios.defaults.baseURL = baseURL;

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
	li.className = "list";
	if (i == 0) li.classList.add("guide-active");
	else li.classList.remove("guide-active");
	li.innerHTML = nav.title;
	li.addEventListener("click", ev => ev.button == 0 && (i => show(i))(i));
	ul.appendChild(li);
});

let guide_page = $class("guide-page");
init_guide_page(0);
showPage1();

function show(i: number) {
	index = i;
	init_guide_page(i);
	let lis = ul.getElementsByTagName("li");
	for (let i = 0; i < lis.length; i++) {
		lis[i].className = "list";
		if (i == index) lis[i].classList.add("guide-active");
		else lis[i].classList.remove("guide-active");
	}
	switch (index) {
		case 0: showPage1(); break;
		case 1: showPage2(); break;
		case 2: showPage3(); break;
	}
}

function init_guide_page(index: number) {
	for (let i = 0; i < guide_page.length; i++)
		(guide_page[i] as HTMLElement).style.display = i == index ? "block" : "none";
}

function showPage1() {
	let titles = ["交通信息", "酒店住宿", "餐饮服务", "文化休闲"];
	let page_info: (TitleInfo | TInfo[])[] = [];

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
			show(i);
			let buttons = $class("tit");
			for (let j = 0; j < buttons.length; j++) {
				if (i == j) buttons[j].classList.add("active");
				else buttons[j].classList.remove("active");
			}
		})(i));
	});

	// axios({ method: "GET", url: "guide-list-info.json" }).then(res => {
	// 	if (res.status == 200) {
	page_info = guide.list.map(({ info }) => info)
	show(0);
	// 	} else console.log(res.statusText);
	// }).catch((err) => console.log(err));

	function show(i: number) {
		switch (i) {
			case 0:
				page1_1.style.display = "block";
				page1_2.style.display = "none";
				let { img, span } = page_info[0] as TitleInfo;
				page1_1.getElementsByTagName("img")[0].src = img;
				page1_1.getElementsByTagName("p")[0].innerHTML = span;
				break;
			case 1: case 2: case 3:
				page1_2.style.display = "block";
				page1_1.style.display = "none";
				page1_2_table.innerHTML = "";
				(page_info[i] as TInfo[]).forEach((info) => {
					let tr = $add("tr");
					page1_2_table.appendChild(tr);
					createTd((({ name, address, postcode, phone, url }) => {
						let p = $add("p");
						let strong = $add("strong");
						strong.innerHTML = `名称：${name}`;
						p.appendChild(strong);
						p.innerHTML += `<br />地址：${address}<br />邮编：${postcode}<br />联系电话：${phone}`;
						if (url) {
							let span = $add("span");
							span.innerHTML = "<br />官方网址：";
							p.appendChild(span);
							let a = $add("a");
							a.href = `https://${url}`;
							a.target = "_blank";
							a.innerHTML = url;
							span.appendChild(a);
						}
						p.innerHTML += "<br />点击地图查看详细位置）&nbsp;"
						return p;
					})(info));
					createTd((({ local, src }) => {
						let a = $add("a");
						a.href = local;
						a.target = "_blank";
						let img = new Image();
						img.src = src;
						a.appendChild(img);
						return a;
					})(info));
					function createTd(element: HTMLElement): void {
						let td = $add("td");
						tr.appendChild(td);
						td.appendChild(element);
					}
				});
				break;
		}
	}
}
function showPage2() {
	// axios({ method: "GET", url: "guide-info.json" }).then(res => {
	// 	if (res.status == 200) {
	({
		text1: $id("text1").innerHTML,
		text2: $id("text2").innerHTML,
		text3: $id("text3").innerHTML,
		yuyue: {
			wangzh: ($id("wangzh") as HTMLAnchorElement).href,
			weixin: ($id("weixin") as HTMLAnchorElement).href
		},
		date: $id("date").innerHTML
	} = guide.info);
	// 	} else console.log(res.statusText);
	// }).catch((err) => console.log(err));
}
function showPage3() {
	// axios({ method: "GET", url: "guide-nav.json" }).then(res => {
	// 	if (res.status == 200) {
	let page3 = $id("page3");
	guide.nav.forEach(images => {
		let p = $add("p");
		p.className = "img";
		page3.appendChild(p);
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