import Nav from "../../../assets/js/Nav";
import { $id, $add, academic } from "../../../assets/js/common";
import axios from "axios";
import "normalize.css";
import "../../../assets/css/common.css";
import "../../../assets/css/top-nav.css";
import "./index.css";

console.log();
axios.defaults.baseURL = "http://127.0.0.1:5500/assets/static/json/";
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