---
sidebar_position: -20
---

# 协同编辑

以下参考图和步骤解释了在ONLYOFFICE文档中为匿名用户设置名称的过程。

<img alt="Co-editing scheme" src="/assets/images/editor/coedit.jpg" width="720px" />

1. 用户1和用户2在**文档编辑器**中打开同一个文档，也就是说，在打开文件时使用了相同的[document.key](../../usage-api/config/document/document.md#key)。
2. 用户1对打开的文档进行修改。
3. **文档编辑器**将用户1所做的修改发送给**文档编辑服务**。
4. **文档编辑服务**将用户1所做的修改发送给用户2的**文档编辑器**。
5. 现在这些修改对用户2可见。

![共同编辑](/assets/images/editor/coedit-view.png)

## 实际操作方法

1. 创建一个空的*html*文件。

2. 如下所示添加*div*元素。

   ``` html
   <div id="placeholder"></div>
   ```

3. 指定用于您网站的ONLYOFFICE文档链接以及JavaScriptAPI。

   ``` html
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   其中**documentserver**是安装了ONLYOFFICE文档的服务器名称

4. 为*div*元素添加初始化**文档编辑器**的脚本，并配置要打开的文档。使用本地链接时务必添加[令牌](../../additional-api/signature/signature.md)，否则会出现错误。

   ``` ts
   const docEditor = DocsAPI.DocEditor("placeholder", {
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
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

5. 在浏览器中打开您的*html*文件。

6. 现在复制您上面创建的*html*文件。

7. 在复制的*html*文件中更改初始化**文档编辑器**的脚本。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document Title.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     editorConfig: {
       user: {
         id: "F89d8069ba2b",
         name: "Kate Cage",
       },
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJ1c2VyIjp7ImlkIjoiRjg5ZDgwNjliYTJiIiwibmFtZSI6IkthdGUgQ2FnZSJ9fX0.rdmhKLzXwXXVTABioKy3R2-HGMBY5u4pbZ_TVhW2rJs",
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

8. 在浏览器中打开您复制并编辑后的*html*文件。

## 协同编辑中使用密钥

为了打开文档进行编辑，配置初始化时需要[*key*](../../usage-api/config/document/document.md#key)参数，该参数允许用户从编辑器缓存中重新打开文档。密钥是一个长度和字符数量有限的文本字段，由软件集成商生成，并定义了服务用于识别文档的唯一文档标识符。

> 密钥可使用的字符包括：**0-9**，**a-z**，**A-Z**，**-.\_=**。密钥的最大长度为128个字符。

因此，用户在打开文档进行协同编辑时使用相同的密钥非常重要。**文档编辑服务**会识别尝试打开文档的其他用户（或[内联编辑器](./inline-editors.md)的其他标签页/编辑会话）的密钥，如果该密钥与文件的密钥匹配，则允许用户打开文件。如果密钥不同，则会打开一个与其他文件和文件版本无关的新文件。

一旦发送了保存文件的请求（*status*值等于*2*）并且操作成功完成（响应值等于*\{"error":0\}*），则该密钥不能再用于打开文档进行编辑。此时加载编辑器会显示[错误信息](../../more-information/troubleshooting.md#the-file-version-has-been-changed)。不过，如果缓存中存在该文档，则可以使用该密钥从缓存中查看文档。

如果用户在编辑完成前保存文档（*status*值等于*6*），则密钥不能更改，否则协同编辑将停止。请注意，在强制保存操作后，对于刚刚进入当前编辑会话的新用户，密钥也不能更改。

### 示例

1. 添加使用*密钥1*初始化**文档编辑器**的脚本。此时密钥未知，并且指定了打开文件的URL。

   使用本地链接务必添加[令牌](./security.md)，否则会出现错误。

   关闭**文档编辑器**。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50LmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifX0.GcpcY8sLCUDqbgqCLvPs6Z0xfBtayOy-GHEXYiZCpfs",
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

2. 添加使用相同的*密钥1*初始化**文档编辑器**的脚本。由于密钥已知，文档将从编辑器缓存中重新打开，因此不会使用新的URL。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document 2.docx",
       url: "https://example.com/url-to-example-document2.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IDIuZG9jeCIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQyLmRvY3gifX0.aegFVaZpkqc5bEYmF-PQYf3MMFg7QvAfWeOnfDJeuTg",
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

3. 添加使用*密钥2*初始化另一个**文档编辑器**的脚本。此时密钥未知，并且指定了打开文件的URL。即使这个URL与第一种情况中的URL相同，它们也是两个独立的编辑会话。

   关闭**文档编辑器**。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     document: {
       fileType: "docx",
       key: "Mgetl3dYUppf2",
       title: "Example Document.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJNZ2V0bDNkWVVwcGYyIiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50LmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCJ9.5YvlbNVbXFddzKBdz_qPpqgUX_JrUHBWCGRQ5YgVp_w",
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

4. 添加使用*密钥1*初始化另一个**文档编辑器**的脚本。由于密钥已知，文档将从编辑器缓存中重新打开。因为这个密钥与第二种情况中的密钥相同，所以文档将以协同编辑模式打开。

   在不关闭文档的情况下获取当前文档状态。在编辑器初始化的自定义部分中，[强制文件](../../usage-api/config/editor/customization/customization-standard-branding.md#forcesave)参数可让您实现这一点。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
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
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

5. 添加初始化另一个**文档编辑器**的脚本。在成功进行[强制保存](./saving-file.md#force-saving)操作后，当前编辑会话的新用户的密钥不会更改。因此，要进入与第二种和第四种情况中的用户相同的协同编辑会话，必须使用*密钥1*。

   关闭所有使用*密钥1**的三个编辑会话。所有更改都已成功保存。由于文档已保存，必须重新生成密钥。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
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
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

6. 添加初始化**文档编辑器**以查看所创建文档的脚本。可以使用*密钥1*。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
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
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

7. 添加初始化**文档编辑器**以编辑所创建文档的脚本。不能使用*密钥1*，因为在保存文件后该密钥已更改，此时会出现[错误](../../more-information/troubleshooting.md#the-file-version-has-been-changed)。

   关闭**文档编辑器**。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
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
   })
   ```

   其中**example.com**是安装了**文档管理器**和**文档存储服务**的服务器名称。

## 协同编辑模式

有两种实时协作处理文档的模式：**快速**模式和**严格**模式

您可以使用[editorConfig.coEditing](../../usage-api/config/editor/editor.md#coediting)参数来更改协同编辑模式：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    coEditing: {
      mode: "fast",
      change: true,
    },
  },
})
```

### 自动模式

默认使用**自动**模式，它定义了实时协同编辑。所有更改会自动保存，并且无法重做上一次撤销的操作。在这种模式下，当用户编辑文本时，会显示用户的光标以及带有他们名字的工具提示。

![自动模式](/assets/images/editor/fast-mode.png)

### 手动模式

在手动模式下，您需要使用**保存**按钮来同步您和其他用户所做的更改。在您点击此按钮之前，其他用户所做的更改是隐藏的。当多个用户同时编辑一个文档时，编辑过的文本会用不同颜色的虚线标记。

当用户点击**保存**按钮保存更改时，其他用户会收到关于更新的提示。要接受这些更新并保存您自己的更改以便展示给其他用户，请点击顶部工具栏左上角的<img alt="Save updates" src="/assets/images/editor/save-updates.png" width="18px" />按钮，更新的内容将被高亮显示。

![手动](/assets/images/editor/strict-mode.png)
