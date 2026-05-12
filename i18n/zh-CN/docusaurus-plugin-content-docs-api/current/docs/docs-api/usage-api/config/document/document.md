# 文档

文档部分定义了文档参数。

## fileType

**类型：** `string`

定义查看或编辑的源文档的文件类型。必须是小写。可用值取决于 [documentType](../config.md#documenttype)：

- `doc`, `docm`, `docx`, `dot`, `dotm`, `dotx`, `epub`, `fb2`, `fodt`, `hml`, `htm`, `html`, `hwp`, `hwpx`, `md`, `mht`, `mhtml`, `odt`, `ott`, `pages`, `rtf`, `stw`, `sxw`, `txt`, `wps`, `wpt`, `xml` — 用于文本文档;
- `csv`, `et`, `ett`, `fods`, `numbers`, `ods`, `ots`, `sxc`, `xls`, `xlsb`, `xlsm`, `xlsx`, `xlt`, `xltm`, `xltx`, `xml` — 用于电子表格;
- `dps`, `dpt`, `fodp`, `key`, `odg`, `odp`, `otp`, `pot`, `potm`, `potx`, `pps`, `ppsm`, `ppsx`, `ppt`, `pptm`, `pptx`, `sxi` — 用于演示文稿;
- `djvu`, `oxps`, `pdf`, `xps` — 用于可移植文档格式;
- `vsdm`, `vsdx`, `vssm`, `vssx`, `vstm`, `vstx` — 用于图表文档.

:::info
如果省略，文件类型将根据 [`documentType`](../config.md#documenttype) 值自动推断。如果同时省略 `fileType` 和 `documentType`，将会出现错误。
:::

**示例**: `"docx"`

## isForm

**类型：** `boolean`

定义该 PDF 文件是 PDF 表单还是标准 PDF 文件。当 `fileType` 为 `pdf` 时适用。如果未指定此参数，则会启动[对 PDF 文件的内部检查](../../../get-started/how-it-works/checking-pdf-forms.md)。

**示例**: `true`

## key

**类型：** `string` | **此参数是必需的**

定义服务用来识别文档的唯一文档标识符。如果发送了已知key，则将从缓存中获取文档。每次编辑和保存文档时，都必须重新生成key。

:::note
对于连接到同一文档服务器的所有独立服务，密钥必须是唯一的。否则，服务可能会从编辑器缓存中打开其他人的文件。如果多个第三方集成商连接到同一文档服务器，他们也必须提供唯一的密钥。

可以使用的关键字符：`0-9`、`a-z`、`A-Z`、`-.\_=`。最大密钥长度为 **128** 个字符。
:::

**示例**: `"Khirz6zTPdfd7"`

## referenceData

**类型：** `object`

定义一个由集成商生成的对象，用于唯一标识其系统中的文件。

**示例**:

``` json
{
  "fileKey": "BCFA2CED",
  "instanceId": "https://example.com"
}
```

### referenceData.fileKey
    
**类型：** `string`

服务用来获取文件链接的唯一文档标识符。在编辑和保存文档时不得更改（即它不等于 [document.key](#key) 参数）。

**示例**: `"BCFA2CED"`

### referenceData.instanceId

**类型：** `string`

唯一的系统标识符。如果数据从一个系统上的文件复制并插入到另一个系统的文件中，则通过链接粘贴将不可用，并且上下文菜单中没有相应的按钮。

**示例**: `"https://example.com"`

## title

**类型：** `string`

为查看或编辑的文档定义所需的文件名，该文件名也将在下载文档时用作文件名。长度限制为 128 个字符。如果未指定或为空，则默认为 `"Unnamed.{fileType}"`（例如 `"Unnamed.docx"`）。

**示例**: `"Example Document Title.docx"`

## url

**类型：** `string` | **此参数是必需的**

定义存储查看或编辑的源文档的绝对 URL。使用本地链接时请务必添加[令牌](../../../get-started/how-it-works/security.md)。否则会出现错误。

**示例**: `"https://example.com/url-to-example-document.docx"`

## info

**类型：** `object`

文档信息部分。有关可用参数，请参阅 [info](info.md) 页面。

## permissions

**类型：** `object`

文档权限部分。有关可用参数，请参阅 [permissions](permissions.md) 页面。

## 示例

``` ts
const config = {
  // ...
  document: {
    fileType: "pdf",
    isForm: true,
    key: "Khirz6zTPdfd7",
    referenceData: {
      fileKey: "BCFA2CED",
      instanceId: "https://example.com",
    },
    title: "Example Title.pdf",
    url: "https://example.com/url-to-example-document.pdf",
    info: {
      // ...
    },
    permissions: {
      // ...
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

