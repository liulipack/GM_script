// ==UserScript==
// @name         链接展示
// @namespace    https://github.com/liulipack/GM_script
// @version      0.1
// @description  方便截图时链接展示。或者更专业的说，展示 `a` 标签的 `href` 属性在链接后。
// @author       liulipack
// @match        http*://*/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    // 修改样式
    GM_addStyle('a::after{content:"("attr(href)")";}');
})();