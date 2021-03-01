import axios from 'axios';
import { $add, $id } from "./common"

export default function ({ url, method }: { url: string | undefined, method: "head" | "link" | "get" | "GET" | "delete" | "DELETE" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "purge" | "PURGE" | "LINK" | "unlink" | "UNLINK" | undefined }) {
	let pageNum = 0;
	let size = 10;
	let page = 1;
	let info: any[] = [];
	/**@type {[]} */
	let list: any[] = [];

	let $content_czyd = $id("content_czyd") as HTMLElement;
	let $fenye = $id("fenye") as HTMLElement;
	let lis = $fenye.getElementsByTagName("li");
	let $select = $fenye.getElementsByTagName("select")[0];
	$select.style.width = "71px";
	let $options = $select.getElementsByTagName("option");

	function setListener(index: number, click: () => void): void {
		lis[index].addEventListener("click", ev => ev.button == 0 && click());
	}
	function setPagesButton(): void {
		lis[0].className = page == 1 ? 'page1' : 'page';
		lis[1].style.display = page == 1 ? "none" : "block";
		lis[lis.length - 2].style.display = page == pageNum ? "none" : "block";
		lis[lis.length - 1].className = page == pageNum ? 'page1' : 'page';
	}
	function switchPage(n: number): void {
		page += n;
		setOption();
	}
	function shangyiye(): void {
		if (page == 1) return;
		switchPage(-1);
	}
	function xiayiye(): void {
		if (page == pageNum) return;
		switchPage(1);
	}
	function toFrist(): void {
		page = 1;
		setOption();
	}
	function toEnd(): void {
		page = pageNum;
		setOption();
	}
	function setOption(): void {
		$options[page - 1].selected = true;
		setPagesButton();
		setList();
	}
	function setList(): void {
		list = [];
		for (let i = 0; i < size && i + (page - 1) * size < info.length; i++)
			list[i] = info[i + (page - 1) * size];

		$content_czyd.innerHTML = "";
		list.forEach((li, i) => {
			let list_list = $add("div");
			list_list.className = "list_list";
			$content_czyd.appendChild(list_list);
			let a = $add("a");
			list_list.appendChild(a);
			a.href = li.src;
			let list_l = $add("div");
			a.appendChild(list_l);
			list_l.className = "list_l";
			list_l.innerHTML = `<dt>${li.name}<span class="time">${li.time}</span></dt><dd>${li.abstract}</dd>`;
			a.innerHTML += '<div class="more"></div>';
		});
	}

	axios({ method, url }).then((res) => {
		if (res.status == 200) {
			info = res.data;
			pageNum = Math.ceil(info.length / size);

			setList();
			$select.innerHTML = "";
			for (let i = 1; i <= pageNum; i++) {
				let option = document.createElement("option");
				option.value = i.toString();
				option.innerHTML = `第${i}页`;
				$select.appendChild(option);
			}

			setListener(0, toFrist);
			setListener(1, shangyiye);
			setListener(lis.length - 2, xiayiye);
			setListener(lis.length - 1, toEnd);

			$select.addEventListener("change", function () {
				page = parseInt((this[this.selectedIndex] as HTMLOptionElement).value) - 0;
				setPagesButton();
			});
		} else console.log(res.statusText);
	}).catch(err => console.log(err));
}