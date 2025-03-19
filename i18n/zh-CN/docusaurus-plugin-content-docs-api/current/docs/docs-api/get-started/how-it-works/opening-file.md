---
sidebar_position: -22
---

# 打开文件

参考图和以下步骤说明了在 ONLYOFFICE 文档中打开文档的过程。

![打开文件](/assets/images/editor/opening.svg)

1. 用户使用**文档管理器**打开文档进行查看或编辑。

   > 浏览器**文档管理器**从**文档存储服务**接收用户可用的所有文档的列表。

2. **文档存储服务**中的文档标识符和指向它的链接使用 [JavaScript API](../basic-concepts.md) 发送到**文档编辑器**。

3. **文档编辑器**向**文档编辑服务**形成请求以打开文档。**文档编辑器**使用从**文档管理器**接收到的文档标识符及其链接（在步骤 2）。

4. **文档编辑服务**使用提供的 ID 和链接从**文档存储服务**下载文档文件。在此步骤中，还将文件[转换](./converting-and-downloading-file.md)为 Office Open XML 格式，以使**文档编辑器**具有更好的性能和格式兼容性。

5. 准备就绪后，**文档编辑服务**将文档文件传输到基于浏览器的**文档编辑器**。

6. **文档编辑器**显示文档文件和/或（在提供适当权限的情况下）允许对其进行编辑。

编辑完成后，将进行[文档保存](./saving-file.md)过程。

## 如何在实践中做到这一点

1. 创建一个空的 *html* 文件。

2. 添加 *div* 元素，如下所示。

   ``` html
   <div id="placeholder"></div>
   ```

3. 使用将用于您的网站的 JavaScript API 指定您的 ONLYOFFICE 文档链接。

   ``` html
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   **文档服务器**是安装了 ONLYOFFICE 文档的服务器的名称。

4. 添加脚本，使用要打开的文档的配置为 *div* 元素初始化**文档编辑器**。使用本地链接时，请务必添加[令牌](./security.md)。否则会出现错误。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document Title.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCJ9.7IpEJxdOvBQ0kJ8l6ZegIV4tX5vsPbZZCDDVmcFROXc",
   })
   ```
   其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。

5. 在浏览器中打开您的 *html* 文件。
