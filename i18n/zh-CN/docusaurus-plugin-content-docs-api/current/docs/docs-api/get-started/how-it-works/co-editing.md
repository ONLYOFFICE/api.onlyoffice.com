---
sidebar_position: -20
---

# 协同编辑

以下图示和步骤解释了在ONLYOFFICE 文档中如何协同编辑文档。

![Co-editing scheme](/assets/images/editor/coedit.jpg)

1. **用户1**和**用户2**都在**文档编辑器**中打开同一个文档——即他们的配置包含相同的 [`document.key`](../../usage-api/config/document/document.md#key)。
2. **用户1**对打开的文档进行修改。
3. **文档编辑器**将**用户1**所做的修改发送给**文档编辑服务**。
4. **文档编辑服务**将**用户1**所做的修改发送给**用户2**的**文档编辑器**。
5. 现在这些修改对**用户2**可见。

![共同编辑](/assets/images/editor/coedit-view.png)

## 实际操作方法

1. 创建一个空的 `.html` 文件。

2. 如下所示添加 `<div>` 元素：

   ``` html
   <div id="placeholder"></div>
   ```

3. 在页面上引入 ONLYOFFICE 文档 JavaScript API 脚本：

   ``` html
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   其中 `documentserver` 是安装了 ONLYOFFICE 文档的服务器名称。`api.js` 脚本由**文档编辑服务**提供；它加载**文档编辑器**并将其连接到该服务。

   :::tip
   还没有文档服务器？[注册](https://www.onlyoffice.com/zh/docs-registration.aspx?from=api)免费的 ONLYOFFICE 文档云，并使用实例的公共 IP 地址或公共 DNS 名称作为 `documentserver`。您可以在云控制台的**实例**部分找到它们。
   :::

4. 添加初始化**文档编辑器**的脚本，配置要打开的文档：

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
       user: {
         id: "78e1e841",
         name: "John Smith",
       },
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJ1c2VyIjp7ImlkIjoiNzhlMWU4NDEiLCJuYW1lIjoiSm9obiBTbWl0aCJ9fX0.6AcBUCbys9kQ7S982Qm4w1romVg86kZ4ECNsxDff5zU",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   将 `example.com` 替换为提供文档文件的主机，即您的**文档存储服务**。在这个最小示例中，本地 `.html` 文件充当**文档管理器**的角色——在实际集成中，管理器会为每个用户和文档动态构建此配置。如需快速测试，可以使用 `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 作为 `url`。

   :::caution
   当文档服务器启用 JWT 验证（默认配置）时，`config` 必须使用匹配的 [`token`](./security.md) 进行签名。上面的 `token` 与此确切配置匹配，但使用的是临时密钥签名——它不会在您的服务器上通过验证，并且在配置更改时（例如，将 `url` 切换为演示文档）必须重新生成。请使用您的文档服务器的 JWT 密钥进行签名。令牌不会绕过网络限制：如果 `url` 指向本地或私有地址，文档服务器仍然必须能够访问它。
   :::

5. 在浏览器中打开您的 `.html` 文件。

6. 在第二个浏览器标签页中打开同一个 `.html` 文件。由于两个标签页使用相同的文档 `key`，**文档编辑服务**会将它们连接到同一个协同编辑会话——您现在正在与自己进行协同编辑。

## 协同编辑中使用密钥

要打开文档进行编辑，编辑器配置需要 [`key`](../../usage-api/config/document/document.md#key) 参数——由集成商生成的唯一文档标识符。**文档编辑服务**使用此密钥来识别文档。`key` 是一个长度有限的文本字段。

:::note
密钥可包含的字符为 `0-9`、`a-z`、`A-Z`、`-._=`。密钥的最大长度为 **128** 个字符。
:::

要使协同编辑生效，所有用户必须使用相同的 `key` 打开文档。当用户（或[内联编辑器](./inline-editors.md)的其他标签页/编辑会话）打开文档时，**文档编辑服务**会检查该 `key` 是否与现有的编辑会话匹配。如果匹配，用户将加入该会话。如果不匹配，则会启动一个新的独立编辑会话——与其他会话或文件版本无关。

一旦发送了保存请求（`status` 等于 `2`）并且操作成功完成（响应为 `{"error":0}`），则该密钥不能再用于打开文档进行编辑——尝试这样做将加载[错误信息](../../more-information/troubleshooting.md#the-file-version-has-been-changed)。不过，在缓存版本未过期的情况下，仍可以使用该密钥从缓存中查看文档。

如果用户在编辑仍在进行时强制保存文档（`status` 等于 `6`），则密钥不能更改——否则协同编辑将停止。在 forcesave 之后，对于加入当前编辑会话的新用户，密钥也不能更改。

### 示例

:::note
在以下所有示例中，请将 `example.com` 替换为提供文档文件的主机，即您的**文档存储服务**。如需快速测试，可以使用 `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 作为 `url`。
:::

1. 添加使用 **key 1** 初始化**文档编辑器**的脚本。该密钥尚未被服务缓存，因此将使用 URL 下载文件。

   关闭**文档编辑器**。

   :::caution
   当启用 JWT 验证（默认配置）时，`config` 必须包含匹配的 [`token`](./security.md)。
   :::

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50LmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifX0.GcpcY8sLCUDqbgqCLvPs6Z0xfBtayOy-GHEXYiZCpfs",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

2. 添加使用相同的 **key 1** 初始化**文档编辑器**的脚本。该密钥已被缓存，因此新的 URL 将被忽略，文档将从缓存中重新打开。

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document 2.docx",
       url: "https://example.com/url-to-example-document2.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IDIuZG9jeCIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQyLmRvY3gifX0.aegFVaZpkqc5bEYmF-PQYf3MMFg7QvAfWeOnfDJeuTg",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. 添加使用 **key 2** 初始化另一个**文档编辑器**的脚本。该密钥尚未被缓存，因此将使用 URL 下载文件。即使这个 URL 与示例 1 中的 URL 相同，不同的密钥意味着两个独立的编辑会话。

   关闭**文档编辑器**。

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Mgetl3dYUppf2",
       title: "Example Document.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJNZ2V0bDNkWVVwcGYyIiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50LmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCJ9.5YvlbNVbXFddzKBdz_qPpqgUX_JrUHBWCGRQ5YgVp_w",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

4. 添加使用 **key 1** 初始化另一个**文档编辑器**的脚本。该密钥已被缓存，因此文档将从缓存中重新打开。因为该密钥与示例 2 匹配，所以文档将以协同编辑模式打开。

   在不关闭文档的情况下获取当前文档状态。在编辑器初始化的自定义部分中，[forcesave](../../usage-api/config/editor/customization/customization-standard-branding.md#forcesave) 参数可让您实现这一点。

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     editorConfig: {
       customization: {
         forcesave: true,
       },
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50LmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJjdXN0b21pemF0aW9uIjp7ImZvcmNlc2F2ZSI6dHJ1ZX19fQ.dlIJqq6tH9ncQmXQV-gCi4Zc7sqYhGS5RwvpiIZGZXA",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

5. 添加初始化另一个**文档编辑器**的脚本。成功进行 [forcesave](./saving-file.md#force-saving) 后，加入当前编辑会话的新用户的密钥不会更改。因此，要加入与示例 2 和示例 4 中用户相同的协同编辑会话，必须使用 **key 1**。

   关闭所有使用 **key 1** 的三个编辑会话。所有更改都已成功保存。由于文档已保存，集成商必须生成新的密钥。

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     editorConfig: {
       callbackUrl: "https://example.com/url-to-callback.ashx",
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50LmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWNhbGxiYWNrLmFzaHgifX0.L53bCRlJyvIf-C7bcKYM2WMfmk4FeZIoeDaEpc5IxXA",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

6. 添加初始化**文档编辑器**以查看已保存文档的脚本。旧的 **key 1** 仍可用于查看。

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     editorConfig: {
       mode: "view",
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50LmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJtb2RlIjoidmlldyJ9fQ.wpEk-zrrGq5hKHCm6sAhl_tb51n56th-q-K52Oeq1a4",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

7. 添加初始化**文档编辑器**以编辑已保存文档的脚本。**Key 1** 不能再用于编辑——服务会返回[错误](../../more-information/troubleshooting.md#the-file-version-has-been-changed)，因为文档已使用该密钥保存过。

   关闭**文档编辑器**。

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     editorConfig: {
       mode: "edit",
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50LmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJtb2RlIjoiZWRpdCJ9fQ.rSc0yYe3_2u7N_uaxZcDQ6vC_d5ZWU5LFkkGSow5UDY",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

## 协同编辑模式 {#co-editing-modes}

有两种实时协作处理文档的模式——**快速**模式和**严格**模式。

您可以使用 [editorConfig.coEditing](../../usage-api/config/editor/editor.md#coediting) 参数来更改协同编辑模式：

``` ts
const config = {
  editorConfig: {
    coEditing: {
      mode: "fast",
      change: true,
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

### 快速模式

**快速**模式为默认模式。所有更改会实时发送给其他用户——您可以在他们编辑文档时看到他们的光标和名称提示。更改会自动保存，且不支持重做操作。

![快速模式](/assets/images/editor/fast-mode.png)

### 严格模式

在**严格**模式下，每个用户在独立的会话中工作。其他用户的更改在您点击**保存**之前保持隐藏。当多个用户同时编辑时，他们的编辑区域会用不同颜色的虚线标记。

点击**保存**后，其他用户会收到更新通知。要接受更新并发送您自己的更改，请点击工具栏左上角的 <img alt="Save updates" src="/assets/images/editor/save-updates.png" width="18px" /> 按钮。接受的更新将被高亮显示。

![严格模式](/assets/images/editor/strict-mode.png)
