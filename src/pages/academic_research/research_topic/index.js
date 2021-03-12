"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = __importDefault(require("../../../assets/js/Nav"));
const common_1 = require("../../../assets/js/common");
const axios_1 = __importDefault(require("axios"));
require("normalize.css");
require("../../../assets/scss/common.scss");
require("../../../assets/scss/top-nav.scss");
require("./index.css");
console.clear();
new Nav_1.default(6);
axios_1.default.defaults.baseURL = common_1.baseURL;
Promise.resolve().then(() => __importStar(require("../../../assets/js/research")));
const h1 = "研究课题表";
common_1.$class("h1")[0].innerHTML = h1;
// axios({ method: "GET", url: "academic-research_topic.json" }).then((res) => {
common_1.academic.topic.forEach(({ theme, titles }) => {
    let tr = common_1.$add("tr");
    common_1.$id("info").appendChild(tr);
    tr.innerHTML = `<td class="theme">${theme}</td>`;
    let td = common_1.$add("td");
    td.className = "title";
    let ol = common_1.$add("ol");
    td.appendChild(ol);
    tr.appendChild(td);
    titles.forEach(({ title, url }, i) => {
        let li = common_1.$add("li");
        ol.appendChild(li);
        let a = common_1.$add("a");
        a.href = url;
        a.innerHTML = `${i + 1}、${title}`;
        li.appendChild(a);
    });
});
// }).catch((err) => console.log(err));
