import Nav from "../api/Nav.js";
console.clear();
new Nav(6);
import("../api/research.js");

const h1 = "研究课题表";

$class("h1")[0].innerHTML = h1;

axios({ method: "GET", url: "academic-research_topic.json" }).then((res) => {
	res.data.forEach(({ theme, titles }, i) => {
		let tr = $add("tr");
		$id("info").appendChild(tr);
		tr.innerHTML = `<td class="theme">${theme}</td>`;
		let td = $add("td");
		td.className = "title";
		let ol = $add("ol");
		td.appendChild(ol);
		tr.appendChild(td);
		titles.forEach(({ title, url }, i) => {
			let li = $add("li");
			ol.appendChild(li);
			let a = $add("a");
			a.href = url;
			a.innerHTML = `${i + 1}、${title}`;
			li.appendChild(a);
		});
	});
}).catch((err) => console.log(err));
