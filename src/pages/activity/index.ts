import Nav from "../../assets/js/Nav";
import { $all, $id, $add, activity, baseURL } from "../../assets/js/common";
import axios from "axios";
import "normalize.css";
import "../../assets/scss/common.scss";
import "../../assets/scss/top-nav.scss";
import "./index.scss";

console.clear();
axios.defaults.baseURL = baseURL
new Nav(7);

// axios({ method: "GET", url: "activity_nav.json" }).then(res => {
// 	if (res.status == 200) {
activity.nav.forEach(res => {
	let li = $add("li");
	$id("navigation").appendChild(li);
	let a = $add("a");
	a.href = res.url;
	a.innerHTML = res.title;
	a.target = "_blank";
	li.appendChild(a);
	if ((res as { title: string; url: string; navigation: { title: string; url: string; }[]; }).navigation) {
		let ul = $add("ul");
		li.appendChild(ul);
		(res as { title: string; url: string; navigation: { title: string; url: string; }[]; }).navigation.forEach(res => {
			let li = $add("li");
			ul.appendChild(li);
			let a = $add("a");
			a.href = res.url;
			a.innerHTML = res.title;
			a.target = "_blank";
			li.appendChild(a);
			if ((res as { title: string; url: string; navigation: { title: string; url: string; }[]; }).navigation) {
				let ul = $add("ul");
				li.appendChild(ul);
				(res as { title: string; url: string; navigation: { title: string; url: string; }[]; }).navigation.forEach(res => {
					let li = $add("li");
					ul.appendChild(li);
					let a = $add("a");
					a.href = res.url;
					a.innerHTML = res.title;
					a.target = "_blank";
					li.appendChild(a);
				})
			}
		})
	}
});
$all("#navigation li").forEach((navigation) => {
	let ul = navigation.getElementsByTagName("ul")[0];
	if (ul) {
		navigation.addEventListener("mousemove", () => ul.style.display = "block");
		navigation.addEventListener("mouseout", () => ul.style.display = "none");
	}
});
// 	} else console.log(res.statusText);
// }).catch((err) => console.log(err));
type Data = {
	year: string;
	month: string;
	date: string;
	url: string;
	title: string;
};

(() => {
	const size = 20;
	let pages = 0;
	let list: Data[] = [];
	let page = 0;

	let result: Data[];

	let $fenye = $id("fenye");
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

	function setPagrs(length: number) {
		pages = Math.ceil(length / size);
		addSpan("[&lt;]", () => setList(page - 1));
		for (let i = 1; i <= pages; i++) {
			addSpan(`[${i}]`, () => setList(i));
		}
		addSpan("[&gt;]", () => setList(page + 1));
	}

	function addSpan(html: string, click: () => void) {
		let span = $add("span");
		span.innerHTML = html;
		span.addEventListener("click", ev => ev.button == 0 && click());
		span.style.cursor = "pointer";
		$fenye.appendChild(span);
	}

	function setList(n: number) {
		console.log("page: ", n)
		if (n <= 0 || n > pages) return;
		page = n;
		for (let i = 0; i < size && i + (n - 1) * size < result.length; i++) {
			list[i] = result[i + (n - 1) * size];
		}
		$all(".titlist04.f14")[0].innerHTML = "";
		console.log($all(".titlist04.f14")[0].getElementsByTagName("li").length);
		list.forEach(info => {
			let li = $add("li");
			li.innerHTML = `<span>${info.year}-${info.month}-${info.date}</span>`;
			let a = $add("a");
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
let $erji = $all(".erji-right.rl")[0];
/**@type {{ title: { url: string; tit: string; }; titlist: { url: string; tit: string; }[]; }[]} */
let data = activity.erji;
data.forEach(({ title, titlist }) => {
	let $column01 = $add("div");
	$column01.className = "column01";
	$erji.appendChild($column01);
	let $titlebg = $add("div");
	$column01.appendChild($titlebg);
	$titlebg.className = "titlebg";
	$titlebg.innerHTML = `<div class="txt bai"><a href="${title.url}" target="_blank">${title.tit}</a></div>`;
	let $titlist = $add("ul");
	$titlist.className = "titlist";
	$column01.appendChild($titlist);
	titlist.forEach(({ url, tit }) => $titlist.innerHTML += `<li><a href="${url}" target="_blank">${tit}</a></li>`);
});
// 	}
// });