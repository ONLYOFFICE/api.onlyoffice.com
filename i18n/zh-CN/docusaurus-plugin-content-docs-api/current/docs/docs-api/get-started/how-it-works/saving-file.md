---
sidebar_position: -21
---

# 保存文件

下图和以下步骤说明了如何在 ONLYOFFICE 文档中保存文档。

![保存文件](/assets/images/editor/saving.jpg)

1. 用户在**文档编辑器**中编辑文档。
2. **文档编辑器**将更改发送到**文档编辑服务**。
3. 用户关闭**文档编辑器**。
4. **文档编辑服务**检测到所有用户已完成编辑，并将从**文档编辑器**接收到的更改编译为最终文档。
5. **文档编辑服务**使用 [`callbackUrl`](../../usage-api/config/editor/editor.md#callbackurl) 通知**文档存储服务**编辑已完成，并以 [`url`](../../usage-api/callback-handler.md#url) 参数返回修改后文档的链接。

   :::note
   从 5.5 版本开始，根据请求的 [status](../../usage-api/callback-handler.md#status*) 选择 `callbackUrl`。从 4.4 到 5.5 版本，使用最后一个加入共同编辑会话的用户的 `callbackUrl`。在 4.4 版本之前，使用第一个打开文件进行编辑的用户的 `callbackUrl`。
   :::

6. **文档存储服务**从**文档编辑服务**下载包含所有已保存更改的文档文件并将其存储。

## 如何在实践中做到这一点

1. 创建一个[回调处理程序](../../usage-api/callback-handler.md)以保存来自**文档编辑服务**的文档。

2. 创建一个 `.html` 文件来[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

3. 在编辑器初始化配置中，将回调处理程序的 URL 添加为 [`callbackUrl`](../../usage-api/config/editor/editor.md#callbackurl) 参数。请务必添加 [`token`](./security.md)——否则请求将被拒绝。

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
       callbackUrl: "https://example.com/url-to-callback",
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWNhbGxiYWNrLmFzaHgifX0.vbezS2aM8Xf8qFzIAsO-jrIsi7VLxjRYkIkwh5jLTJU",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   将 `example.com` 替换为提供文档文件的主机，即您的**文档存储服务**。

4. 在浏览器中打开您的 `.html` 文件并编辑文档。

5. 关闭**文档编辑器**。大约 10 秒后，验证文档是否包含您的更改——如果包含，则配置正确。

## 保存延迟 {#save-delay}

编辑完成后，**文档编辑服务**会通知**文档存储服务**。此过程所需的总时间取决于两个因素：

- **转换时间** — 将编辑文件转换为编辑器原生格式（`.docx`、`.xlsx`、`.pptx` 或 `.pdf`）。因文件大小、复杂性和服务器性能而异。
- **转换开始延迟** — 默认为 5 秒。此延迟允许用户在不触发保存的情况下返回编辑会话——例如，在文件仍处于打开状态时重新加载浏览器页面。

在大多数情况下，保存在编辑结束后约 10 秒完成。默认延迟由 [ONLYOFFICE 文档服务器配置](../../configuration/server-config/intro)中的 [`savetimeoutdelay`](../../configuration/server-config/server#servicescoauthoringserversavetimeoutdelay) 参数定义。

## 强制保存 {#force-saving}

**文档编辑服务**允许您在编辑完成之前获取当前文档状态。此过程在 ONLYOFFICE 文档中称为 *forcesave*。当启动 forcesave 时，**文档编辑服务**向[回调处理程序](../../usage-api/callback-handler.md)发送请求，其中文档链接作为 `url` 参数，`status` 参数设置为 `6`。可以通过以下方式启动强制保存过程：

- 向[文档命令服务](../../additional-api/command-service/command-service.md)发送请求，将 `c` 参数设置为 [forcesave](../../additional-api/command-service/forcesave.md)。回调处理程序请求中的 `forcesavetype` 参数值为 `0`。

- 启用 [editorConfig.customization.forcesave](../../usage-api/config/editor/customization/customization-standard-branding.md#forcesave) 模式（在编辑器初始化配置中将其设置为 `true`）。每次用户点击**保存**时，都会触发 forcesave，回调处理程序请求中的 `forcesavetype` 参数值为 `1`。

- 通过[自动组装](../../configuration/server-config/auto-assembly)服务器配置启用自动重复强制保存。回调处理程序请求中的 `forcesavetype` 参数值为 `2`。

  :::info
  自动组装功能会保存文件在该时刻的当前状态。如果用户处于严格模式且未点击**保存**，则其更改不会包含在组装的文件中。在 PDF 格式中，严格模式默认启用。
  :::

:::note
通过强制保存创建的文档版本不会出现在文档历史记录中。ONLYOFFICE 文档[突出显示](./document-history.md#how-this-can-be-done-in-practice)从当前编辑会话开始所做的更改，而不是从每个文档版本开始的更改。即使在一个会话中创建了多个文档版本，该会话中的所有更改也会被突出显示。
:::

## 以原始格式保存 {#saving-in-original-format}

从 7.0 版本开始，[`assemblyFormatAsOrigin`](../../configuration/server-config/server#servicescoauthoringserverassemblyformatasorigin) 服务器设置默认启用，以便将组装好的文件保存为其原始格式。这用于将 OOXML 转换为 ODF 或保留包含宏的文件。

此参数的工作原理如下：

1. **文档编辑服务**以原生格式之一返回文件：`.docx`、`.xlsx`、`.pptx` 或 `.pdf`。
2. 如果 `assemblyFormatAsOrigin` 为 `true`，**文档编辑服务**会尝试将文件转换回原始格式。
3. 如果原始格式是旧版格式（例如 `.doc`）且转换失败，**文档编辑服务**会显示*回滚以保存对 ooxml 的更改*警告，并保持文件为原生格式。
4. 如果 `assemblyFormatAsOrigin` 为 `false`，**文档编辑服务**不会转换文件并以原生格式返回。

:::warning
此设置可能会破坏未经事先转换就打开文档的集成（例如 `.doc` 格式，该格式无法在 ONLYOFFICE 文档中保存）。如有必要，请禁用此设置。
:::
