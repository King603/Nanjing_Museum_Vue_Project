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
require("../../../assets/css/common.css");
require("../../../assets/css/top-nav.css");
require("./index.css");
console.log();
axios_1.default.defaults.baseURL = common_1.baseURL;
new Nav_1.default(6);
Promise.resolve().then(() => __importStar(require("../../../assets/js/research")));
// axios({ method: "GET", url: "academic-lecture.json" }).then(res => {
common_1.academic.lecture.forEach(({ url, src, title }) => {
    let a = common_1.$add("a");
    a.href = url;
    common_1.$id("content_zjk").appendChild(a);
    let dl = common_1.$add("dl");
    a.appendChild(dl);
    let dt = common_1.$add("dt");
    dl.appendChild(dt);
    let img = new Image(180, 201);
    img.src = src;
    dt.appendChild(img);
    dl.innerHTML += `<dd>${title}</dd>`;
});
// }).catch((err) => console.log(err));
