"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _navigations;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class Nav {
    constructor(n) {
        _navigations.set(this, [
            { title: "首页", to: "/" },
            { title: "走进博物馆", to: "/introduce" },
            { title: "陈列展览", to: "/exhibition" },
            { title: "参观指南", to: "/guide" },
            { title: "文创产品", to: "/wen_gen_products" },
            { title: "网络购票", to: "/ticket" },
            { title: "学术研究/出版物", to: "/academic_research" },
            { title: "社会活动", to: "/activity" },
            { title: "当地文化", to: "/local_culture" },
        ]);
        this.setNav(n);
    }
    setNav(n) {
        __classPrivateFieldGet(this, _navigations).forEach((nav, i) => {
            let div = common_1.$add("div");
            let a = common_1.$add("a");
            if (n == i)
                a.className = "active";
            a.href = nav.to;
            a.innerHTML = nav.title;
            div.appendChild(a);
            div.className = "nav_list";
            common_1.$id("nav").appendChild(div);
        });
    }
}
exports.default = Nav;
_navigations = new WeakMap();
