---
sidebar_position: -2
sidebar_label: Cloud
---

# Installation - Cloud

要在云端安装ONLYOFFICE 文档：

1. 使用我们在 ONLYOFFICE 帮助中心提供的[指南](https://helpcenter.onlyoffice.com/installation/docs-developer-index.aspx?from=api)，在云端部署 ONLYOFFICE 文档开发者解决方案。

2. 在需要嵌入编辑器的目标 HTML 文件中，指定一个占位符 *div* 标签，用于传递所有关于编辑器参数的配置信息：

   ```html
   <div id="placeholder"></div>
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   **documentserver** 是您的云服务提供的公共 IP 地址或公共 DNS。该地址由系统自动分配，可在云控制台的**实例**部分查看。

   `https://documentserver/web-apps/apps/api/documents/api.js` 是 API JavaScript 文件的默认访问地址。

   从 8.1 版本开始，建议在 URL *QueryString* 中添加 [shardkey](../how-it-works/how-it-works.md#shard-key) 参数，并赋予其 *key* 值。例如：*?shardkey=Khirz6zTPdfd7*。此参数可用于请求负载均衡。

3. 指定包含可变参数的页面代码：

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", config)
   ```

   其中 *config* 为配置对象：

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
   }
   ```

   此处 **example.com** 是您的云服务提供的公共 IP 或公共 DNS，需确保已在此地址部署**文档管理器**和**文档存储服务**。关于 ONLYOFFICE 文档服务端与客户端的交互细节，请参阅[工作原理](../how-it-works/how-it-works.md)章节。

   此后，*docEditor* 对象即可用于调用**文档编辑器**[方法](../../usage-api/methods.md).

   以上示例包含确保 ONLYOFFICE 文档正常启动所需的全部必要参数。

4. 添加非必需的可选参数，以实现文档的多样化配置（如修改文档权限、显示不同文档信息等）。具体参数列表及用法请参阅[高级参数](../../usage-api/advanced-parameters.md)章节。

5. 为请求添加加密签名[令牌](../../additional-api/signature/signature.md)，防止关键参数被篡改。

## 后续步骤

- [如何启用文档强制保存](../how-it-works/saving-file.md#force-saving)
- [如何自定义编辑器界面](../../usage-api/config/editor/customization/customization-standard-branding.md)
- [如何通过自动化 API 管理编辑器](../../usage-api/automation-api.md)
- [如何安装/禁用插件](../../usage-api/config/editor/plugins.md)
