// ==UserScript==
// @name         永硕 168 页面美化
// @namespace    http://mirror.liulipack.tk
// @version      0.2
// @description  美化我的永硕 168 页面。
// @author       Liulipack
// @match        http://liulipack.ys168.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function () {
        $('#laczts style').remove();
        $('body').append('<style>#kjbt,.ta_wjq,#sxts,img[src="http://zy.ys168.com/f_zy/tp/point.gif"],.cdnrq>p>img:nth-child(3),.cdnrq>p>img:nth-child(4),.cdnrq>p>img:nth-child(5),.gml>img:nth-child(1),.lynr+div>label:nth-child(2),.ysck_bt button{display:none!important}.tdtop,.cdq div,#ysmenu1,#lyz,#dzx,input,textarea,.menu,#menuList li.gml,.bt2,.ysck_ck,.ysck_ck .ysck_bt{border:0!important}#idtop,.cdq div,#ysmenu1,.tx3,#lyz,#dzx,.s3,.lynr{background:transparent!important}#buyh input{background:transparent}#idczq,#lyz,#dzx{background:#fff!important;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}body{background:#e0e0e0!important}*:not(#sylj a){color:#000!important}input[type="button"],.bt2{border-radius:2px;height:32px!important;font-size:13px;line-height:32px;transition:all .2s cubic-bezier(.4,0,.2,1)}input[type="button"]:hover,.bt2:hover{background-color:rgba(0,0,0,.1)!important}#idtop{background:#78909c!important;font-size:1.25rem;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)}#sylj a{transition:all .2s cubic-bezier(.4,0,.2,1)}#sylj a:hover{color:#fff;text-decoration:unset}#xm,textarea,#bdglymm{overflow:hidden;font-size:16px!important;line-height:20px;color:rgba(0,0,0,.87);resize:none;border-bottom:1px solid rgba(0,0,0,.42)!important;appearance:none!important}textarea{width:100%;height:36px}.ml{font-size:16px;font-weight:400;letter-spacing:.04em}li.xlj,li.xwj,li.xwz{font-size:14px;font-weight:400;letter-spacing:.04em}.ysck_ck{border-radius:2px;background:#fff!important;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.ysck_ck .ysck_bt{overflow:initial;background:#fff}.ysck_ck .ysck_bt div{padding:24px 24px 20px 24px;height:auto;box-sizing:border-box;font-size:20px;font-weight:500;line-height:24px;text-align:left}.ysck_if iframe{padding:24px}#F_ck_glts_html #nrq{box-sizing:border-box;overflow-y:auto;-webkit-overflow-scrolling:touch;font-size:15px;line-height:1.5;color:rgba(0,0,0,.7)}</style>');
        $('#buyh > input:nth-child(2)').on('click', function() {
            setTimeout(function(){
                $("iframe#F_ck_zxlb_html").contents().find('body').append('<style>input[type="button"]{border: 0;border-radius:2px;height:32px!important;font-size:13px;line-height:32px;transition:all .2s cubic-bezier(.4,0,.2,1)}input[type="button"]:hover{background-color:rgba(0,0,0,.1)!important}body{background:#fff}#nr{padding:8px}.sjtb{border:0;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}tr{position:relative;box-sizing:border-box;padding:12px 28px;padding-right:28px;padding-left:28px;text-align:left;vertical-align:middle}.sjtb tr.trbt{background:#fff;overflow:hidden;font-size:13px;font-weight:700;line-height:32px;color:rgba(0,0,0,.54);text-overflow:ellipsis;white-space:nowrap}.sjtb td{border:0;font-size:14px;line-height:24px;color:rgba(0,0,0,.87)}</style>');
            }, 500);
        });
    });
})();