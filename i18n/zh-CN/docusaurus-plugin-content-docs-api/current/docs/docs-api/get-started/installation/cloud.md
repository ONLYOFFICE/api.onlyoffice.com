---
sidebar_position: -2
sidebar_label: Cloud
---

# 安装 - 云端

要在云端安装 ONLYOFFICE 文档：

1. 通过我们的官网上填写注册[表单](https://helpcenter.onlyoffice.com/installation/docs-developer-index.aspx?from=api)，在云端部署 ONLYOFFICE 文档开发者版解决方案。

2. 在需要嵌入编辑器的目标 HTML 文件中，指定一个占位符 *div* 标签，用于传递所有关于编辑器参数的配置信息：

   ```html
   <div id="placeholder"></div>
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   **documentserver** 是您的云服务提供的公共 IP 地址或公共 DNS。该地址由系统自动分配，可在云控制台的**实例**部分查看。

   `https://documentserver/web-apps/apps/api/documents/api.js` 是 API JavaScript 文件的默认访问地址。
   
   :::info
   从 8.1 版本开始，建议在 URL *QueryString* 中添加 [shardkey](/docs/docs-api/get-started/configuration/shard-key.md) 参数，并赋予其 *key* 值。例如：*?shardkey=Khirz6zTPdfd7*。此参数可用于请求负载均衡。
   :::
   从 9.0 版本开始，你可以在打开文档之前将静态资源（HTML、CSS、JS、字体）[预加载](/docs/docs-api/get-started/configuration/preload.md)到浏览器缓存中，以加快文档编辑器首次加载的速度。
   :::

3. 指定包含可变参数的页面代码：

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

   此处 **example.com** 是您的云服务提供的公共 IP 或公共 DNS，需确保已在此地址部署**文档管理器**和**文档存储服务**。您可以使用我们的示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。关于 ONLYOFFICE 文档服务端与客户端的交互细节，请参阅[工作原理](/docs/docs-api/get-started/how-it-works/how-it-works.md)章节。

   此后，*docEditor* 对象即可用于调用**文档编辑器**[方法](/docs/docs-api/usage-api/methods.md).

   以上示例包含确保 ONLYOFFICE 文档正常启动所需的全部必要参数。

4. 添加非必需的可选参数，以实现文档的多样化配置（如修改文档权限、显示不同文档信息等）。具体参数列表及用法请参阅[高级参数](/docs/docs-api/usage-api/advanced-parameters.md)章节。

5. 为请求添加加密签名[令牌](/docs/docs-api/additional-api/signature/signature.md)，防止关键参数被篡改。

## 后续步骤

- [如何启用文档强制保存](/docs/docs-api/get-started/how-it-works/saving-file.md#force-saving)
- [如何自定义编辑器界面](/docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md)
- [如何通过自动化 API 管理编辑器](/docs/docs-api/usage-api/automation-api.md)
- [如何安装/禁用插件](/docs/docs-api/usage-api/config/editor/plugins.md)
