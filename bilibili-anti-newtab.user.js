// ==UserScript==
// @name         B站强制当前标签页打开
// @namespace    https://github.com/Defei-Wang/bilibili-anti-newtab
// @version      5.0
// @description  拦截 mousedown 事件与 window.open，强制 B 站所有链接在当前标签页打开
// @author       Defei-Wang
// @match        *://*.bilibili.com/*
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/Defei-Wang/bilibili-anti-newtab/main/bilibili-anti-newtab.user.js
// @downloadURL  https://raw.githubusercontent.com/Defei-Wang/bilibili-anti-newtab/main/bilibili-anti-newtab.user.js
// ==/UserScript==


(function() {
    'use strict';

    // 1. 核心杀手锏：在鼠标按下的瞬间，强行修改底层目标属性，快于任何 click 事件
    window.addEventListener('mousedown', function(e) {
        // 放行鼠标中键或按住 Ctrl/Shift 键的正常新标签页需求
        if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;

        // 往上找 <a> 标签
        let target = e.target.closest('a');
        if (target && target.href && target.getAttribute('target') === '_blank') {
            target.setAttribute('target', '_self');
        }
    }, true); // true 表示在捕获阶段最高优先级执行

    // 2. 双保险：后台静默剥离所有 target="_blank" 属性
    const observer = new MutationObserver(() => {
        document.querySelectorAll('a[target="_blank"]').forEach(el => {
            el.setAttribute('target', '_self');
        });
    });

    const startObserve = () => {
        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
        } else {
            requestAnimationFrame(startObserve);
        }
    };
    startObserve();

    // 3. 彻底封死原生 window.open
    const originalOpen = window.open;
    window.open = function(url) {
        if (url) {
            window.location.href = url;
            return null;
        }
        return originalOpen.apply(this, arguments);
    };
})();
