let navigations = [
	{
		title: "首页",
		to: "/",
	},
	{
		title: "走进博物馆",
		to: "/introduce",
	},
	{
		title: "陈列展览",
		to: "/exhibition",
	},
	{
		title: "参观指南",
		to: "/guide",
	},
	{
		title: "文创产品",
		to: "/wen_gen_products",
	},
	{
		title: "网络购票",
		to: "/ticket",
	},
	{
		title: "学术研究/出版物",
		to: "/academic_research",
	},
	{
		title: "社会活动",
		to: "/activity",
	},
	{
		title: "当地文化",
		to: "",
	},
]

export default class Nav {

	constructor(n) {
		Nav.setNav(n);
	}
	static setNav(n) {
		navigations.forEach((navigation, i) => {
			let div = document.createElement("div");
			let a = document.createElement("a");
			if (n == i) a.className = "active";
			a.href = navigation.to;
			a.innerHTML = navigation.title;
			div.appendChild(a);
			div.className = "nav_list";
			document.getElementById("nav").appendChild(div);
		});
	}
}