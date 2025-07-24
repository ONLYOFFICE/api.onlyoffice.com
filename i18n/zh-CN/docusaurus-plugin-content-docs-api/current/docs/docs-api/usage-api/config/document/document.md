# 文档

文档部分允许更改与文档有关的所有参数（标题、url、文件类型等）。

## fileType

`类型: string`

定义查看或编辑的源文档的文件类型。必须是小写。以下文件类型可用： *.csv、.djvu、.doc、.docm、.docx、.docxf、.dot、.dotm、.dotx、.epub、.fb2、.fodp、.fods、.fodt、.htm、.html、.key、.mht、.numbers、.odp、.ods、.odt、.oform、.otp、.ots、.ott、.oxps、.pages、.pdf、.pot、.potm、.potx、.pps、.ppsm、.ppsx、.ppt、.pptm、.pptx、.rtf、.txt、<!-- .vsdm、.vsdx、.vssm、.vssx、.vstm、.vstx、--> .xls、.xlsb、.xlsm、.xlsx、.xlt、.xltm、.xltx、.xml、.xps*.

**示例**: `"docx"`

## isForm

`类型: true`

定义该 PDF 文件是 PDF 表单还是标准 PDF 文件。默认值为 **true**。

如果未指定此参数，则会启动[对 PDF 文件的内部检查](../../../get-started/how-it-works/checking-pdf-forms.md)。

**示例**: `true`

## key

`类型: string` | **此参数是必需的**

定义服务用来识别文档的唯一文档标识符。如果发送了已知key，则将从缓存中获取文档。每次编辑和保存文档时，都必须重新生成key。文档 url 可以用作 **key**，但不能使用特殊字符，长度限制为 128 个符号。

:::请注意，
对于连接到同一文档服务器的所有独立服务，密钥必须是唯一的。否则，服务可能会从编辑器缓存中打开其他人的文件。如果多个第三方集成商连接到同一文档服务器，他们也必须提供唯一的密钥。

可以使用的关键字符： **0-9**, **a-z**, **A-Z**, **-.\_=**。 最大密钥长度为 **128** 个字符。
:::

**示例**: `"Khirz6zTPdfd7"`

## referenceData

`类型: object`

定义一个由集成商生成的对象，用于唯一标识其系统中的文件：

**示例**:

``` json
{
  "fileKey": "BCFA2CED",
  "instanceId": "https://example.com"
}
```

### referenceData.fileKey
    
`类型: string`

服务用来获取文件链接的唯一文档标识符。在编辑和保存文档时不得更改（即它不等于 [document.key](#key) 参数）。

**示例**: `"BCFA2CED"`

### referenceData.instanceId

`类型: string`

唯一的系统标识符。如果数据从一个系统上的文件复制并插入到另一个系统的文件中，则通过链接粘贴将不可用，并且上下文菜单中没有相应的按钮。

**示例**: `https://example.com`

## 标语

`类型: string` | **此参数是必需的**

为查看或编辑的文档定义所需的文件名，该文件名也将在下载文档时用作文件名。长度限制为 128 个符号。

**示例**: `"Example Document Title.docx"`

## url

`类型: string` | **此参数是必需的**

定义存储查看或编辑的源文档的绝对 URL。使用本地链接时请务必添加[令牌](../../../get-started/how-it-works/security.md)。否则会出现错误。

**示例**: `https://example.com/url-to-example-document.docx`

## 示例

``` ts
const config = {
  document: {
    fileType: "xlsx",
    isForm: true,
    key: "Khirz6zTPdfd7",
    referenceData: {
      fileKey: "BCFA2CED",
      instanceId: "https://example.com",
    },
    title: "Example Title",
    url: "https://example.com/url-to-example-document.xlsx",
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。有关 ONLYOFFICE 文档服务客户端交互的更多信息，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)部分。
