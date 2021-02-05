axios && (axios.defaults.baseURL = "http://localhost/:5500/static/json/");

/**
 * DOM ID查询
 * @param {HTMLElement} element 
 */
function $id(element) {
	return document.getElementById(element);
}
/**
 * DOM 类名查询
 * @param {HTMLElement} element 
 */
function $class(element) {
	return document.getElementsByClassName(element);
}
/**
 * DOM 标签查询
 * @param {HTMLElement} element 
 */
function $tag(element) {
	return document.getElementsByTagName(element);
}
/**
 * DOM 条件查询
 * @param {Element} element 
 */
function $all(element) {
	return document.querySelectorAll(element);
}
/**
 * DON 元素添加
 * @param {string} tagName 
 */
function $add(tagName) {
	return document.createElement(tagName);
}
/**
 * DOM 修改innerHTML
 * @param {HTMLElement} element 
 * @param {string} [html = ""] 
 */
function $html(element, html = "") {
	element.innerHTML = html;
}
/**
 * DON 添加子元素
 * @param {HTMLElement} parent 
 * @param {string} tagName 
 */
function $append(parent, tagName) {
	let child = $add(tagName);
	return parent.appendChild(child);
}
/**
 * DOM 单击事件
 * @param {HTMLElement} element 
 * @param {() => void} click 
 */
function $click(element, click) {
	element.addEventListener("click", ev => ev.button == 0 && click());
}
