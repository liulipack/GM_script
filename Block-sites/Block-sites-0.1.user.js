// ==UserScript==
// @name         网站黑名单
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  屏蔽一些不适的网站，在某些时候
// @author       Laphy
// @match        http*://*.baidu.com/*
// @match        http*://*.pornhub.com/*
// @match        http*://*.hanime.tv/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // 阻止加载
    window.stop();
    // 替换标题
    document.title = '黑名单网站';
    // 替换图标文件
    document.querySelector("link[rel*='icon']").href = 'data:;base64,iVBORw0KGgo='
    // 替换背景色
    document.querySelector('html').style.backgroundColor = '#303030'
})();