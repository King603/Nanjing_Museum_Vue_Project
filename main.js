axios && (axios.defaults.baseURL = "http://127.0.0.1:5500/static/json/");

/**
 * 
 * @param {HTMLElement} element 
 */
function $id(element) {
	return document.getElementById(element);
}
/**
 * 
 * @param {HTMLElement} element 
 */
function $class(element) {
	return document.getElementsByClassName(element);
}
/**
 * 
 * @param {HTMLElement} element 
 */
function $tag(element) {
	return document.getElementsByTagName(element);
}
/**
 * 
 * @param {Element} element 
 */
function $all(element) {
	return document.querySelectorAll(element);
}
/**
 * 
 * @param {HTMLElement} htmlElement 
 */
function $add(htmlElement) {
	return document.createElement(htmlElement);
}
