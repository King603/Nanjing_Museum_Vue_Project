"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = __importDefault(require("../../assets/js/Nav"));
const common_1 = require("../../assets/js/common");
const axios_1 = __importDefault(require("axios"));
require("normalize.css");
require("../../assets/css/common.css");
require("../../assets/css/top-nav.css");
require("./index.css");
console.clear();
new Nav_1.default(8);
axios_1.default.defaults.baseURL = common_1.baseURL;
/**@type {HTMLTableSectionElement} */
let $kecheng = common_1.$all("#kecheng>tbody")[0];
(() => {
    // axios({ method: "GET", url: "local_culture_type.json" }).then(res => {
    // 	if (res.status == 200) {
    /**@type {{ type: string; info: { tit: string; text: string; }[];}[]} */
    let datas = common_1.local_culture.type;
    datas.forEach(({ type, info }) => {
        info.forEach(({ tit, text }, i) => {
            let tr = common_1.$add("tr");
            $kecheng.appendChild(tr);
            if (i == 0)
                tr.innerHTML = `<th rowspan="${info.length}" class="type1"><p>${type}</p></th>`;
            tr.innerHTML += `<td class="NO"><p>${i + 1}</p></td><td class="NO"><p>${tit}</p></td><td class="NO"><p>${text}</p></td>`;
        });
    });
    // 	} else console.log(res.statusText);
    // }).catch(err => console.log(err));
})();
(() => {
    // axios({ method: "GET", url: "local_culture_list.json" }).then(res => {
    // 	if (res.status == 200) {
    /**@type {{ tit: string; type: string; info: string; imgSrc?: string; }[]} */
    let datas = common_1.local_culture.list;
    datas.forEach(data => {
        let tr = common_1.$add("tr");
        common_1.$id("info").appendChild(tr);
        tr.innerHTML = `<td valign="top"><p>${data.tit}<br>${data.type}</p></td><td class="tit"><p>${data.info}</p></td><td class="tit">${data.imgSrc ? `<img src="${data.imgSrc}">` : ""}</td>`;
    });
    // 	} else console.log(res.statusText);
    // }).catch(err => console.log(err));
})();
console.log(document.domain);
console.log(document.lastModified);
console.log(document.referrer);
