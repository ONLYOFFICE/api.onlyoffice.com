# 文档

文档部分定义了文档参数。

## fileType

**类型**：`string`

查看或编辑的源文档的文件类型。必须是小写。可用值取决于 [documentType](../config.md#documenttype)：

- `doc`, `docm`, `docx`, `dot`, `dotm`, `dotx`, `epub`, `fb2`, `fodt`, `hml`, `htm`, `html`, `hwp`, `hwpx`, `md`, `mht`, `mhtml`, `odt`, `ott`, `pages`, `rtf`, `stw`, `sxw`, `txt`, `wps`, `wpt`, `xml`：用于文本文档；
- `csv`, `et`, `ett`, `fods`, `numbers`, `ods`, `ots`, `sxc`, `xls`, `xlsb`, `xlsm`, `xlsx`, `xlt`, `xltm`, `xltx`, `xml`：用于电子表格；
- `dps`, `dpt`, `fodp`, `key`, `odg`, `odp`, `otp`, `pot`, `potm`, `potx`, `pps`, `ppsm`, `ppsx`, `ppt`, `pptm`, `pptx`, `sxi`：用于演示文稿；
- `djvu`, `ofd`, `oxps`, `pdf`, `xps`：用于可移植文档格式；
- `vsdm`, `vsdx`, `vssm`, `vssx`, `vstm`, `vstx`：用于图表文档。

:::info
如果省略，文件类型将根据 [`documentType`](../config.md#documenttype) 值自动推断。如果同时省略 `fileType` 和 `documentType`，将会出现错误。
:::

**示例**：`"docx"`

## isForm

**类型**：`boolean`

是否将 PDF 文件作为表单打开。当 `fileType` 为 `pdf` 时适用。如果未指定此参数，则会启动[对 PDF 文件的内部检查](../../../get-started/how-it-works/checking-pdf-forms.md)。

**示例**：`true`

## key

**类型**：`string` | **此参数是必需的**

服务用来识别文档的唯一文档标识符。如果发送了已知 `key`，则将从缓存中获取文档。每次编辑和保存文档时，都必须重新生成 `key`。

:::note
对于连接到同一文档服务器的所有独立服务，`key` 必须是唯一的。否则，服务可能会从编辑器缓存中打开其他人的文件。如果多个第三方集成商连接到同一文档服务器，他们也必须提供唯一的 `key`。

`key` 中可以使用的字符：`0-9`、`a-z`、`A-Z`、`-.\_=`。`key` 的最大长度为 **128** 个字符。
:::

**示例**：`"Khirz6zTPdfd7"`

## options

**类型**：`object`

打开文档时使用的附加选项。

### options.watermark

**类型**：`object` | `string`

在编辑器中打开文档时，绘制在文档每一页上的水印。该值为一个对象，或包含该对象 JSON 的字符串。该对象包含[水印属性](../../../../plugins/interacting-with-editors/document-api/Enumeration/watermark_on_draw.md)。转换请求的 [`watermark`](../../../additional-api/conversion-api/request.md#watermark) 参数接受相同的对象。`transparent` 属性设置水印的不透明度：`0` 为不可见，`1` 为完全不透明。默认值为 `0.3`。

`%user_name%` 占位符会被替换为打开文档的用户的名称，因此每个用户看到的都是自己的名称。占位符在对象中的任何位置都会被替换，而不仅限于 run 文本。名称在插入时不会转义，因此如果名称包含 `"` 或 `\`，对象将无法解析，水印也不会显示。

当用户将文档下载为 PDF 或图像时，水印会添加到下载的文件中。以其他格式下载时不包含水印，水印也不会保存到文档本身。

:::warning
水印由浏览器中的编辑器绘制。用户可以使用浏览器开发者工具将其移除，因此请勿使用它来限制对文档的访问。为防止用户获取不带水印的文档，还应在文档权限中将 [`download`](permissions.md#download)、[`print`](permissions.md#print) 和 [`copy`](permissions.md#copy) 设置为 `false`。要在服务器上将水印插入文件，请[转换带水印的文档](../../../additional-api/conversion-api/request.md#将-docx-转换为带水印的-pdf)。
:::

**示例**：

```json
{
  "type": "rect",
  "width": 150,
  "height": 50,
  "rotate": -45,
  "transparent": 0.3,
  "fill": [],
  "stroke": [],
  "align": 1,
  "paragraphs": [
    {
      "align": 2,
      "runs": [
        {
          "text": "Confidential: %user_name%",
          "fill": [128, 128, 128],
          "font-family": "Arial",
          "font-size": 24,
          "bold": true
        }
      ]
    }
  ]
}
```

## referenceData

**类型**：`object`

由集成商生成的对象，用于唯一标识其系统中的文件。

**示例**：

```json
{
  "fileKey": "BCFA2CED",
  "instanceId": "https://example.com"
}
```

### referenceData.fileKey
    
**类型**：`string`

服务用来获取文件链接的唯一文档标识符。在编辑和保存文档时不得更改（即它不等于 [document.key](#key) 参数）。

**示例**：`"BCFA2CED"`

### referenceData.instanceId

**类型**：`string`

唯一的系统标识符。如果数据从一个系统上的文件复制并插入到另一个系统的文件中，则通过链接粘贴将不可用，并且上下文菜单中没有相应的按钮。

**示例**：`"https://example.com"`

## title

**类型**：`string`

查看或编辑的文档所需的文件名，该文件名也将在下载文档时用作文件名。长度限制为 128 个字符。如果未指定或为空，则默认为 `"Unnamed.{fileType}"`（例如 `"Unnamed.docx"`）。

**示例**：`"Example Document Title.docx"`

## url

**类型**：`string` | **此参数是必需的**

存储查看或编辑的源文档的绝对 URL。使用本地链接时请务必添加[令牌](../../../get-started/how-it-works/security.md)。否则会出现错误。

**示例**：`"https://example.com/url-to-example-document.docx"`

## info

**类型**：`object`

[info](info.md) 部分定义文档信息参数。

## permissions

**类型**：`object`

[permissions](permissions.md) 部分定义文档权限参数。

## 示例

```ts
const config = {
  // ...
  document: {
    fileType: "pdf",
    isForm: true,
    key: "Khirz6zTPdfd7",
    options: {
      watermark: {
        // ...
      },
    },
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

