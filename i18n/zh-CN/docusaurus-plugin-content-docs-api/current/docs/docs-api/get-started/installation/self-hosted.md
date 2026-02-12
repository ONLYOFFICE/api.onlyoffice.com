---
sidebar_position: -1
sidebar_label: Self-hosted
---

# 安装 - 自托管

ONLYOFFICE 文档支持在 Windows、Linux 和 Docker 环境部署。

要在本地服务器安装：

1. 从官网[下载](https://www.onlyoffice.com/zh/download-docs.aspx?from=api#docs-developer) ONLYOFFICE 文档开发者版，并根据帮助中心指引进行安装：

   - [Windows 系统安装指南](https://helpcenter.onlyoffice.com/installation/docs-developer-install-windows.aspx?from=api)
   - [Linux 系统安装指南](https://helpcenter.onlyoffice.com/installation/docs-developer-install-ubuntu.aspx?from=api)
   - [Docker 容器安装指南](https://helpcenter.onlyoffice.com/installation/docs-developer-install-docker.aspx?from=api)

2. 在需要嵌入编辑器的目标 HTML 文件中，定义占位符 *div* 标签用于传递编辑器参数：

   ```html
   <div id="placeholder"></div>
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   **documentserver** 指代已安装 ONLYOFFICE 文档的服务器名称。若本地部署，此处应为本地服务器地址（如 `http://localhost`）。

   `https://documentserver/web-apps/apps/api/documents/api.js` 是 API JavaScript 文件的默认访问路径。

   :::info
   自 8.1 版本起，建议在 URL *QueryString* 中添加包含 *key* 值的 [shardkey](/docs/docs-api/get-started/configuration/shard-key.md) 参数。例如：*?shardkey=Khirz6zTPdfd7*。此参数支持请求负载均衡。

   从 9.0 版本开始，您可以在打开文档前，将静态资源（HTML、CSS、JS、字体）[预加载](/docs/docs-api/get-started/configuration/preload.md)到浏览器缓存中，从而加快首次加载文档编辑器的速度。
   :::

3. 定义包含可变参数的页面代码：

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

   **example.com** 指代部署了**文档管理器**和**文档存储服务**的服务器名称。您可以使用我们的示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。关于服务端与客户端的交互机制，请参阅[工作原理](/docs/docs-api/get-started/how-it-works/how-it-works.md)章节。

   此后，*docEditor* 对象即可调用**文档编辑器**[方法](/docs/docs-api/usage-api/methods.md)。

   以上配置包含确保 ONLYOFFICE 文档正常启动的所有必要参数。

4. 添加非必需的可选参数，以实现文档的多样化控制（如调整权限、显示自定义信息等）。具体参数列表及用法请参阅[高级参数](/docs/docs-api/usage-api/advanced-parameters.md)章节。

5. 为请求添加加密签名[令牌](/docs/docs-api/additional-api/signature/signature.md)，防止关键参数被篡改。

## 准备工作

在使用 ONLYOFFICE 文档 API 前，建议根据需求完成以下配置：

- 开放必要[端口](https://helpcenter.onlyoffice.com/installation/docs-developer-open-ports.aspx?from=api)；
- 在 ONLYOFFICE 文档的配置文件中调整 [ONLYOFFICE 文档服务器设置](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx?from=api)；
- 使用 [SSL 证书](https://helpcenter.onlyoffice.com/installation/docs-community-https-linux.aspx?from=api)将 ONLYOFFICE 文档切换至 HTTPS 协议；
- 添加额外[字体](https://helpcenter.onlyoffice.com/installation/docs-community-install-fonts-linux.aspx?from=api)到 ONLYOFFICE 文档以增强编辑器兼容性；
- 自定义编辑器界面[主题配色](https://helpcenter.onlyoffice.com/installation/docs-developer-change-theme.aspx?from=api)。

## 健康检查

向 */healthcheck* 发送 GET 请求可验证编辑器可用性。该请求将检测数据库、消息代理、Redis 连接和存储服务的运行状态。

正常响应应为 **true**，表示编辑器已就绪。

若检测失败，请检查是否已正确完成上述安装步骤。

## 后续步骤

- [如何启用文档强制保存](/docs/docs-api/get-started/how-it-works/saving-file.md#force-saving)
- [如何自定义编辑器界面](/docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md)
- [如何通过自动化 API 管理编辑器](/docs/docs-api/usage-api/automation-api.md)
- [如何安装/禁用插件](/docs/docs-api/usage-api/config/editor/plugins.md)
