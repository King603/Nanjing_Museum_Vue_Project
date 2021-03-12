"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = __importDefault(require("../../assets/js/Nav"));
const GoToTop_1 = __importDefault(require("../../assets/js/GoToTop"));
const common_1 = require("../../assets/js/common");
require("normalize.css");
require("../../assets/scss/common.scss");
require("../../assets/scss/top-nav.scss");
require("./index.scss");
console.clear();
new Nav_1.default(2);
let bgImgUrl = require("../../assets/static/bg/exhibition_bg.jpg");
let logoImg = require("../../assets/static/陈列展览.jpg");
let index_text = "专题展内容更加丰富  形式设计标新立异\n“中国古代碑志展”、“明清瓷器展”、“明清玉器展”是新馆试开馆一期推出的馆藏文物专题展。也许很多观众在市府老馆欣赏过这三个展览，但是新馆的展出把这三个展览再次推向一个精益求精的新高度。 展览内容不仅更加丰富，体系更加完善，而且增加了更多辽博自主开发的互动项目，观众可以通过现代化的多媒体技术充分感受科技与文化的完美结合。在形式设计方面增加了直观生动的布景箱，突破了原有的单一文字和图片说明，让观众更加形象地理解其中晦涩难懂的知识，有助于观众对展览的理解和对知识的掌握。\n临时特展角度新颖  妙趣横生\n新馆试开馆一期推出的临时特展“指点江山——‘毛泽东诗词’名家书画展”、“梦里家山——旅美辽宁籍画家侯北人捐赠作品展”、“怀袖丹青——中国明清扇面绘画展”、“情满辽河——辽宁民间绣品展”为我馆馆藏展览，“一个意大利记者镜头中的中国”为我馆引进展览。其中，“指点江山——‘毛泽东诗词’名家书画展”从馆藏书画作品中遴选出120件名家力作进行展出，全面展现毛泽东诗词永恒的艺术魅力和名家书画璀璨的艺术风采；“梦里家山——旅美辽宁籍画家侯北人捐赠作品展”将在“侯北人张韵琴绘画馆”展出，该展览汇集了侯北人先生六十多年来不同时期的作品150件，完整展示了侯先生艺术发展历程，并向世人展现其在绘画艺术上对东西文化的高度融合，对中国画的发展大有裨益；“怀袖丹青——中国明清扇面绘画展”展现了文人墨客山水寄情、花鸟娱心、诗文咏志的别样情怀，突显了扇面艺术作为中国画艺术的一种表现形式，对于继承展示书画发展所产生的重要意义；“情满辽河——辽宁民间绣品展” 展品种类齐全、花样繁多，格调鲜明，展现了刺绣作为高档手工艺品散发的浓郁地域特色，彰显了满足儿女淳厚、直白、简略的艺术风格。";
let texts = index_text.split("\n");
let menus = [
    {
        title: "临时特展",
        menu: [
            { title: "文·物—中华传统文化教育展" },
            { title: "天半人半—纪念陈半丁逝世五十周年特展" },
            { title: "艺术·生活—辽宁省博物馆研发文创作品展" }
        ]
    },
    {
        title: "常规展览",
        menu: [{
                title: "古代辽宁",
                menu: [
                    { title: "史前时期" },
                    { title: "夏商周时期" },
                    { title: "战国至隋唐时期" },
                    { title: "辽金时期" },
                    { title: "元明清时期" }
                ]
            }, {
                title: "专题陈列",
                menu: [
                    { title: "满族民俗展" },
                    { title: "中国古代铜镜展" },
                    { title: "中国古代佛教造像展" },
                    { title: "中国古代货币展" },
                    { title: "中国古代玺印展" },
                    { title: "辽代陶瓷展" },
                    { title: "明清瓷器展" },
                    { title: "明清玉器展" },
                    { title: "中国古代碑志展" }
                ]
            }]
    },
    {
        title: "展览回顾",
        menu: [
            { title: "文物系荆楚祝福颂" },
            { title: "又见红山—精品文物展" },
            { title: "“又见大唐”书画文物展" }
        ]
    }
];
document.body.style.background = `url(${bgImgUrl}) center top no-repeat #f3efd3 fixed`;
common_1.$class("exhibition-logo")[0].src = logoImg;
function getText(str) {
    return str.substring(0, 8);
}
let $menu = common_1.$id("menu");
setMenu1(menus, $menu);
function setMenu1(menus, $menu) {
    menus.forEach(menu1 => {
        let li = common_1.$add("li");
        li.innerHTML = `<div class="menu1">${getText(menu1.title)}</div>`;
        let ul = common_1.$add("ul");
        setMenu2(menu1.menu, ul);
        li.append(ul);
        ul.className = "menu_1";
        $menu.append(li);
        ul.style.display = "none";
        li.getElementsByTagName("div")[0].addEventListener("click", ev => {
            if (ev.button == 0) {
                ul.style.display = on_off() ? "block" : "none";
            }
        });
    });
}
function setMenu2(menus, parentNode) {
    menus.forEach(menu2 => {
        let li = common_1.$add("li");
        li.innerHTML = `<div class="menu2">${getText(menu2.title)}</div>`;
        parentNode.append(li);
        if (menu2.menu) {
            let ul = common_1.$add("ul");
            setMenu3(menu2.menu, ul);
            li.append(ul);
            ul.style.display = "none";
            li.getElementsByTagName("div")[0].addEventListener("click", ev => {
                if (ev.button == 0) {
                    ul.style.display = on_off() ? "block" : "none";
                }
            });
        }
    });
}
function setMenu3(menus, parentNode) {
    menus.forEach(menu3 => {
        let li = common_1.$add("li");
        li.innerHTML = `<div class="menu3">${getText(menu3.title)}</div>`;
        parentNode.append(li);
    });
}
const on_off = (function () {
    let isShow = false;
    return function () {
        isShow = !isShow;
        console.log(isShow);
        return isShow;
    };
})();
let $text = common_1.$id("text");
texts.forEach(text => {
    let p = common_1.$add("p");
    p.innerHTML = `${text}<br /><br />`;
    $text.appendChild(p);
});
new GoToTop_1.default();
