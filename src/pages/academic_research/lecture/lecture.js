import Nav from "../../../assets/api/Nav";

console.clear();
new Nav(6);
import("../../../assets/api/research");

axios({ method: "GET", url: "academic-lecture.json" }).then(res => {
	res.data.forEach(({ url, src, title }, i) => {
		let a = $append($id("content_zjk"), "a");
		a.href = url;
		let dl = $append(a, "dl");
		let dt = $append(dl, "dt");
		let img = new Image(180, 201);
		img.src = src;
		dt.appendChild(img);
		dl.innerHTML += `<dd>${title}</dd>`;
	});
}).catch((err) => console.log(err));