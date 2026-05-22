---
sidebar_position: -5
---

# 将表单嵌入网页

ONLYOFFICE 文档支持 PDF 表单——带有可填写字段（如文本输入框、复选框和下拉列表）的 PDF 文件。PDF 表单有两种使用模式：

- **编辑** — 设计表单模板：添加、删除和配置表单字段。需要将 [`permissions.edit`](../../usage-api/config/document/permissions.md#edit) 设置为 `true`。
- **填写** — 在已完成的表单中输入数据。需要将 [`permissions.fillForms`](../../usage-api/config/document/permissions.md#fillforms) 设置为 `true`，并将 [`permissions.edit`](../../usage-api/config/document/permissions.md#edit) 设置为 `false`。

:::note
PDF 表单从 7.0 版本起可用。从 8.0 版本开始，OFORM 格式已被弃用——仅使用 PDF 格式进行填写。从 8.1 版本开始，DOCXF 格式已被弃用——仅使用 PDF 格式创建和编辑表单。
:::

:::caution
当您的文档服务器启用了 JWT 验证（默认配置）时，每个 `config` 必须使用匹配的 [`token`](./security.md) 进行签名。请使用您的文档服务器的 JWT 密钥进行签名。有关设置说明和代码示例，请参阅[签名](../../additional-api/signature/signature.md)部分。
:::

在以下 HTML 示例中，请将 `documentserver` 替换为安装 ONLYOFFICE 文档的服务器地址。

## 编辑表单

若要打开 PDF 表单进行编辑，请将 `documentType` 设置为 `"pdf"`，并将 `permissions.edit` 设置为 `true`。提供 [`key`](../../usage-api/config/document/document.md#key) 以便多个用户可以同时协同编辑表单模板：

``` ts
const config = {
  document: {
    fileType: "pdf",
    key: "form-template-key",
    permissions: {
      edit: true,
    },
    title: "Form Template.pdf",
    url: "https://example.com/url-to-example-form.pdf",
  },
  documentType: "pdf",
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

完整的 HTML 页面：

``` html
<script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
<button onclick="openFormTemplate()">Open Form Template</button>
<div id="placeholder"></div>
<script>
    let docEditor;

    function openFormTemplate() {
        if (docEditor) {
            docEditor.destroyEditor();
        }

        const config = {
            "document": {
                "fileType": "pdf",
                "key": "form-template-key",
                "permissions": {
                    "edit": true
                },
                "title": "Form Template.pdf",
                "url": "https://example.com/url-to-example-form.pdf"
            },
            "documentType": "pdf"
        };

        docEditor = new DocsAPI.DocEditor("placeholder", config);
    }
</script>
```

编辑完成后，点击**开始填写**按钮切换到填写模式。

![嵌入pdf表单进行编辑](/assets/images/editor/embed-pdf-for-editing.png#gh-light-mode-only)![嵌入pdf表单进行编辑](/assets/images/editor/embed-pdf-for-editing.dark.png#gh-dark-mode-only)

## 填写表单

若要打开 PDF 表单进行填写，请将 `permissions.edit` 设置为 `false`，并将 `permissions.fillForms` 设置为 `true`。省略 [`key`](../../usage-api/config/document/document.md#key) 参数——编辑器将为每个会话生成一个随机密钥，因此每个用户都可以独立填写副本，互不影响：

``` ts
const config = {
  document: {
    fileType: "pdf",
    permissions: {
      edit: false,
      fillForms: true,
    },
    title: "Form.pdf",
    url: "https://example.com/url-to-example-form.pdf",
  },
  documentType: "pdf",
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

完整的 HTML 页面：

``` html
<script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
<button onclick="openForm()">Open Form</button>
<div id="placeholder"></div>
<script>
    let docEditor;

    function openForm() {
        if (docEditor) {
            docEditor.destroyEditor();
        }

        const config = {
            "document": {
                "fileType": "pdf",
                "permissions": {
                    "edit": false,
                    "fillForms": true
                },
                "title": "Form.pdf",
                "url": "https://example.com/url-to-example-form.pdf"
            },
            "documentType": "pdf"
        };

        docEditor = new DocsAPI.DocEditor("placeholder", config);
    }
</script>
```

填写完所有必填字段后，点击**完成并提交**按钮提交数据。

![嵌入pdf表格](/assets/images/editor/embed-pdf.png#gh-light-mode-only)![嵌入pdf表格](/assets/images/editor/embed-pdf.dark.png#gh-dark-mode-only)
