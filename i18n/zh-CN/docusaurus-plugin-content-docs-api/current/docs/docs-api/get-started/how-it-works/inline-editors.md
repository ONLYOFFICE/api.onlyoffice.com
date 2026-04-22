---
sidebar_position: -14
---

# 内联编辑器

以下步骤解释了如何在同一个 `.html` 页面上嵌入多个ONLYOFFICE文档编辑器。

<img alt="Inline editors" src="/assets/images/editor/inlineEditors.png" width="720px" />

:::note
从5.5版本开始支持同时使用多个编辑器。
:::

1. 创建一个空的 `.html` 文件。

2. 如下所示添加 `<div>` 元素。每个编辑器都绑定到各自的占位符：

   ``` html
   <div id="placeholder1"></div>
   <div id="placeholder2"></div>
   <div id="placeholder3"></div>
   ```

3. 在页面中引入ONLYOFFICE文档的 JavaScript API 脚本：

   ``` html
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   其中 `documentserver` 是安装了ONLYOFFICE文档的服务器名称。`api.js` 脚本由**文档编辑服务**提供，它会加载**文档编辑器**并将其连接到该服务。

   :::tip
   还没有文档服务器？[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的ONLYOFFICE文档云，并使用实例的公共 IP 地址或公共 DNS 名称作为 `documentserver`。您可以在云控制台的**实例**部分找到它们。
   :::

4. 添加脚本，使用要打开的文档配置为相应的 `<div>` 元素初始化每个**文档编辑器**：

   ``` ts
   const docConfig = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document Title.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCJ9.7IpEJxdOvBQ0kJ8l6ZegIV4tX5vsPbZZCDDVmcFROXc",
   };
   const documentEditor = new DocsAPI.DocEditor("placeholder1", docConfig);

   const sheetConfig = {
     document: {
       fileType: "xlsx",
       key: "af86C7e71Ca8",
       title: "Example Spreadsheet Title.xlsx",
       url: "https://example.com/url-to-example-spreadsheet.xlsx",
     },
     documentType: "cell",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6Inhsc3giLCJrZXkiOiJhZjg2QzdlNzFDYTgiLCJ0aXRsZSI6IkV4YW1wbGUgU3ByZWFkc2hlZXQgVGl0bGUueGxzeCIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtc3ByZWFkc2hlZXQueGxzeCJ9LCJkb2N1bWVudFR5cGUiOiJjZWxsIn0.8CklPIjYSEkgM7swGAC7-85ICcq_42be3WTWNOuvhlg",
   };
   const spreadsheetEditor = new DocsAPI.DocEditor("placeholder2", sheetConfig);

   const slideConfig = {
     document: {
       fileType: "pptx",
       key: "bv48M5r64Sf9",
       title: "Example Presentation Title.pptx",
       url: "https://example.com/url-to-example-presentation.pptx",
     },
     documentType: "slide",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6InBwdHgiLCJrZXkiOiJidjQ4TTVyNjRTZjkiLCJ0aXRsZSI6IkV4YW1wbGUgUHJlc2VudGF0aW9uIFRpdGxlLnBwdHgiLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXByZXNlbnRhdGlvbi5wcHR4In0sImRvY3VtZW50VHlwZSI6InNsaWRlIn0.FKaDWfJE-OuODhtpq-8Qv6BdDy_evgdpaBw616T7zOs",
   };
   const presentationEditor = new DocsAPI.DocEditor("placeholder3", slideConfig);
   ```

   将 `example.com` 替换为提供文档文件的主机地址，即您的**文档存储服务**。

   :::caution
   当文档服务器启用了 JWT 验证（默认配置）时，每个 `config` 必须使用匹配的 [`token`](./security.md) 进行签名。上述令牌与这些确切的配置匹配，但使用的是临时密钥 — 它们不会在您的服务器上通过验证，且在配置更改时必须重新生成。请使用您的文档服务器的 JWT 密钥进行签名。
   :::

5. 要结束编辑，请调用 [destroyEditor](../../usage-api/methods.md#destroyeditor) 方法来关闭所需的编辑器：

   ``` ts
   documentEditor.destroyEditor();
   spreadsheetEditor.destroyEditor();
   presentationEditor.destroyEditor();
   ```

6. 在浏览器中打开您的 `.html` 文件。
