---
sidebar_position: -9
---

# 嵌入问题

## 如何将文档嵌入到网站？

编辑器有三种主要外观，针对不同用途进行了优化：

- **desktop**, 针对桌面计算机浏览器中的显示进行了优化；
- **mobile**, 针对移动设备浏览器中的显示进行了优化；
- **embedded**, 针对将文档嵌入网页进行了优化。

您可以将具有任何外观的文档嵌入到您的网页中，但使用特定的**嵌入**显示类型更合乎逻辑，并且只为网页内的文档显示的编辑器提供主要控件。

这就是为什么 *type* 应该设置为 **embedded** 并且配置文件看起来像这样：

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    type: "embedded",
  })
  ```

有关显示类型的更多信息，请参见[此页面](../../usage-api/config/config.md#type)。

## 如何更改嵌入模式下按钮的行为？

嵌入模式只允许使用三个控制按钮显示文档：**下载**、 **共享**和**嵌入**。您可以通过以下方式更改这些按钮的行为：

- *editorConfig.embedded.embedUrl* 是配置中 *type* 参数设置为 **embedded** 的文档的绝对URL，其他用户可以使用该URL将其嵌入到自己的网站页面中。

- *editorConfig.embedded.saveUrl* 是 *document.permission.download* 参数设置为 **true** 的文档的绝对 URL，其他用户可以根据文件类型以 *DOCX*、*PPTX* 或 *XLSX* 格式将其保存到自己的计算机上。

- *editorConfig.embedded.shareUrl* i是文档的绝对 URL，其他用户可以使用它与他人共享。

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    editorConfig: {
      embedded: {
        embedUrl: "https://example.com/embedded?doc=exampledocument1.docx",
        saveUrl: "https://example.com/download?doc=exampledocument1.docx",
        shareUrl: "https://example.com/view?doc=exampledocument1.docx",
      },
    },
  })
  ```

其中 **>example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户机-服务器交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

要删除这些按钮中的任何一个，只需在配置文件中不要包含相应的参数。

> 如果您决定隐藏**下载**按钮（*editorConfig.embedded.saveUrl* 参数），请不要忘记将文档配置中的 *document.permission.download*> 参数设置为 **false** 以完全禁用下载文件的可能性。

有关嵌入参数的更多信息，请参见[此页面](../../usage-api/config/editor/embedded.md)。
