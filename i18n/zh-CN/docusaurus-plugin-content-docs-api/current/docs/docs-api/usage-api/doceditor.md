---
sidebar_position: -6
---

# DocEditor

`DocsAPI.DocEditor` 是 ONLYOFFICE文档 API 的主类。它是创建、配置和管理嵌入网页的文档编辑器的入口点。

## DocsAPI

`DocsAPI` 是由 ONLYOFFICE文档 [API 脚本](../get-started/installation/self-hosted.md)提供的全局命名空间：

```html
<script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
```

其中 `documentserver` 是安装了 ONLYOFFICE文档 的服务器名称。

脚本加载后，`DocsAPI` 对象将在 `window` 上可用，并公开 `DocEditor` 构造函数。

:::tip
您可以在打开文档之前[预加载静态资源](../get-started/configuration/preload.md)（HTML、CSS、JS、字体）到浏览器缓存中，以加快首次加载速度。
:::

## 构造函数

要创建编辑器实例，请使用两个参数调用 `DocEditor` 构造函数——编辑器将渲染到的现有 HTML 元素的 `id` 属性，以及[配置对象](./config/config.md)：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

| 参数        | 类型   | 描述                                                                                                             |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| placeholder | string | 编辑器将渲染到的现有 HTML 元素的 `id` 属性（例如，`"placeholder"` 对应 `<div id="placeholder">`）。              |
| config      | object | 包含文档、编辑器和事件参数的[配置对象](./config/config.md)。                                                     |

## 实例方法

构造函数返回一个 `docEditor` 对象。使用它来调用在运行时控制编辑器的[方法](./methods.md)——下载文件、管理版本历史、更新共享设置等：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", config);

// 稍后，在处理事件或用户操作时：
docEditor.downloadAs("pdf");
docEditor.destroyEditor();
```

有关完整列表，请参阅[方法](./methods.md)。

## 事件

事件是在 `config.events` 部分传递的函数。它们允许集成商响应编辑器操作——例如，当文档准备就绪时、当用户请求保存时或当协作更改到达时：

``` ts
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

``` ts
const config = {
  document: {
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    title: "Example Document Title.docx",
    url: "https://example.com/url-to-example-document.docx",
  },
  documentType: "word",
  editorConfig: {
    callbackUrl: "https://example.com/url-to-callback.ashx",
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

将 `example.com` 替换为您的**文档存储服务**的主机地址。[`callbackUrl`](./config/editor/editor.md#callbackurl) 是您服务器上的端点，ONLYOFFICE文档 会向该端点发送文档状态更新和已保存的文件。请参阅[工作原理](../get-started/how-it-works/how-it-works.md)部分，了解有关 ONLYOFFICE文档 服务客户端-服务器交互的更多信息。

:::caution
当您的文档服务器启用了 JWT 验证（默认配置）时，`config` 必须包含匹配的 [`token`](../get-started/how-it-works/security.md)。请使用您的文档服务器的 JWT 密钥对配置进行签名。
:::
