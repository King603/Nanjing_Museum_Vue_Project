import Nav from "../api/Nav.js";

new Nav(8);

/**@type {HTMLTableSectionElement} */
let $kecheng = $all("#kecheng>tbody")[0];

axios({ method: "GET", url: "local_culture_type.json" }).then(res => {
	if (res.status == 200) {
		/**@type {{ type: string; info: { tit: string; text: string; }[];}[]} */
		let datas = res.data;
		datas.forEach(({ type, info }) => {
			info.forEach(({ tit, text }, i) => {
				let tr = $add("tr");
				$kecheng.appendChild(tr);
				if (i == 0) tr.innerHTML = `<th rowspan="${info.length}" class="type1"><p>${type}</p></th>`;
				tr.innerHTML += `<td class="NO"><p>${i + 1}</p></td><td class="NO"><p>${tit}</p></td><td class="NO"><p>${text}</p></td>`;
			});
		});
	} else console.log(res.statusText);
}).catch(err => console.log(err));

axios({ method: "GET", url: "local_culture_list.json" }).then(res => {
	if (res.status == 200) {
		/**@type {{ tit: string; type: string; info: string; imgSrc?: string; }[]} */
		let datas = res.data;
		datas.forEach(data => {
			let tr = $add("tr");
			$id("info").appendChild(tr);
			tr.innerHTML = `<td valign="top"><p>${data.tit}<br>${data.type}</p></td><td class="tit"><p>${data.info}</p></td><td class="tit">${data.imgSrc ? `<img src="${data.imgSrc}">` : ""}</td>`;
		})
	} else console.log(res.statusText);
}).catch(err => console.log(err));
console.log(document.domain)
console.log(document.lastModified)
console.log(document.referrer)
