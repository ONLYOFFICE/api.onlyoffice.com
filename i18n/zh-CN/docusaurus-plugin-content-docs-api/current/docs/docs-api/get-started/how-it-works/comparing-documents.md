---
sidebar_position: -9
---

# 比较文档

文档比较功能将两个文档之间的差异以修订标记的形式高亮显示，用户可以逐一接受或拒绝每个更改。

下图和步骤说明了比较流程。

![Comparing documents](/assets/images/editor/compare.png)

1. 用户在浏览器中使用**文档管理器**打开文档进行查看或编辑。
2. **文档管理器**使用包含 [`onRequestSelectDocument`](../../usage-api/config/events.md#onrequestselectdocument) 事件处理程序的 [`config`](../../usage-api/config/config.md) 初始化**文档编辑器**。
3. 文件被[打开](./opening-file.md)进行编辑。
4. 用户点击比较菜单中的**来自存储的文档**按钮。**文档编辑器**触发 [`onRequestSelectDocument`](../../usage-api/config/events.md#onrequestselectdocument) 事件，`data.c` 设置为 `"compare"`。
5. **文档管理器**允许用户从存储中选择要比较的文档。
6. **文档管理器**调用 [`setRequestedDocument`](../../usage-api/methods.md#setrequesteddocument) 方法，传递所选文档的 URL 和 `c: "compare"` 参数给**文档编辑器**进行比较。

## 实际操作方法

1. 创建一个 `.html` 文件，用于[打开文件](./opening-file.md#how-this-can-be-done-in-practice)。

2. 将 [`onRequestSelectDocument`](../../usage-api/config/events.md#onrequestselectdocument) 事件处理程序添加到编辑器配置中。当用户点击比较菜单中的**来自存储的文档**按钮时，会触发此事件，`data.c` 设置为 `"compare"`。处理程序调用 [`setRequestedDocument`](../../usage-api/methods.md#setrequesteddocument) 传递比较文档：

   ![onRequestSelectDocument](/assets/images/editor/onRequestSelectDocument.png#gh-light-mode-only)![onRequestSelectDocument](/assets/images/editor/onRequestSelectDocument.dark.png#gh-dark-mode-only)

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestSelectDocument(event) {
         docEditor.setRequestedDocument({
           c: event.data.c,
           fileType: "docx",
           token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
           url: "https://example.com/url-to-example-document.docx",
         });
       },
     },
   });
   ```

   :::caution
   `token` 必须使用文档服务器的 JWT 密钥签名——上面的示例令牌使用的是临时密钥，无法在您的服务器上通过验证。每次参数更改时都需要重新生成令牌。详情请参阅[安全](./security.md)。
   :::

3. 比较加载完成后，用户可以使用顶部工具栏上的相应按钮来接受或拒绝更改。

   ![接受更改](/assets/images/editor/compare-documents.png#gh-light-mode-only)![接受更改](/assets/images/editor/compare-documents.dark.png#gh-dark-mode-only)

用户完成审阅后，文档会连同已接受的更改一起[保存](./saving-file.md)。
