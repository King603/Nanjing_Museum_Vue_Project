let $input = document.getElementsByTagName("input")[0];
$input.onfocus = function () {
	if ((this as HTMLInputElement).value == '在这里搜索...') {
		(this as HTMLInputElement).value = '';
	}
}
$input.onblur = function () {
	if ((this as HTMLInputElement).value == '') {
		(this as HTMLInputElement).value = '在这里搜索...';
	}
}