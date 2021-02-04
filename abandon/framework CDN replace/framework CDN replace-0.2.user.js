// ==UserScript==
// @name         前端框架 CDN 替换
// @namespace    https://github.com/liulipack/awesome-hentai
// @version      0.2
// @description  替换一些前端框架 CDN 源。
// @author       liulipack
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // 此脚本参考 https://www.v2ex.com/t/93332#r_877056 制成。
    // 定义`域名匹配正则`、`路径匹配正则`、`框架(复数)`、`无意义`和`框架`变量。
    var reg_domain = new RegExp('http[s]{0,1}:\/\/(cdn|cdnjs|static|ajax).(bootcss|cloudflare|staticfile|googleapis).(com|cn|org)'),
        reg_path = new RegExp('\/ax\/libs'),
        frameworks = document.querySelectorAll('script[src],link[rel="stylesheet"]'),
        i,
        framework;
    // for 循环
    for (i = 0; i < frameworks.length; i += 1) {
        framework = frameworks[i];
        // 尝试获取元素的 `src` 属性并替换，如果错误就替换 `href` 属性。
        try {
            framework.src
            framework.setAttribute('src', framework.src.replace(reg_domain, 'https://mirror-cdnjs.oss-cn-hangzhou.aliyuncs.com'))
            framework.setAttribute('src', framework.src.replace(reg_path, ''))
        }catch(TypeError) {
            framework.setAttribute('href', framework.src.replace(reg_domain, 'https://mirror-cdnjs.oss-cn-hangzhou.aliyuncs.com'))
            framework.setAttribute('href', framework.src.replace(reg_path, ''))
        }
    }
})();