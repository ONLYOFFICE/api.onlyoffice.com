---
sidebar_position: -22
---

# 打开文件

下图和以下步骤说明了如何在 ONLYOFFICE 文档中打开文档。

![打开文件](/assets/images/editor/opening.svg)

1. 用户通过浏览器中的**文档管理器**打开文档进行查看或编辑。

   :::note
   **文档管理器**从**文档存储服务**接收用户可用的所有文档的列表。
   :::

2. **文档管理器**使用一个 [`config`](../../usage-api/config/config.md) 对象初始化**文档编辑器**，该对象包含文档的 [`key`](../../usage-api/config/document/document.md#key)、[`url`](../../usage-api/config/document/document.md#url) 及其他必需参数。

3. **文档编辑器**使用从**文档管理器**接收到的 `config`，向**文档编辑服务**发送打开文档的请求。

4. **文档编辑服务**使用提供的 `url` 从**文档存储服务**下载文档文件。如果文件尚未处于编辑器的原生格式之一（`.docx`、`.xlsx`、`.pptx` 或 `.pdf`），则会在此步骤中进行[转换](./converting-and-downloading-file.md)，以便**文档编辑器**能够以原生方式处理该文件。

5. 准备就绪后，**文档编辑服务**将文档文件传输到**文档编辑器**。

6. **文档编辑器**显示文档文件，并在用户拥有适当权限时允许编辑。

编辑完成后，文档将被[保存](./saving-file.md)。

## 如何在实践中做到这一点 {#how-this-can-be-done-in-practice}

1. 创建一个空的 `.html` 文件。

2. 添加 `<div>` 元素，如下所示：

   ``` html
   <div id="placeholder"></div>
   ```

3. 在您的页面中引入 ONLYOFFICE 文档的 JavaScript API 脚本：

   ``` html
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   其中 `documentserver` 是安装了 ONLYOFFICE 文档的服务器的名称。`api.js` 脚本由**文档编辑服务**提供；它会加载**文档编辑器**并将其连接到同一服务。

   :::tip
   还没有文档服务器？可[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)一个免费的 ONLYOFFICE 文档云，并使用您实例的公共 IP 地址或公共 DNS 名称作为 `documentserver`。这些信息可以在云控制台的**实例**部分找到。
   :::

4. 添加脚本，使用要打开的文档的配置为 `<div>` 元素初始化**文档编辑器**：

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

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   请将 `example.com` 替换为托管您文档文件的主机，即您的**文档存储服务**。在此最简示例中，本地 `.html` 文件扮演了**文档管理器**的角色 —— 在实际集成中，文档管理器会针对每个用户和每个文档动态生成此 `config`。如果您不想自行托管文件以快速测试，可使用 `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 作为 `url`。

   :::caution
   当文档服务器启用 JWT 校验（默认配置）时，`config` 必须使用与之匹配的 [`token`](./security.md) 进行签名。上方的 `token` 与此精确的 `config` 相匹配，但它使用一次性密钥签名 —— 在您的服务器上将无法通过校验，且每当 `config` 变更时（例如将 `url` 切换为上述示例文档）都必须重新生成。请使用您文档服务器的 JWT 密钥进行签名。令牌不会绕过网络限制：如果 `url` 指向本地或私有地址，文档服务器仍必须能够访问该地址。
   :::

5. 在浏览器中打开您的 `.html` 文件。
