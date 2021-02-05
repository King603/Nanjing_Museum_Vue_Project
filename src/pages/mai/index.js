import Nav from "../../assets/api/Nav";
console.clear();
// 头部导航
new Nav(0);

axios({ method: "GET", url: "swiper.json" }).then(res => {
	if (res.status == 200) {
		res.data.forEach((img_src) => {
			let swiper_slide = $append($class("swiper-wrapper")[0], "div");
			swiper_slide.className = "swiper-slide";
			let img = new Image();
			img.src = img_src;
			swiper_slide.appendChild(img);
		});
		new Swiper(".swiper-container", {
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 1000,
			autoplay: true,
			loop: true,
			pagination: { el: ".swiper-pagination", clickable: true },
			navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
		});
	} else console.log(res.statusText);
}).catch((res) => console.log(res));

let newsList = [];
let list = [];
let size = 3;
let pages = 0;
let n = 0;
let $news = $id("news");
let $pages = $id("pages");
axios({ method: "GET", url: "newsList.json" }).then((res) => {
	if (res.status == 200) {
		newsList = res.data;

		// 计算页数
		pages = Math.ceil(newsList.length / size);

		$news.innerHTML = "";
		list.forEach((news, i) => {
			let a = $append($news, "a");
			a.href = news.to;
			let div_newsList = $append(a, "div");
			div_newsList.className = "newsList";
			let img = new Image();
			img.src = news.img.src;
			img.title = news.img.title;
			div_newsList.appendChild(img);
			div_newsList.innerHTML += `<div class="info"><h3>${news.title}</h3><p>${news.text}</p></div><div class="date"><h2>${news.month}/${news.date}</h2><p>${news.year}</p></div>`;
		});
		console.log(pages);
		setPages("首页", () => n != 1 && showList(1));
		setPages("上一页", () => n != 1 && shangye());
		for (let num = 1; num <= pages; num++) {
			setPages(num, () => num != n && showList(num));
		}
		setPages("下一页", () => n != pages && xiaye());
		setPages("末页", () => n != pages && showList(pages));
		// 显示第一页内容
		showList(1);
	} else console.log(res.statusText);
}).catch((res) => console.log(res));

/**
 * 显示当前页内容
 * @param {number} page 页码
 */
function showList(page) {
	console.log(page)
	// 记录当前页
	n = page;
	// 初始化显示列表为空
	list = [];
	// 循环遍历每一页且不超过 newsList 的个数
	for (let i = 0; (n - 1) * size + i < newsList.length && i < size; i++) {
		list[i] = newsList[(n - 1) * size + i];
	}
	$news.innerHTML = "";
	list.forEach((news, i) => {
		let a = $append($news, "a");
		a.href = news.to;
		let div_newsList = $append(a, "div");
		div_newsList.className = "newsList";
		let img = new Image();
		img.src = news.img.src;
		img.title = news.img.title;
		div_newsList.appendChild(img);
		div_newsList.innerHTML += `<div class="info"><h3>${news.title}</h3><p>${news.text}</p></div><div class="date"><h2>${news.month}/${news.date}</h2><p>${news.year}</p></div>`;
	});
	let lis = $pages.getElementsByTagName("li");
	switch (n + 0) {
		case 1:
			lis[lis.length - 2].className = lis[lis.length - 1].className = "";
			lis[0].className = lis[1].className = "disabled";
			active();
			break;
		case lis.length - 4:
			lis[0].className = lis[1].className = "";
			lis[lis.length - 2].className = lis[lis.length - 1].className = "disabled";
			active();
			break;
		default:
			lis[lis.length - 2].className = lis[lis.length - 1].className = lis[0].className = lis[1].className = "";
			active();
	}
	function active() {
		for (let i = 0; i <= pages; i++)
			lis[i + 1].className = i == n ? "active" : "";
	}
}
function shangye() {
	showList(--n);
}

function xiaye() {
	showList(++n);
}

/**
 * 
 * @param {string} innerHTML 
 * @param {() => void} click 
 */
function setPages(innerHTML, click) {
	let li = $append($pages, "li");
	li.innerHTML = `<span>${innerHTML}</span>`;
	li.addEventListener("click", ev => ev.button == 0 && click());
}