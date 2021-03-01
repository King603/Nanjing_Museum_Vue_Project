"use strict";
let $input = document.getElementsByTagName("input")[0];
$input.onfocus = function () {
    if (this.value == '在这里搜索...') {
        this.value = '';
    }
};
$input.onblur = function () {
    if (this.value == '') {
        this.value = '在这里搜索...';
    }
};
