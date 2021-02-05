import Nav from "../../assets/api/Nav";
console.clear();
new Nav(7);

axios({ method: "GET", url: "activity_nav.json" }).then(res => {
	if (res.status == 200) {
		res.data.forEach(res => {
			let li = $append($id("navigation"), "li");
			let a = $append(li, "a");
			a.href = res.url;
			$html(a, res.title);
			a.target = "_blank";
			if (res.navigation) {
				let ul = $append(li, "ul");
				res.navigation.forEach(res => {
					let li = $append(ul, "li");
					let a = $append(li, "a");
					a.href = res.url;
					a.innerHTML = res.title;
					a.target = "_blank";
					if (res.navigation) {
						let ul = $append(li, "ul");
						res.navigation.forEach(res => {
							let li = $append(ul, "li");
							let a = $append(li, "a");
							a.href = res.url;
							a.innerHTML = res.title;
							a.target = "_blank";
						});
					}
				});
			}
		});
		$all("#navigation li").forEach(({ getElementsByTagName: getTag, addEventListener: addListener }) => {
			let ul = getTag("ul")[0];
			if (ul) {
				addListener("mousemove", () => ul.style.display = "block");
				addListener("mouseout", () => ul.style.display = "none");
			}
		});
	} else console.log(res.statusText);
}).catch((err) => console.log(err));

(() => {
	const size = 20;
	let pages = 0;
	let list = [];
	let page = 0;
	let result;

	let $fenye = $id("fenye");
	$fenye.style.margin = "30px 0";
	$fenye.style.textAlign = "center";
	$fenye.style.fontFamily = "微软雅黑";
	$fenye.style.fontSize = "12px";
	$fenye.style.color = "#000";

	axios({ method: "GET", url: "activity_tit.json" }).then(res => {
		if (res.status == 200) {
			result = res.data;
			setPagrs(result.length);
			setList(1);
		} else console.log(res.statusText);
	}).catch((err) => console.log(err));

	function setPagrs(length) {
		pages = Math.ceil(length / size);
		addSpan("[&lt;]", () => setList(page - 1));
		for (let i = 1; i <= pages; i++)
			addSpan(`[${i}]`, () => setList(i));
		addSpan("[&gt;]", () => setList(page + 1));
	}

	function addSpan(html, click) {
		let span = $append($fenye, "span");
		$html(span, html);
		$click(span, () => click());
		span.style.cursor = "pointer";
	}

	function setList(n) {
		if (n <= 0 || n > pages) return;
		page = n;
		for (let i = 0; i < size && i + (n - 1) * size < result.length; i++)
			list[i] = result[i + (n - 1) * size];
		$html($all(".titlist04.f14")[0]);
		list.forEach(info => {
			let li = $append($all(".titlist04.f14")[0], "li");
			$html(li, `<span>${info.year}-${info.month}-${info.date}</span>`);
			let a = $append(li, "a");
			a.href = info.url;
			a.target = "_blank";
			$html(a, info.title);
		});
	}
})();

(() => {
	axios({ method: "GET", url: "activity_menu.json" }).then(res => {
		if (res.status == 200) {
			res.data.forEach(({ titlebg, href, titlist }) => {
				let column01 = $append($all(".erji-right.rl")[0], "div");
				column01.className = "column01";
				let div = $append(column01, "div");
				div.className = "titlebg";
				$html(div, `<a class="txt bai" href="${href}" target="_blank">${titlebg}</a>`);
				let ul = $append(column01, "ul");
				ul.className = "titlist";
				titlist.forEach(({ tit, href }) => ul.innerHTML += `<li><a href="${href}" target="_blank">${tit}</a></li>`);
			});
		} else console.log(res.statusText);
	}).catch(err => console.log(err))
})();
