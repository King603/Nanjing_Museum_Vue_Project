import { $add, $id } from "./common";

interface nav {
	title: string;
	to: string;
}

export default class Nav {
	#navigations: nav[] = [
		{ title: "首页", to: "/" },
		{ title: "走进博物馆", to: "/introduce" },
		{ title: "陈列展览", to: "/exhibition" },
		{ title: "参观指南", to: "/guide" },
		{ title: "文创产品", to: "/wen_gen_products" },
		{ title: "网络购票", to: "/ticket" },
		{ title: "学术研究/出版物", to: "/academic_research" },
		{ title: "社会活动", to: "/activity" },
		{ title: "当地文化", to: "/local_culture" },
	];
	constructor(n: number) {
		this.setNav(n);
	}
	private setNav(n: number): void {
		this.#navigations.forEach((nav, i) => {
			let div = $add("div");
			let a = $add("a");
			if (n == i) a.className = "active";
			a.href = nav.to;
			a.innerHTML = nav.title;
			div.appendChild(a);
			div.className = "nav_list";
			($id("nav")as HTMLElement).appendChild(div);
		});
	}
}
