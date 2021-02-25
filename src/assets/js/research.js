export default (function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (_a) {
        var title = _a.title, src = _a.src;
        var li = document.createElement("li");
        document.getElementById("navList").appendChild(li);
        var a = document.createElement("a");
        a.href = src;
        a.innerHTML = title;
        li.appendChild(a);
    });
})({ title: "研究成果", src: "/academic_research/research_results" }, { title: "学术讲座", src: "/academic_research/lecture" }, { title: "研究课题", src: "/academic_research/research_topic" }, { title: "出版物防伪溯源信息查询、举报", src: "" });
