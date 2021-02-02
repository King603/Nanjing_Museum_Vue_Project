import Nav from "../api/Nav.js";

console.log();
new Nav(6);
import("../api/research.js");

axios({ method: "GET", url: "academic-lecture.json" }).then(res => {
	res.data.forEach(({ url, src, title }, i) => {
		let a = document.createElement("a");
		a.href = url;
		document.getElementById("content_zjk").appendChild(a);
		let dl = document.createElement("dl");
		a.appendChild(dl);
		let dt = document.createElement("dt");
		dl.appendChild(dt);
		let img = new Image(180, 201);
		img.src = src;
		dt.appendChild(img);
		dl.innerHTML += `<dd>${title}</dd>`;
	});
}).catch((err) => console.log(err));