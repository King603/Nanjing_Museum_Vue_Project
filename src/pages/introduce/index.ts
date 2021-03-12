import Nav from "../../assets/js/Nav";
import GoTotop from "../../assets/js/GoToTop";
import { $all, $class, $id, $add, introduces, eventList, List, Info, baseURL } from "../../assets/js/common";
import axios from "axios";
import "normalize.css";
import "../../assets/scss/common.scss";
import "../../assets/scss/top-nav.scss";
import "./index.scss";

console.clear();
axios.defaults.baseURL = baseURL;
// 主体
(() => {
	new Nav(1);

	const bgImgUrl = require("../../assets/static/bg/2bg.jpg");
	const logoBgUrl = require("../../assets/static/bg/indextop.jpg");
	const logo = require("../../assets/static/logo/logo.png");
	let index = 0;
	let buttonList = ["博物馆简介", "大事记", "名人致辞"];
	let iframes = $all(".main .iframe");
	initIframe();

	document.body.style.backgroundImage = `url(${bgImgUrl})`;
	/**@type {HTMLDivElement} */
	let logobg = $class("logobg")[0];
	(logobg as HTMLDivElement).style.backgroundImage = `url(${logoBgUrl})`;
	let img = new Image();
	img.src = logo;
	img.className = "introduce-logo";
	logobg.appendChild(img);

	let title = logobg.getElementsByClassName("title")[0];

	updatePage(index);
	buttonList.forEach((name, i) => {
		let div = document.createElement("div");
		div.className = "title_bg";
		div.innerHTML = name;
		title.appendChild(div);
	});

	let title_bg = title.getElementsByClassName("title_bg");
	title_bg[0].className = "title_bg designate";
	for (let i = 0; i < title_bg.length; i++) {
		title_bg[i].addEventListener("click", ev => (ev as MouseEvent).button == 0 && showPage(i))
	}
	function showPage(n: number) {
		index = n;
		for (let i = 0; i < title_bg.length; i++)
			index == i
				? title_bg[i].classList.add("designate")
				: title_bg[i].classList.remove("designate");
		updatePage(index);
	}
	function updatePage(index: number) {
		initIframe();
		iframes[index].className = "";
	}

	function initIframe() {
		for (let i = 0; i < iframes.length; i++)
			iframes[i].className = "hidden";
	}
})();

// Page1
(() => {
	// axios({ method: "GET", url: "introduces.json" }).then((res) => {
	// 	if (res.status == 200) {
	$class("introduce-title")[0].innerHTML = introduces.title;

	introduces.text.split("\n").forEach(text => {
		let div = $add("div");
		div.className = "text";
		div.innerHTML = text;
		$id("text").appendChild(div);
	});

	let $introduces = $id("introduces");
	introduces.introduces.forEach(({ imgs, title }) => {
		imgs.forEach(({ src, small }) => {
			let image = new Image();
			image.src = src;
			image.className = small ? "small_img" : "";
			$introduces.appendChild(image);
		});
		let p = $add("p");
		p.innerHTML = title;
		$introduces.appendChild(p)
	})
	// 	} else console.log(res.statusText);
	// }).catch((res) => console.log(res));
})();

// Page2
(() => {
	const list_style_image = require("../../assets/static/icon.jpg");

	let ul = document.getElementsByClassName("box_event02-ul")[0];
	// axios({ method: "GET", url: "eventList.json" }).then((res) => {
	// 	if (res.status == 200) {
	eventList.forEach(news => {
		let li = $add("li");
		li.addEventListener("click", ev => {
			if (ev.button == 0) {
				show(news.year, news.date);
			}
		});
		ul.appendChild(li);
		let img = new Image();
		img.src = list_style_image;
		li.appendChild(img);
		li.innerHTML += `<span>${news.year}年博物馆大事记</span><span>${news.date}</span>`;
	});
	// 	} else console.log(res.statusText);
	// }).catch((res) => console.log(res));


	let info1 = $id("info1");
	let info2 = $id("info2");
	info2.style.display = "none";
	info2.getElementsByClassName("goBack")[0].addEventListener("click", ev => (ev as MouseEvent).button == 0 && goBack());
	let page2Title = info2.getElementsByClassName("page2Title")[0];
	let author = info2.getElementsByClassName("author")[0];
	let article_t = info2.getElementsByClassName("article_t")[0];
	function show(yy: string, dd: string) {
		// 获取年份带入获取信息
		let year = yy;
		let date = dd;
		// axios({ method: "GET", url: "list.json", data: { year: yy, date: dd } }).then((res) => {
		// 	if (res.status == 200) {
		let { list, name } = List({ year: yy, date: dd });
		let visitNum = parseInt((Math.random() * 20000).toString());
		let readNum = parseInt((Math.random() * 9999).toString());
		info1.style.display = "none";
		info2.style.display = "block";
		page2Title.innerHTML = `${year}年博物馆大事记`;
		author.innerHTML = date;
		list.forEach(data => {
			let p = document.createElement("p");
			p.innerHTML = `<strong>${data.date}：&nbsp;</strong><span>${data.info}</span>`;
			article_t.appendChild(p);
		});
		article_t.innerHTML += `<br /><br /><br /><div><p>博物馆全年接待参观${visitNum}人次。</p><p>微信公众号关注人数${readNum}人，累计阅读量4.5万余人次。</p><p>（${name}）</p></div>`
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
(() => {
	let wenben = $id("wenben");

	// axios({ method: "GET", url: "info.json" }).then((res) => {
	let { title, responsive, info, signature, matter } = Info;
	let texts = matter.split("\n");
	$class("page3Title")[0].innerHTML = title;
	($class("responsive-img")[0] as HTMLImageElement).src = responsive;
	$class("page3Info")[0].innerHTML = `<p>${info.name}</p><p>${info.position}</p>`;
	wenben.innerHTML = "";
	texts.forEach(text => {
		let p = document.createElement("p");
		p.className = "wenben";
		p.innerHTML = `<span>${text}</span>`;
		wenben.appendChild(p);
	});
	($class("newsInfo")[0] as HTMLImageElement).src = signature;
	// }).catch((res) => console.log(res));
})();

new GoTotop();
