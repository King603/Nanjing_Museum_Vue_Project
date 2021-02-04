import Nav from "../api/Nav.js";

new Nav(7);

axios({ method: "GET", url: "activity_nav.json" }).then(res => {
	if (res.status == 200) {
		res.data.forEach(res => {
			let li = $add("li");
			$id("navigation").appendChild(li);
			let a = $add("a");
			a.href = res.url;
			a.innerHTML = res.title;
			a.target = "_blank";
			li.appendChild(a);
			if (res.navigation) {
				let ul = $add("ul");
				li.appendChild(ul);
				res.navigation.forEach(res => {
					let li = $add("li");
					ul.appendChild(li);
					let a = $add("a");
					a.href = res.url;
					a.innerHTML = res.title;
					a.target = "_blank";
					li.appendChild(a);
					if (res.navigation) {
						let ul = $add("ul");
						li.appendChild(ul);
						res.navigation.forEach(res => {
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
		$all("#navigation li").forEach((navigation, i) => {
			let ul = navigation.getElementsByTagName("ul")[0];
			if (ul) {
				navigation.addEventListener("mousemove", ev => ul.style.display = "block");
				navigation.addEventListener("mouseout", ev => ul.style.display = "none");
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
		for (let i = 1; i <= pages; i++) {
			addSpan(`[${i}]`, () => setList(i));
		}
		addSpan("[&gt;]", () => setList(page + 1));
	}

	function addSpan(html, click) {
		let span = $add("span");
		span.innerHTML = html;
		span.addEventListener("click", ev => ev.button == 0 && click());
		span.style.cursor = "pointer";
		$fenye.appendChild(span);
	}

	function setList(n) {
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
})()

