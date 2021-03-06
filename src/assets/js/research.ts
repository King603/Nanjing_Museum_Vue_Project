type obj = { title: string, src: string };
export default ((...args: obj[]): void => {
	args.forEach(({ title, src }) => {
		let li = document.createElement("li");
		(document.getElementById("navList") as HTMLElement).appendChild(li);
		let a = document.createElement("a");
		a.href = src;
		a.innerHTML = title;
		li.appendChild(a);
	});
})({ title: "研究成果", src: "/academic_research/research_results" }, { title: "学术讲座", src: "/academic_research/lecture" }, { title: "研究课题", src: "/academic_research/research_topic" }, { title: "出版物防伪溯源信息查询、举报", src: "" });
