---
sidebar_position: -9
---

# 比较文档

以下参考图和步骤解释了在ONLYOFFICE文档中比较文档的过程。

<img alt="Comparing documents" src="/assets/images/editor/compare.png" width="720px" />

1.用户使用（在其浏览器中找到的）**文档管理器**打开文档进行查看或编辑。
2. **文档存储服务**使用[JavaScript API](../basic-concepts.md)将文档信息发送给**文档编辑器**，并指定可以从**文档管理器**中选择文件。
3. 文件被[打开](./opening-file.md)进行编辑。
4. 用户通过点击**文档编辑器**中的**来自存储的文档**按钮，发送请求以获取用于比较的存储文档列表。
5. **文档编辑器**将该请求告知**文档管理器**。
6. **文档管理器**将用于比较的文档发送给**文档编辑器**。

## 实际操作方法

1. 创建一个*html*文件，用于[打开文件](./opening-file.md#how-this-can-be-done-in-practice)。

2. 在文档编辑器初始化的配置脚本中，为要显示在**比较**选项中的*来自存储的文档*按钮指定事件处理程序。当用户点击该按钮时，会调用[onRequestCompareFile](../../usage-api/config/events.md#onrequestcomparefile)事件，用户可以从存储中选择要比较的文档。

   ![onRequestCompareFile](/assets/images/editor/onRequestCompareFile.png)

   ``` ts
   function onRequestCompareFile() {
     docEditor.setRevisedFile({
       fileType: "docx",
       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
       url: "https://example.com/url-to-example-document.docx",
     })
   };
   
   const config = {
     events: {
       onRequestCompareFile,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. 为了选择要比较的文档，必须调用[setRevisedFile](../../usage-api/methods.md#setrevisedfile)方法。调用此方法时，必须添加令牌以验证参数。

   ``` ts
   docEditor.setRevisedFile({
     fileType: "docx",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
     url: "https://example.com/url-to-example-document.docx",
   })
   ```

4. 之后，用户可以使用顶部工具栏上的相应按钮来接受或拒绝这些更改。

   ![接受更改](/assets/images/editor/compare-documents.png)
