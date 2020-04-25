// ==UserScript==
// @name         萌百-去黑幕
// @namespace    http://liulipack.tk
// @version      0.2
// @description  去除萌娘百科与H萌娘的黑幕。 Remove the shady moegirl and hmoegirl.
// @author       Liulipack
// @match        *://hmoegirl.com/*
// @match        *://www.hmoegirl.com/*
// @match        *://zh.moegirl.org/*
// @updateURL    https://liulipack-script.oss-cn-hangzhou.aliyuncs.com/moegirl%20Remove-shady/萌百-去黑幕-latest.use.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle('.heimu {color: #fff} .heimu a, span.heimu a.extiw {color: lightblue}');
})();
