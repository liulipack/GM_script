// ==UserScript==
// @name         Nyaa 强制暗色样式
// @namespace    http://www.liulipack.tk
// @version      0.1
// @description  将 Nyaa 页面强制暗色样式。
// @author       liulipack
// @match        https://sukebei.nyaa.si/*
// @match        https://nyaa.si/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // 定义`setThemeDark`函数
    function setThemeDark() {
        var bsThemeLink = document.getElementById("bsThemeLink");
        bsThemeLink.href = "/static/css/bootstrap-dark.min.css",
        localStorage.setItem("theme", "dark"),
        document.body !== null && document.body.classList.add('dark')
    }
    // 检测深色模式是否开启，如果未开启就执行`setThemeDark`函数。
    if(localStorage.getItem("theme") == 'light' || "undefined"!=typeof Storage) {
        setThemeDark()
    }
    // 图片降亮度
    GM_addStyle('img{filter: brightness(.8);}');
})();