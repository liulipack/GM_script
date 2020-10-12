// ==UserScript==
// @name         琉璃换图标
// @namespace     https://liulipack.github.io 
// @version      0.1
// @description  琉璃神社换等级图标
// @author       Liulipack
// @match         https://www.liuli.pl/wp/bbs/* 
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 遍历换等级图标
    document.querySelectorAll('.author-rating-full').forEach((rating) => {
        rating.innerHTML = '<i class="fas fa-shield-alt"></i>'
    });
    // 遍历换等级图标颜色
    document.querySelectorAll('.author-rating-full').forEach((color) => {
        color.style.color = '#ff812d'
    });
})();
