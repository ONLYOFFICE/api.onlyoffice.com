---
sidebar_position: -6
---

# DocEditor

`DocsAPI.DocEditor` 是 ONLYOFFICE 文档 API 的主类。它是创建、配置和管理嵌入网页的文档编辑器的入口点。

## DocsAPI

`DocsAPI` 是由 ONLYOFFICE 文档 [API 脚本](../get-started/installation/self-hosted.md)提供的全局命名空间：

```html
<script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
```

其中 `documentserver` 是安装了 ONLYOFFICE 文档 的服务器名称。

脚本加载后，`DocsAPI` 对象将在 `window` 上可用，并公开 `DocEditor` 构造函数。

:::tip
您可以在打开文档之前[预加载静态资源](../get-started/configuration/preload.md)（HTML、CSS、JS、字体）到浏览器缓存中，以加快首次加载速度。
:::

## 构造函数

要创建编辑器实例，请使用两个参数调用 `DocEditor` 构造函数——编辑器将渲染到的现有 HTML 元素的 `id` 属性，以及[配置对象](./config/config.md)：

```ts
const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

| 参数   | 类型   | 描述                                                                                                |
| ------ | ------ | --------------------------------------------------------------------------------------------------- |
| id     | string | 编辑器将渲染到的现有 HTML 元素的 `id` 属性（例如，`"placeholder"` 对应 `<div id="placeholder">`）。 |
| config | object | 包含文档、编辑器和事件参数的[配置对象](./config/config.md)。                                        |

## 在 iframe 中渲染

构造函数不会在占位符元素内部渲染编辑器，而是用一个从 ONLYOFFICE 文档 服务器加载编辑器的 `<iframe>` **替换**该元素：

```html
<!-- 调用构造函数之前 -->
<div id="placeholder"></div>

<!-- 编辑器加载之后 -->
<iframe name="frameEditor" width="100%" height="100%" frameborder="0" allowfullscreen
        allow="autoplay; camera; microphone; display-capture; clipboard-write;"
        src="https://documentserver/web-apps/apps/documenteditor/main/index.html">
</iframe>
```

iframe 路径中的应用程序取决于 [`documentType`](./config/config.md#documenttype) 参数，其后的目录取决于 [`type`](./config/config.md#type) 参数。

### 为什么使用 iframe

- **隔离性。** 编辑器自带样式表、脚本、字体和 WebAssembly 模块。若将它们渲染到宿主页面的 DOM 中，宿主页面的 CSS 和组件框架会与编辑器的相互冲突。
- **独立更新。** 编辑器由 ONLYOFFICE 文档 提供，因此更新编辑器无需重新构建或重新部署您的应用程序。
- **安全边界。** 编辑器运行在 ONLYOFFICE 文档 的源（origin）上。同源策略使宿主页面与编辑器无法访问彼此的 DOM 和 JavaScript 上下文，跨越该边界的所有数据都通过显式的 `postMessage` 通道传递。

### 这对宿主页面意味着什么

- 占位符元素是被替换的，而不是被填充的。在其上设置的类、内联样式和其他属性会在编辑器加载时丢失。请将样式应用到占位符外层的包装元素上。
- 使用 [`width`](./config/config.md#width) 和 [`height`](./config/config.md#height) 参数设置编辑器尺寸，或者设置包装元素的尺寸并让这两个参数保持默认值 `100%`。
- 宿主页面的样式表和组件库无法作用于编辑器内部的任何内容，页面也无法读取 iframe 的 `contentDocument`。
- 与编辑器的所有交互都通过[方法](./methods.md)和[事件](./config/events.md)进行，API 脚本通过 `postMessage` 传输它们。
- 该 iframe 创建时带有 `allowfullscreen` 属性和上面列出的 `allow` 属性。如果宿主页面本身嵌入在 iframe 中，则外层 iframe 必须委派相同的权限。
- [destroyEditor](./methods.md#destroyeditor) 方法会将 iframe 替换回一个空的 `<div>` 元素，该元素仅保留原有的 `id` 属性。

### 自定义和样式

由于宿主页面的 CSS 无法作用于 iframe 内部，编辑器的外观通过[配置对象](./config/config.md)进行配置。编辑器的布局保持不变，但您可以更改其品牌标识、颜色以及向用户显示的界面元素集合：

- [customization](./config/editor/customization/customization-standard-branding.md) - 徽标、页眉颜色以及界面元素的可见性。
- [uiTheme](./config/editor/customization/customization-standard-branding.md#uitheme) - 界面主题，包括添加到 ONLYOFFICE 文档 服务器的[自定义主题](../get-started/how-it-works/customizing-themes.md)。
- [type](./config/config.md#type) - 界面布局：`desktop`、`mobile` 或 [`embedded`](./config/editor/embedded.md)。
- [plugins](./config/editor/plugins.md) - 添加到编辑器界面的功能。

## 实例方法

构造函数返回一个 `docEditor` 对象。使用它来调用在运行时控制编辑器的[方法](./methods.md)——下载文件、管理版本历史、更新共享设置等：

```ts
const docEditor = new DocsAPI.DocEditor("placeholder", config);

// 稍后，在处理事件或用户操作时：
docEditor.downloadAs("pdf");
docEditor.destroyEditor();
```

有关完整列表，请参阅[方法](./methods.md)。

## 事件

事件是在 `config.events` 部分传递的函数。它们允许集成商响应编辑器操作——例如，当文档准备就绪时、当用户请求保存时或当协作更改到达时：

```ts
const config = {
  events: {
    onAppReady() {
      console.log("Editor is ready");
    },
    onDocumentStateChange(event) {
      console.log("Document modified:", event.data);
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

有关可用事件的完整列表，请参阅[事件](./config/events.md)。

## 最小示例

```ts
const config = {
  document: {
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    title: "Example Document Title.docx",
    url: "https://example.com/url-to-example-document.docx",
  },
  documentType: "word",
  editorConfig: {
    callbackUrl: "https://example.com/url-to-callback",
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

将 `example.com` 替换为您的**文档存储服务**的主机地址。[`callbackUrl`](./config/editor/editor.md#callbackurl) 是您服务器上的端点，ONLYOFFICE 文档 会向该端点发送文档状态更新和已保存的文件。请参阅[工作原理](../get-started/how-it-works/how-it-works.md)部分，了解有关 ONLYOFFICE 文档 服务客户端-服务器交互的更多信息。

有关包含所有可用部分和参数的完整配置结构，请参阅[配置概述](./advanced-parameters.md)。

:::tip[TypeScript 支持]
安装 [`@onlyoffice/doceditor-types`](https://www.npmjs.com/package/@onlyoffice/doceditor-types) 以获取配置对象、`DocEditor` 方法和事件的完整 IntelliSense 和类型检查。该包的版本号与 ONLYOFFICE 文档版本号保持一致。
:::

:::warning
当您的文档服务器启用了 JWT 验证（默认配置）时，`config` 必须包含匹配的 [`token`](../get-started/how-it-works/security.md)。请使用您的文档服务器的 JWT 密钥对配置进行签名。
:::
