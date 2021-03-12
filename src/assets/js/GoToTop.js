"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GoTotop {
    constructor() {
        this.scrollTop = 0;
        let gototop = document.createElement("div");
        gototop.innerHTML = "回到顶部";
        document.body.appendChild(gototop);
        let gototopStyle = { textAlign: "center", position: "fixed", right: "50px", bottom: "30px", cursor: "pointer", padding: "10px", borderRadius: "50%", background: "white", color: "#000000", };
        for (let [key, value] of Object.entries(gototopStyle))
            gototop.style[key] = value;
        window.addEventListener("scroll", (e) => this.showbtn(e), true);
        gototop.addEventListener("click", ev => ev.button == 0 && this.backtop());
    }
    /**显示回到顶部按钮 */
    showbtn(e) {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
    /**
     * 回到顶部功能实现过程：
     * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
     * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
     * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
     * 4. 最后记得在移动到顶部时，清除定时器
     */
    backtop() {
        let timer = setInterval(() => {
            // 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            // 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
            let ispeed = Math.floor(-osTop / 5);
            // 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            // 最后记得在移动到顶部时，清除定时器
            if (osTop === 0)
                clearInterval(timer);
        }, 30);
    }
}
exports.default = GoTotop;
