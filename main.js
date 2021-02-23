axios && (axios.defaults.baseURL = "http://127.0.0.1:5500/static/json/");

/**
 * 
 * @param {string} elementId 
 */
function $id(elementId) {
	return document.getElementById(elementId);
}
/**
 * 
 * @param {string} elementClassName 
 */
function $class(elementClassName) {
	return document.getElementsByClassName(elementClassName);
}
/**
 * 
 * @param {string} elementTagName 
 */
function $tag(elementTagName) {
	return document.getElementsByTagName(elementTagName);
}
/**
 * 
 * @param {string} element 
 */
function $all(element) {
	return document.querySelectorAll(element);
}
/**
 * 
 * @param {string} htmlElement 
 */
function $add(htmlElement) {
	return document.createElement(htmlElement);
}
