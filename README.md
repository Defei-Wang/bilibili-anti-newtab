# bilibili-anti-newtab

强制 Bilibili 在当前标签页打开视频、动态与专栏链接，解决多标签页泛滥问题。

## 功能特性

* **捕获级拦截**：在 `mousedown` 捕获阶段强行改写目标属性为 `_self`，先于 Vue/前端路由的事件分发执行。
* **动态 DOM 监听**：使用 `MutationObserver` 监控流式加载内容，清除新插入节点的 `target="_blank"`。
* **原生 API 重写**：覆写 `window.open`，将其重定向至当前窗口。
* **原生交互保留**：支持使用鼠标中键（滚轮点击）、按住 `Ctrl`、`Shift` 或 `Cmd` 键，正常在新标签页或新窗口打开。

## 安装方式

### 方式一：直接安装脚本

确保浏览器已安装 Tampermonkey 或 ScriptCat 扩展，点击下方脚本地址进行安装：

`https://raw.githubusercontent.com/<你的用户名>/bilibili-anti-newtab/main/bilibili-anti-newtab.user.js`

### 方式二：手动导入

1. 打开篡改猴（Tampermonkey）管理面板。
2. 点击“添加新脚本”。
3. 复制本仓库 `bilibili-anti-newtab.user.js` 的完整代码并保存。

## 项目结构

* `bilibili-anti-newtab.user.js`：用户脚本源码。
* `README.md`：说明文档。

## 许可证

MIT License
