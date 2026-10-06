---
sidebar_position: 0
hide_table_of_contents: true
description: 以查看模式打开文档，并在编辑器加载完成后立即将其与修订文件进行比较。
tags: ["Docs", "Integration", "Comparing documents"]
---

import { CompareDocumentsEditor } from '@site/src/components/BrowserWindow';

# 比较文档

打开文档，并在编辑器加载完成后立即将其与修订版本进行比较。编辑器以查看模式打开，比较会自动开始，用户无需在编辑器中点击**比较**。

:::info
编辑器打开原始文件，并在就绪后立即将其与修订文件进行比较。差异以修订标记的形式显示。
:::

<CompareDocumentsEditor/>

## 它是如何运作的

1. 编辑器以查看模式打开原始文件：

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "original-key",
       title: "original.docx",
       url: "https://example.com/original.docx",
     },
     documentType: "word",
     editorConfig: {
       mode: "view",
     },
   };
   ```

2. 当编辑器触发 [onDocumentReady](../usage-api/config/events.md#ondocumentready) 事件时，调用 [setRequestedDocument](../usage-api/methods.md#setrequesteddocument) 方法，传入 `compare` 类型和修订文件的 URL：

   ``` ts
   config.events = {
     onDocumentReady() {
       docEditor.setRequestedDocument({
         c: "compare",
         fileType: "docx",
         url: "https://example.com/revised.docx",
         token: "<token>",
       });
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   如果文档服务器启用了 JWT，请使用与编辑器配置相同的密钥对传给 `setRequestedDocument` 的对象进行签名。详情请参阅[签名](../additional-api/signature/browser.md#setrequesteddocument)。

:::tip
如需在服务器端比较文档而不打开编辑器，请在 [Document Builder](/docs/document-builder/using-cli/comparing-documents.md) 中使用 [CompareDocuments](/docs/office-api/usage-api/document-api/Api/Methods/CompareDocuments.md) 方法。该方法需要通过 `builderJS.OpenTmpFile` 打开的文件，而该函数仅在 Document Builder 中可用。
:::
