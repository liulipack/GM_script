// ==UserScript==
// @name         去除过渡动画
// @namespace    http://liulipack.github.io
// @version      0.2
// @description  去除过渡动画。去除 wordpress twentyfifteen 主题的异步动画。
// @author       liulipack
// @match        http*://*/*
// @exclude      https://duckduckgo.com/*
// @exclude      http://xgggolq.rinue.top/*
// @exclude      https://flyhigher.top/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('*,*::before,*::after{transform:all 0s!important;transition:none!important;}#main center{display:none;}');
})();