# bilibili-anti-newtab

一个用于 Tampermonkey / Violentmonkey 的用户脚本，用于彻底阻止哔哩哔哩（Bilibili）在新标签页打开链接，强制在当前标签页加载目标页面。

## 功能特性

- **拦截底层点击**：在 `mousedown` 捕获阶段将 `target="_blank"` 强行重写为 `target="_self"`，防止 Vue 虚拟 DOM 状态覆盖。
- **DOM 动态监听**：使用 `MutationObserver` 后台监控动态生成的视频卡片并剔除新标签页属性。
- **劫持重定向**：拦截页面脚本调用的 `window.open`，强制更改当前窗口的 `location.href`。
- **按键放行**：保留鼠标中键点击、按住 `Ctrl` / `Cmd` / `Shift` 点击在新标签页打开的原生浏览器行为。

## 安装方式

1. 浏览器需预先安装 Tampermonkey 或 Violentmonkey 扩展。
2. 点击下方原始文件链接直接安装：

`https://raw.githubusercontent.com/Defei-Wang/bilibili-anti-newtab/main/bilibili-anti-newtab.user.js`

## 兼容性

- 支持 Tampermonkey、Violentmonkey、ScriptCat。
- 适用于 Chromium 核心浏览器（Chrome、Edge 等）及 Firefox。
