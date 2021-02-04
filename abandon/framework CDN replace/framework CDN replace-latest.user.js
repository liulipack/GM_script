// ==UserScript==
// @name         前端框架 CDN 替换
// @namespace    https://github.com/liulipack/awesome-hentai
// @version      0.4
// @description  替换前端框架库 CDN 源。只能替换 CSS 没什么用，放弃了。
// @author       liulipack
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // 此脚本参考 https://www.v2ex.com/t/93332#r_877056 制成。
    // 定义`域名匹配正则`、`路径匹配正则`、`框架(复数)`、`无意义`和`框架`变量。
    var reg_cdnjs = new RegExp('http(s)?:\/\/(cdn|cdnjs|static|ajax|lib)\.(bootcss|bootcdn|cloudflare|staticfile|googleapis|css|baomitu)\.(com|cn|org|net)(/ajax/libs)?'),
        Aims = document.querySelectorAll('script[src],link[rel="stylesheet"]'),
        Aim,
        rep,
        i;
    // for 循环
    for (i = 0; i < Aims.length; i += 1) {
        Aim = Aims[i]
        // 尝试获取元素的 `src` 属性并替换，如果错误就替换 `href` 属性。
        try {
            rep = Aims[i].src;
            Aim.setAttribute('src', rep.replace(reg_cdnjs, 'https://mirror-cdnjs.oss-cn-hangzhou.aliyuncs.com'));
        }catch(TypeError) {
            rep = Aims[i].href;
            Aim.setAttribute('href', rep.replace(reg_cdnjs, 'https://mirror-cdnjs.oss-cn-hangzhou.aliyuncs.com'));
        }
    }
})();