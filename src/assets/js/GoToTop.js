var GoTotop = /** @class */ (function () {
    function GoTotop() {
        var gototop = document.createElement("div");
        gototop.innerHTML = "回到顶部";
        document.body.appendChild(gototop);
        gototop.style["text-align"] = "center";
        gototop.style.position = "fixed";
        gototop.style.right = "50px";
        gototop.style.bottom = "30px";
        gototop.style.cursor = "pointer";
        gototop.style.padding = "10px";
        gototop.style["border-radius"] = "50%";
        gototop.style.background = "white";
        gototop.style.color = "#000000";
        window.addEventListener("scroll", GoTotop.showbtn, true);
        gototop.addEventListener("click", function (ev) { return ev.button == 0 && GoTotop.backtop(); });
    }
    /**显示回到顶部按钮 */
    GoTotop.showbtn = function () {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    };
    /**
     * 回到顶部功能实现过程：
     * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
     * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
     * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
     * 4. 最后记得在移动到顶部时，清除定时器
     */
    GoTotop.backtop = function () {
        var timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.floor(-osTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            if (osTop === 0)
                clearInterval(timer);
        }, 30);
    };
    return GoTotop;
}());
export default GoTotop;
