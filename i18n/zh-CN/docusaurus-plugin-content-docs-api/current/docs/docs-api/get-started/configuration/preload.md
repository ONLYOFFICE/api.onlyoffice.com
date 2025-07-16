---
sidebar_position: -2
---

# 预加载静态资源

从版本 9.0 开始，您可以在打开文档前将静态资源（HTML、CSS、JS、字体）预加载到浏览器缓存中，以加快文档编辑器首次加载的速度。

预加载有两种方式。

### 选项 1：使用 ?preload=placeholder 参数

将 `?preload=placeholder` 参数附加到 `api.js` 的 URL 中：

``` html
<div id="placeholder"></div>
<script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js?preload=placeholder"></script>
```

其中，**documentserver** 是安装了 ONLYOFFICE 文档的服务器名称。

在此种情况下，除了创建 `DocsAPI.DocEditor` 之外，DOM 中还会自动插入一个隐藏的 `<iframe>`（其 `id="placeholder"`），该 iframe 会在后台加载编辑器的静态资源。

### 选项 2：手动插入预加载 iframe

另一种方法是，您可以手动插入一个指向预加载页面的隐藏 `<iframe>`：

``` html
<iframe src="https://documentserver/web-apps/apps/api/documents/preload.html" style="display:none;"></iframe>
```

其中，**documentserver** 是安装了 ONLYOFFICE 文档的服务器名称。

如果您需要为 iframe 设置额外的安全参数，或使用 nonce 将其插入 DOM，建议使用此方法。

> 使用 `<iframe>` 来进行预加载，而不是 `<link rel="prefetch">`。编辑器的静态资源（脚本、样式、字体）会在 iframe 的上下文中加载，而 `<link rel="prefetch">` 则无法正确触发静态资源的加载或缓存。
