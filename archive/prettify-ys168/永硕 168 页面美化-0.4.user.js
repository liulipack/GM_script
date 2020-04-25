// ==UserScript==
// @name         永硕 168 页面美化
// @namespace    http://mirror.liulipack.tk
// @version      0.4
// @description  美化我的永硕 168 页面。
// @author       Liulipack
// @match        http://liulipack.ys168.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function () {
        $('#laczts style').remove();
        GM_addStyle('#kjbt,#sylj img,.yszdyq,.ta_wjq,.gml img:first-child,#sxts,.cdnrq p:first-child img,.lyk div:last-child label:last-child,.lybj,#idsyjy,.lxts,.ysck_dx{display:none !important;}#idtop,#ysmenu1,.fgg5 .cdq div,.fgg5 .cdq div:hover,.fgg5 .tx3,.fgg5 .lynrc,.lynr,input[type="button"],.bt2{background:transparent !important;}.tdtop,.fgg5 .cdq .dqcd,.cdq div,.tx3,#nr,#ysmenu1,.lynrc,#menuList li.gml,.menu,input[type="button"],.bt2,.ysck_ck .ysck_bt,.ysck_ck{border:0 !important;}.ystop div,.lysm{margin:0 !important;}*{color:#fff!important;}body{background-color:#303030!important;}input[type="button"],.bt2{font-weight:500;font-size:.875rem;line-height:1.125rem;text-transform:uppercase;transition:all .2s ease-in-out;display:inline-block;height:2.25rem;border:none;border-radius:2px;cursor:pointer;touch-action:manipulation;text-align:center;line-height:2.25rem;vertical-align:middle;white-space:nowrap;font-size:.875rem;font-family:inherit;letter-spacing:.03em;position:relative;overflow:hidden;}input[type="button"]:hover,.bt2:hover{background-color:rgba(255,255,255,.1)!important;}#idtop{background-color:#212121!important;height:64px;line-height:64px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);}#sylj a{font-size:24px;font-weight:400;-moz-osx-font-smoothing:grayscale;margin:0 8px;}#idczq,#lyz,#dzx{background-color:#424242!important;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);}#xm,#nr,#bdglymm{border-bottom:1px solid rgba(255,255,255,.7)!important;resize:none;outline:0;}.lyk div:last-child label:first-child{opacity:.54;}.lysm,.lyhf b{font-size:15px;line-height:36px;opacity:.87;}.ysck_bt{background:#565656 !important;}.ysck_ck{border-radius:2px;background:#565656 !important;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);}.ysck_ck .ysck_bt{overflow:initial;background:#fff;}.ysck_ck .ysck_bt div{padding:24px 24px 20px 24px;height:auto;box-sizing:border-box;font-size:20px;font-weight:500;line-height:24px;text-align:left;}.ysck_if iframe{padding:24px;}#F_ck_glts_html #nrq{box-sizing:border-box;overflow-y:auto;-webkit-overflow-scrolling:touch;font-size:15px;line-height:1.5;color:rgba(0,0,0,.7);}#ck_cktp_html .ysck_bt button{display:block !important;}');
    });
})();