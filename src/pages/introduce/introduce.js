import Nav from "../../assets/api/Nav";
import GoTotop from "../../assets/api/GoToTop";
console.clear();

// 主体
(() => {
	new Nav(1);

	const bgImgUrl = "../static/bg/2bg.jpg";
	const logoBgUrl = "../static/bg/indextop.jpg";
	const logo = "../static/logo/logo.png";
	let index = 0;
	let buttonList = ["博物馆简介", "大事记", "名人致辞"];
	let iframes = $all(".main .iframe");
	initIframe();

	document.body.style.backgroundImage = `url(${bgImgUrl})`;
	/**@type {HTMLDivElement} */
	let logobg = $class("logobg")[0];
	logobg.style.backgroundImage = `url(${logoBgUrl})`;
	let img = new Image();
	img.src = logo;
	img.className = "introduce-logo";
	logobg.appendChild(img);

	let title = logobg.getElementsByClassName("title")[0];

	updatePage(index);
	buttonList.forEach((name, i) => {
		let div = $append(title, "div");
		div.className = "title_bg";
		div.innerHTML = name;
	});

	let title_bg = title.getElementsByClassName("title_bg");
	title_bg[0].className = "title_bg designate";
	for (let i = 0; i < title_bg.length; i++) {
		title_bg[i].addEventListener("click", ev => (ev.button == 0) && showPage(i))
	}
	function showPage(n) {
		index = n;
		for (let i = 0; i < title_bg.length; i++)
			title_bg[i].className = "title_bg" + (index == i ? " designate" : "");
		updatePage(index);
	}
	function updatePage(index) {
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
	axios({ method: "GET", url: "introduces.json" }).then((res) => {
		if (res.status == 200) {
			$html($class("introduce-title")[0], res.data.title);

			res.data.text.split("\n").forEach(text => {
				let div = $append($id("text"), "div");
				div.className = "text";
				div.innerHTML = text;
			});

			let $introduces = $id("introduces");
			res.data.introduces.forEach(({ imgs, title }) => {
				imgs.forEach(({ src, small }) => {
					let image = new Image();
					image.src = src;
					image.className = small ? "small_img" : "";
					$introduces.appendChild(image);
				});
				$html($append($introduces, "p"), title);
			});
		} else console.log(res.statusText);
	}).catch((res) => console.log(res));
})();

// Page2
(() => {
	const list_style_image = "/static/icon.jpg";

	let ul = document.getElementsByClassName("box_event02-ul")[0];
	axios({ method: "GET", url: "eventList.json" }).then((res) => {
		if (res.status == 200) {
			let list = res.data;
			list.forEach(news => {
				let li = $append(ul, "li");
				li.addEventListener("click", ev => ev.button == 0 && show(news.year, news.date));
				let img = new Image();
				img.src = list_style_image;
				li.appendChild(img);
				li.innerHTML += `<span>${news.year}年博物馆大事记</span><span>${news.date}</span>`;
			});
		} else console.log(res.statusText);
	}).catch((res) => console.log(res));


	let info1 = $id("info1");
	let info2 = $id("info2");
	info2.style.display = "none";
	info2.getElementsByClassName("goBack")[0].addEventListener("click", ev => ev.button == 0 && (() => {
		info2.style.display = "none";
		info1.style.display = "block";
		page2Title.innerHTML = "";
		author.innerHTML = "";
		article_t.innerHTML = "";
	})());
	let page2Title = info2.getElementsByClassName("page2Title")[0];
	let author = info2.getElementsByClassName("author")[0];
	let article_t = info2.getElementsByClassName("article_t")[0];
	function show(yy, dd) {
		// 获取年份带入获取信息
		let year = yy;
		let date = dd;
		axios({ method: "GET", url: "list.json", data: { year, date } }).then((res) => {
			if (res.status == 200) {
				let { list: result, name } = res.data;
				let visitNum = parseInt(Math.random() * 20000);
				let readNum = parseInt(Math.random() * 9999);
				info1.style.display = "none";
				info2.style.display = "block";
				$html(page2Title, `${year}年博物馆大事记`);
				$html(author, date);
				result.forEach(data => $html($append(article_t, "p"), `<strong>${data.date}：&nbsp;</strong><span>${data.info}</span>`));
				article_t.innerHTML += `<br /><br /><br /><div><p>博物馆全年接待参观${visitNum}人次。</p><p>微信公众号关注人数${readNum}人，累计阅读量4.5万余人次。</p><p>（${name}）</p></div>`
			}
		}).catch((res) => console.log(res));
	}
})();

// page3
(() => {
	let wenben = document.getElementById("wenben");

	axios({ method: "GET", url: "info.json" }).then((res) => {
		let { title, responsive, info, signature } = res.data;
		let texts = res.data.matter.split("\n");
		$class("page3Title")[0].innerHTML = title;
		$class("responsive-img")[0].src = responsive;
		$class("page3Info")[0].innerHTML = `<p>${info.name}</p><p>${info.position}</p>`;
		wenben.innerHTML = "";
		texts.forEach(text => {
			let p = $append(wenben, "p");
			p.className = "wenben";
			p.innerHTML = `<span>${text}</span>`;
		});
		$class("newsInfo")[0].src = signature;
	}).catch((err) => console.log(err));
})();

new GoTotop();
