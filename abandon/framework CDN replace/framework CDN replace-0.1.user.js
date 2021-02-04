// ==UserScript==
// @name         前端框架 CDN 替换
// @namespace    https://github.com/liulipack/awesome-hentai
// @version      0.1
// @description  替换一些前端框架 CDN 源。
// @author       liulipack
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var reg_domain = new RegExp('http[s]{0,1}:\/\/(cdn|cdnjs|static|ajax).(bootcss|cloudflare|staticfile|googleapis).(com|cn|org)'),
        reg_path = new RegExp('\/ax\/libs'),
        frameworks = document.querySelectorAll('script[src],link[rel="stylesheet"]'),
        i,
        framework;
    for (i = 0; i < frameworks.length; i += 1) {
        framework = frameworks[i];
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