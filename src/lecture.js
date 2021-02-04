import Nav from "../api/Nav.js";

console.log();
new Nav(6);
import("../api/research.js");

axios({ method: "GET", url: "academic-lecture.json" }).then(res => {
	res.data.forEach(({ url, src, title }, i) => {
		let a = $add("a");
		a.href = url;
		$id("content_zjk").appendChild(a);
		let dl = $add("dl");
		a.appendChild(dl);
		let dt = $add("dt");
		dl.appendChild(dt);
		let img = new Image(180, 201);
		img.src = src;
		dt.appendChild(img);
		dl.innerHTML += `<dd>${title}</dd>`;
	});
}).catch((err) => console.log(err));