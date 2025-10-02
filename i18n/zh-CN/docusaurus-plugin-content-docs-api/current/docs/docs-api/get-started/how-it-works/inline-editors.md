---
sidebar_position: -14
---

# 内联编辑器

以下步骤解释了在ONLYOFFICE文档中如何将多个编辑器连接到同一个HTML页面的过程。

> 从5.5版本开始支持同时使用多个编辑器。

<img alt="Inline editors" src="/assets/images/editor/inlineEditors.png" width="720px" />

1. 创建一个空的*html*文件。

2. 指定你的ONLYOFFICE文档链接以及将用于你网站的JavaScript API：

   ``` html
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   其中**documentserver**是安装了ONLYOFFICE文档的服务器名称。

3. 如下所示添加*div*元素。为了将多个编辑器连接到同一个*html*页面，每个编辑器都可以单独进行初始化：

   ``` html
   <div id="placeholder1"></div>
   <div id="placeholder2"></div>
   <div id="placeholder3"></div>
   ```

4. 添加脚本，使用你想要打开的文档的配置为*div*元素初始化**文档编辑器**。使用本地链接时，请务必添加[令牌](./security.md)，否则将会出现错误。

   每个编辑器都有其自己的初始化脚本：

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document Title.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCJ9.7IpEJxdOvBQ0kJ8l6ZegIV4tX5vsPbZZCDDVmcFROXc",
   };
   const documentEditor = new DocsAPI.DocEditor("placeholder1", config);

   const config = {
     document: {
       fileType: "xlsx",
       key: "af86C7e71Ca8",
       title: "Example Spreadsheet Title.xlsx",
       url: "https://example.com/url-to-example-spreadsheet.xlsx",
     },
     documentType: "cell",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6Inhsc3giLCJrZXkiOiJhZjg2QzdlNzFDYTgiLCJ0aXRsZSI6IkV4YW1wbGUgU3ByZWFkc2hlZXQgVGl0bGUueGxzeCIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtc3ByZWFkc2hlZXQueGxzeCJ9LCJkb2N1bWVudFR5cGUiOiJjZWxsIn0.8CklPIjYSEkgM7swGAC7-85ICcq_42be3WTWNOuvhlg",
   };
   const spreadsheetEditor = new DocsAPI.DocEditor("placeholder2", config);

   const config = {
     document: {
       fileType: "pptx",
       key: "bv48M5r64Sf9",
       title: "Example Presentation Title.pptx",
       url: "https://example.com/url-to-example-presentation.pptx",
     },
     documentType: "slide",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6InBwdHgiLCJrZXkiOiJidjQ4TTVyNjRTZjkiLCJ0aXRsZSI6IkV4YW1wbGUgUHJlc2VudGF0aW9uIFRpdGxlLnBwdHgiLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXByZXNlbnRhdGlvbi5wcHR4In0sImRvY3VtZW50VHlwZSI6InNsaWRlIn0.FKaDWfJE-OuODhtpq-8Qv6BdDy_evgdpaBw616T7zOs",
   };
   const presentationEditor = new DocsAPI.DocEditor("placeholder3", config);
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

5. 为了结束编辑，必须调用[destroyEditor](../../usage-api/methods.md#destroyeditor)方法来关闭所需的编辑器：

   ``` ts
   documentEditor.destroyEditor()
   spreadsheetEditor.destroyEditor()
   presentationEditor.destroyEditor()
   ```

6. 在浏览器中打开你的*html*文件。
