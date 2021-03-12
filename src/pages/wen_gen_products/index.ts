import Nav from "../../assets/js/Nav";
import GoTotop from "../../assets/js/GoToTop";
import axios from "axios";
import { $add, $class, $id, artgoods, artproducts, baseURL } from "../../assets/js/common";
const Swiper = require("../../assets/lib/swiper");
import "normalize.css";
import "../../assets/scss/common.scss";
import "../../assets/scss/top-nav.scss";
import "../../assets/css/swiper.css";
import "./index.scss";

console.clear();
new Nav(4);
axios.defaults.baseURL = baseURL;

let titles: string[] = ["产品图文介绍", "产品防伪溯源信息查询、举报"];
interface Product { img: string; tit: string; price: string; num: number; };
let products: Product[] = [
	{ img: "", tit: "", price: "", num: 0 },
	{ img: "", tit: "", price: "", num: 0 },
	{ img: "", tit: "", price: "", num: 0 },
	{ img: "", tit: "", price: "", num: 0 },
];
let artgoods_page = 0;
let artgoods_title: { tit: string; src: any; }[] = [];
let allsort_index = 0;

// 本页导航
let leftlist = $id("leftlist");
titles.forEach((tit, i) => {
	let li = $add("li");
	li.className = `titList${i == 0 ? " active" : ""}`;
	li.innerHTML = tit;
	li.addEventListener("click", ev => {
		if (ev.button == 0) {
			(i => show(i))(i);
		}
	});
	leftlist.appendChild(li);
});
let products_good_list = $id("products-good_list");
let products_page = $id("products");
let products_buy = $id("buy");
products_buy.getElementsByTagName("button")[1].addEventListener("click", function (ev) {
	if (ev.button == 0) {
		products_buy.style.display = "none";
		products_buy.getElementsByTagName("img")[0].src = "";
		products_buy.querySelectorAll("p[name='name']")[0].innerHTML = "";
		products_buy.querySelectorAll("p[name='price']")[0].innerHTML = "";
		products_buy.querySelectorAll("p[name='num']")[0].innerHTML = "";
	}
});
products_buy.getElementsByTagName("button")[0].addEventListener("click", function (ev) {
	if (ev.button == 0) {

	}
});
let products_cx = $id("cx");

showPage(0);
// 产品图文介绍
// axios({ method: "GET", url: "artgoods.json" }).then((res) => {
// 	if (res.status == 200) {
let artgoods_allsort = artgoods.allsorts[allsort_index];
artgoods_title = artgoods.title;
let swiperImg = artgoods.swiperImg;
swiperImg.forEach((img) => {
	let swiper_slide = $add("div");
	swiper_slide.className = "swiper-slide";
	let image = new Image();
	image.src = img.src;
	swiper_slide.appendChild(image);
	$class("swiper-wrapper")[0].appendChild(swiper_slide);
});
new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1000,
	autoplay: true,
	loop: true,
	pagination: { el: ".swiper-pagination", clickable: true },
	navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
});
/**@type {HTMLDivElement} */
let products_artgoods_allsort: HTMLDivElement = ($class("products-artgoods-allsort")[0] as HTMLDivElement);
products_artgoods_allsort.style.background = `url(${artgoods_allsort}) no-repeat`;
let ul = products_artgoods_allsort.getElementsByTagName("ul")[0];
for (let i = 1; i <= artgoods_title.length; i++) {
	let li = $add("li");
	ul.appendChild(li);
	li.addEventListener("click", ev => {
		if (ev.button == 0) {
			(i => to(i))(i);
		}
	});
}
let products_artgoods_img = $class("products-artgoods-img")[0];
artgoods_title.forEach((title, i) => {
	let img = new Image();
	img.src = title.src;
	products_artgoods_img.appendChild(img);
	img.addEventListener("click", ev => ev.button == 0 && (i => to(i + 1))(i));
});
// 	} else console.log(res.statusText);
// }).catch(err => console.log(err));

function showPage(n: number) {
	switch (n) {
		case -1:
			products_good_list.style.display = "block";
			products_page.style.display = "none";
			products_cx.style.display = "none";
			break;
		case 0:
			products_good_list.style.display = "none";
			products_page.style.display = "block";
			products_cx.style.display = "none";
			break;
		case 1:
			products_good_list.style.display = "none";
			products_page.style.display = "none";
			products_cx.style.display = "block";
			break;
	}
}

function show(index: number): void {
	let lis = $class("titList");
	for (let i = 0; i < lis.length; i++)
		lis[i].className = `titList${i == index ? " active" : ""}`;
	showPage(index);
}
function to(i: number) {
	console.log(i);
	artgoods_page = i
	showPage(-1);
	console.log("跳轉成功，當前頁是" + artgoods_title[i - 1].tit);
	let products_good_title = $class("products-good_title")[0];
	let span = products_good_title.getElementsByTagName("span");
	span[1].innerHTML = titles[0];
	span[1].style.cursor = "pointer";
	span[1].addEventListener("click", ev => ev.button == 0 && showPage(0));
	span[2].innerHTML = artgoods_title[i - 1].tit;
	showProducts_good(artgoods_title[i - 1].tit);
}
function showProducts_good(name: any): void {
	/**@type {{ src: string; height: string; goods: { src: any; price: string; num: number; name: string; }[]; }[]} */
	let goods_img = null;
	let goods = $id("goods");
	let goods_info = goods.getElementsByTagName("table")[0];
	goods_info.innerHTML = "";

	// axios({ method: "GET", url: "wen_gen_products.json", data: { name: name } }).then(res => {
	// 	if (res.status == 200) {
	goods_img = artproducts;
	goods_img.forEach((img, i) => {
		let tr = $add("tr");
		goods_info.appendChild(tr);
		let td = $add("td");
		tr.appendChild(td);
		td.className = "goods";
		let image = new Image();
		image.src = img.src;
		image.style.width = "100%";
		image.style.height = img.height;
		td.appendChild(image);
		img.goods.forEach((g, j) => {
			let good_div = $add("div");
			td.appendChild(good_div);
			let img = new Image();
			img.src = g.src;
			good_div.appendChild(img);
			good_div.innerHTML += `<div><span>${g.name}</span><span>RMB:${g.price}</span><button>点击购买</button></div>`;
			good_div.getElementsByTagName("button")[0].addEventListener("click", (ev) => ev.button == 0 && toBuy(g as { src: string; price: string; num: number; name: string; id: string }));
		});
	});
	console.log(artgoods_title)
	let $pages = $id("pages");
	$pages.innerHTML = "";

	setPagesButton({ innerHTML: "首页", title: artgoods_title[0].tit, click: () => to(1) });
	artgoods_page > 1 && setPagesButton({ innerHTML: "上一页", title: artgoods_title[artgoods_page - 2].tit, click: () => to(artgoods_page - 1) });
	artgoods_title.forEach((goods, i) => setPagesButton({ innerHTML: (i + 1).toString(), title: '该页为' + goods.tit, click: () => to(i + 1) }));
	artgoods_page < artgoods_title.length - 1 && setPagesButton({ innerHTML: "下一页", title: artgoods_title[artgoods_page].tit, click: () => to(artgoods_page + 1) });
	setPagesButton({ innerHTML: "末页", title: artgoods_title[0].tit, click: () => to(artgoods_title.length) });

	function setPagesButton({ innerHTML, title, click }: { innerHTML: string; title: string; click: () => void; }) {
		let page = $add("span");
		page.innerHTML = innerHTML;
		page.title = title;
		page.addEventListener("click", ev => ev.button == 0 && click());
		page.style.cursor = "pointer";
		$pages.appendChild(page);
	}

	// 	} else console.log(res.statusText);
	// }).catch((err) => console.log(err));
}

function toBuy(good: { src: string; price: string; num: number; name: string; id: string }) {
	products_buy.style.display = "block";
	products_buy.getElementsByTagName("img")[0].src = good.src;
	products_buy.querySelectorAll("p[name='name']")[0].innerHTML = good.name;
	products_buy.querySelectorAll("p[name='price']")[0].innerHTML = good.price;
	products_buy.querySelectorAll("p[name='num']")[0].innerHTML = good.num as unknown as string;
	($id("PurchaseQuantity") as HTMLInputElement).focus();
}
new GoTotop();