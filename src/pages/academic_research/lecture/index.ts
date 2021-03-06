import Nav from "../../../assets/js/Nav";
import { $id, $add, academic, baseURL } from "../../../assets/js/common";
import axios from "axios";
import "normalize.css";
import "../../../assets/scss/common.scss";
import "../../../assets/scss/top-nav.scss";
import "./index.css";

console.log();
axios.defaults.baseURL = baseURL;
new Nav(6);
import("../../../assets/js/research");

// axios({ method: "GET", url: "academic-lecture.json" }).then(res => {
academic.lecture.forEach(({ url, src, title }) => {
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
// }).catch((err) => console.log(err));