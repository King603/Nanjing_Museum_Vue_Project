import Nav from "../../../assets/api/Nav";
console.clear();
new Nav(6);
import("../../../assets/api/research");

const h1 = "研究课题表";

$class("h1")[0].innerHTML = h1;

axios({ method: "GET", url: "academic-research_topic.json" }).then((res) => {
	res.data.forEach(({ theme, titles }, i) => {
		let tr = $append($id("info"), "tr");
		tr.innerHTML = `<td class="theme">${theme}</td>`;
		let td = $append(tr, "td");
		td.className = "title";
		let ol = $append(td, "ol");
		titles.forEach(({ title, url }, i) => {
			let li = $append(ol, "li");
			let a = $append(li, "a");
			a.href = url;
			a.innerHTML = `${i + 1}、${title}`;
		});
	});
}).catch((err) => console.log(err));
