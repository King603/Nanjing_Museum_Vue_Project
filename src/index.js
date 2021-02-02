import Nav from "../api/Nav.js";
console.clear();
// 头部导航
new Nav(0);

axios({ method: "GET", url: "swiper.json" }).then(res => {
	if (res.status == 200) {
		res.data.forEach((img_src) => {
			let swiper_slide = document.createElement("div");
			swiper_slide.className = "swiper-slide";
			let img = document.createElement("img");
			img.src = img_src;
			swiper_slide.appendChild(img);
			document.getElementsByClassName("swiper-wrapper")[0].appendChild(swiper_slide);
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
let page = 0;
let n = 0;
axios({ method: "GET", url: "newsList.json" }).then((res) => {
	if (res.status == 200) {
		newsList = res.data;
		// 显示第一页内容
		showList(1);
		// 计算页数
		page = Math.ceil(newsList.length / size);

		let News = document.getElementById("news");
		list.forEach((news, i) => {
			let a = document.createElement("a");
			a.href = news.to;
			News.appendChild(a);
			let div_newsList = document.createElement("div");
			div_newsList.className = "newsList";
			a.appendChild(div_newsList);
			let img = new Image();
			img.src = news.img.src;
			img.title = news.img.title;
			div_newsList.appendChild(img);
			div_newsList.innerHTML += `<div class="info"><h3>${news.title}</h3><p>${news.text}</p></div><div class="date"><h2>${news.month}/${news.date}</h2><p>${news.year}</p></div>`;
		});
	} else console.log(res.statusText);
}).catch((res) => console.log(res));

/**
 * 显示当前页内容
 * @param {number} page 页码
 */
function showList(page) {
	// 记录当前页
	n = page;
	// 初始化显示列表为空
	list = [];
	// 循环遍历每一页且不超过 newsList 的个数
	for (
		let i = 0;
		(n - 1) * size + i < newsList.length;
		i++
	) {
		list[i] = newsList[(n - 1) * size + i];
	}
}
