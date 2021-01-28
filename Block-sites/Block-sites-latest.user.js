// ==UserScript==
// @name         贤者时间·屏蔽
// @namespace    http://liulipack.github.io
// @version      0.4
// @description  屏蔽一些不适的网站，在不方便的时候。
// @author       liulipack
// @match        http*://*.baidu.com/*
// @match        http*://*.pornhub.com/*
// @match        http*://*.hanime.tv/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // 阻止加载
    window.stop();
    // 优化处理。替换标题、替换图标文件和替换背景色。
    document.title = '注意身体';
    document.querySelector("link[rel*='icon']").href = 'data:;base64,iVBORw0KGgo='
    GM_addStyle('html{background:#303030}');
})();