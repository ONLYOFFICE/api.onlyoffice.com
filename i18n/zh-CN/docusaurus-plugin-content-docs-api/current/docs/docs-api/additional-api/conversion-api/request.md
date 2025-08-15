---
sidebar_position: -4
---

# 请求

 对于与**文档转换服务**的交互，使用 POST 请求。请求参数在请求正文中以 JSON。格式输入请求被发送到`https://documentserver/converter` 其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

> 请注意，在 5.5 版本之前，使用`https://documentserver/ConvertService.ashx`地址发送请求。

从 8.1 版开始，建议将 [shardkey](../../get-started/how-it-works/how-it-works.md#shard-key) 参数添加到 URL *QueryString*，其中包含 *key* 值。例如，*?shardkey=Khirz6zTPdfd7*。这允许您对请求进行负载平衡。

> **ONLYOFFICE 文档**4.2 之前的版本中，使用了 GET 请求,请求参数在 *QueryString* 中。

## 请求参数及其说明

### async

定义转换请求类型：异步与否。

支持的值：

- **true**
- **false**

使用异步请求类型时，响应立即形成。在这种情况下，要获得结果，必须在转换完成之前发送不更改参数的请求。默认值为 **false**。

类型: boolean

是否必填：非必填

> 如果是同步转换，文件转换时间比较长，可能会出现web请求超时错误。虽然最终可以完成转换，但只有用相同的key再次发送请求才能得到结果。

### codePage

定义从 *csv* 或 *txt* 格式转换时的文件编码。

  主要支持的值：

- **932** - 日语 (Shift-JIS);
- **950** -  繁体中文 (Big5);
- **1250** - 中欧 (Windows);
- **1251** - 西里尔字母 (Windows);
- **65001** - Unicode (UTF-8).

 您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的值。

类型: integer

是否必填：非必填

### 分隔符

定义从 *csv* 格式转换时用于分隔值的定界符。

支持的值：

- **0** - 没有定界符;
- **1** - 制表符;
- **2** - 分号;
- **3** - 冒号;
- **4** - 逗号;
- **5** - 空格。

类型: integer

是否必填：非必填

### documentLayout

定义文档布局，该布局指定参数，用于说明将表单打印为 *pdf* 文档还是图像。

类型: object

是否必填：非必填

#### documentLayout.drawPlaceHolders

定义是否将绘制占位符。

类型: boolean

是否必填：非必填

#### documentLayout.drawFormHighlight

定义表单是否突出显示。

类型: boolean

是否必填：非必填

#### documentLayout.isPrint

定义打印模式是打开还是关闭。此参数仅用于将 *docx/docxf* 转换为 *pdf*。如果此参数等于 **true**，则使用 *drawPlaceHolders* 和 *drawFormHighlight* 标志，如上所述。如果此参数为 **false**，则 *drawFormHighlight* 标志不起作用，并且 *drawPlaceHolders* 参数允许将表单保存为 *pdf* 格式。默认值为 **false**。

类型: boolean

是否必填：非必填

### documentRenderer

定义从 *pdf*, *xps*, *oxps* 转换时的文档渲染器。

类型: object

是否必填：非必填

#### documentRenderer.textAssociation

定义可以具有以下值的渲染模式：

- **blockChar** - 所有文本都由单个字符转换。每个字符都在自己的框中（如文本框），
- **blockLine** - 所有文本都由单独的行转换。每个文本行都在自己的框中。行可以在同一个块内组合，
- **plainLine** - 所有文本都转换为纯文本。但每一行都是一个单独的段落，
- **plainParagraph** - 所有文本都转换为纯文本。行被组合成段落。

默认值为 **plainLine**。

类型: string

是否必填：非必填

### filetype

定义要转换的文档文件的类型。

> 下表列出了文档转换为常见文件格式的可能性，其中**输入格式**列对应于**filetype**参数值，**输出格式**列对应于**outputtype**参数值。

类型: string

是否必填: 必填

### key

定义文档标识符,用于明确标识文档文件。

类型: string

是否必填: 必填

### outputtype

定义生成的转换文档类型。从 7.0 版开始，可以指定文件格式而不是扩展名。当我们事先不知道需要什么扩展时使用它们：

- **ooxml** - 定义文件将被转换为 *docx*, *docm*, *xlsx*, *xlsm*, *pptx* 或 *pptm*。例如，将 *doc* 文件转换为 OOXML 格式时，如果该文件包含宏，则生成的文件可以是 *docx* 或 *docm*（*xls* 和 *ppt* 也一样）。它也适用于将 XML 文件转换为 OOXML 格式（*docx*，*xlsx* 或 *pptx*，具体取决于内容）；
- **odf** - 定义文件将被转换为 *odt*, *ods* 或 *odp*。例如，它用于将 XML 文件转换为 ODF 格式（*odt*, *ods* 或 *odp*，具体取决于内容）。

> 下表展示了文档转换为各种知名格式的可能性，其中**输入格式**列对应于**filetype**参数值，**输出格式**列对应于**outputtype**参数值。

类型: string

是否必填: 必填

### 密码

如果文件有密码保护，则定义文件的密码。转换后的文件没有密码。

类型: string

是否必填：非必填

### pdf

定义将文档文件转换为 pdf 的设置。

类型: object

是否必填：非必填

#### pdf.form

定义文档是否转换为 *pdf* 格式 (**true**) 或常规 *pdf* 文件 (**false**)。如果省略此参数，则不会更改文档内容。如果文档包含字段，则它们将保留在转换后的文档中。如果没有，则转换后的文档也不会包含它们。例如，在将 *docxf*。和 *oform* 格式转换为 *pdf* 时无需指定此参数。它们将始终转换为 *pdf* 格式。

类型: boolean

是否必填：非必填

### region

定义从*电子表格*格式转换为 *pdf*时货币、日期和时间的默认显示格式。使用四个字母（**en-US**、**fr-FR**等）语言代码设置。默认值为 **en-US**。

类型: string

是否必填：非必填

### spreadsheetLayout

定义将电子表格转换为 pdf 的设置。

> 请注意，将电子表格转换为pdf或图像格式后，一次可以返回的最大页数不超过1500。

类型: object

是否必填：非必填

#### spreadsheetLayout.fitToHeight

设置转换区域的高度，以页数为单位。默认值为0。默认值为 **0**。

类型: integer

是否必填：非必填

#### spreadsheetLayout.fitToWidth

设置转换区域的宽度，以页数为单位。默认值为0。默认值为 **0**。

类型: integer

是否必填：非必填

#### spreadsheetLayout.gridLines

允许在输出 PDF 文件中包含或不包含网格线。默认值为 **false**。

类型: boolean

是否必填：非必填

#### spreadsheetLayout.headings

允许在输出 PDF 文件中包含或不包含标题。默认值为 **false**。

类型: boolean

是否必填：非必填

#### spreadsheetLayout.ignorePrintArea

确定是否忽略为电子表格文件选择的打印区域。默认值为 **true**。

类型: boolean

是否必填：非必填

#### spreadsheetLayout.margins

设置输出 PDF 文件的边距。

类型: object

是否必填：非必填

#### spreadsheetLayout.margins.bottom

设置输出 PDF 文件的下边距。默认值为19.1mm。默认值为 **19.1mm**。

类型: string

是否必填：非必填

#### spreadsheetLayout.margins.left

设置输出 PDF 文件的左边距。默认值为 **17.8mm**。

类型: string

是否必填：非必填

#### spreadsheetLayout.margins.right

设置输出 PDF 文件的右边距。默认值为 **17.8mm**。

类型: string

是否必填：非必填

#### spreadsheetLayout.margins.top

设置输出 PDF 文件的上边距。默认值为 **19.1mm**。

类型: string

是否必填：非必填

#### spreadsheetLayout.orientation

设置输出 PDF 文件的方向。可以是**横向打印格式**，也可以是**纵向打印格式**。默认值为**纵向打印格式**。

类型: string

是否必填：非必填

#### spreadsheetLayout.pageSize

设置输出 PDF 文件的页面大小。

类型: object

是否必填：非必填

#### spreadsheetLayout.pageSize.height

设置输出 PDF 文件的页面高度。默认值为 **297mm**。

类型: string

是否必填：非必填

#### spreadsheetLayout.pageSize.width

设置输出 PDF 文件的页面宽度。默认值为 **210mm**。

类型: string

是否必填：非必填

#### spreadsheetLayout.scale

允许设置输出 PDF 文件的缩放比例。默认值为 **100**。

类型: integer

是否必填：非必填

### thumbnail

在将图像格式（*bmp*, *gif*, *jpg*, *png*）指定为 **outputtype**时，定义缩略图的设置。

类型: object

是否必填：非必填

#### thumbnail.aspect

定义使图像适合指定的高度和宽度的模式。支持的值：

- **0** - 拉伸文件以适应高度和宽度，
- **1** - 保持图像的外观，
- **2** - 在这种情况下，不使用宽度和高度设置。取而代之的是，页面的米制尺寸被转换为 96dpi 的像素。例如，A4 (210x297mm) 页面将变成尺寸为 794x1123pix 的图片。

默认值为 **2**。

类型: integer

是否必填: 非必填的

#### thumbnail.first

定义是否应仅为首页或所有文档页面生成缩略图。如果为 false，将创建包含所有页面缩略图的zip存档。默认值为 **false**。

类型: boolean

是否必填：非必填

#### thumbnail.height

以像素为单位定义缩略图高度。默认值为 **100**。

类型: integer

是否必填：非必填

#### thumbnail.width

以像素为单位定义缩略图宽度。默认值为 **100**。

类型: integer

是否必填：非必填

### title

定义转换后的文件名。

类型: string

是否必填：非必填

### 令牌

以[令牌](../signature/request/token-in-body.md#request-to-convert-the-document)的形式定义添加到 **ONLYOFFICE 文档** 配置的加密签名。

类型: string

是否必填: 配置要求

### url

定义要转换的文档的绝对 URL。使用本地链接时请务必添加[令牌](../../get-started/how-it-works/security.md)。否则会出现错误。

类型: string

是否必填: 必填

### watermark

定义一个 JSON 对象，其中包含水印的在转换过程中将其插入到 pdf 和图像文件中。

类型: object

是否必填：非必填

#### watermark.transparent

定义水印透明度

类型: float

是否必填：非必填

#### watermark.type

定义指定当前水印的预设形状几何形状。

类型: string

是否必填：非必填

#### watermark.width

定义以毫米为单位测量的水印宽度。

类型: integer

是否必填：非必填

#### watermark.height

定义以毫米为单位测量的水印高度。

类型: integer

是否必填：非必填

#### watermark.rotate

定义水印旋转角度（以度为单位）。

类型: integer

是否必填：非必填

#### watermark.margins

定义水印形状中的文本边距（以毫米为单位）。

类型: array of integers

是否必填：非必填

#### watermark.fill

以 RGB 格式定义水印填充颜色，或图像的 URL（base64 支持：*data:image/png;...*）。空数组[]表示水印没有填充。

类型: array of integers \| string

是否必填：非必填

#### watermark.stroke-width

定义以毫米为单位测量的水印描边宽度。

类型: integer

是否必填：非必填

#### watermark.stroke

以 RGB 格式定义水印描边颜色。空数组[]表示水印笔划没有填充。

类型: array of integers

是否必填：非必填

#### watermark.align

定义水印形状中的垂直文本对齐方式：**0** - 底部、**1** - 中心、**4** - 顶部。

类型: integer

是否必填：非必填

#### watermark.paragraphs

使用当前水印中的段落及其属性定义数组。

类型: array of objects

是否必填：非必填

#### watermark.paragraphs.align

定义当前段落中的水平文本对齐方式：**0** - 右、**1** - 左、**2** - 居中、**3** - 两端对齐。

类型: integer

是否必填：非必填

#### watermark.paragraphs.fill

以 RGB 格式定义段落突出显示。空数组[]表示该段落不突出显示。

类型: array of integers

是否必填：非必填

#### watermark.paragraphs.linespacing

定义当前段落中的文本行间距。

类型: integer

是否必填：非必填

#### watermark.paragraphs.runs

定义包含当前段落中的runs及其属性的数组。

类型: array of objects

是否必填：非必填

#### watermark.paragraphs.runs.text

定义run文本。

类型: string

是否必填：非必填

#### watermark.paragraphs.runs.fill

以 RGB 格式定义文本突出显示。 空数组[]表示文本不突出显示。

类型: array of integers

是否必填：非必填

#### watermark.paragraphs.runs.font-family

定义文本字体系列。

类型: string

是否必填：非必填

#### watermark.paragraphs.runs.font-size

定义以磅 (pt) 为单位测量的文本字体大小。

类型: string

是否必填：非必填

#### watermark.paragraphs.runs.bold

定义当前文本是否显示为粗体。

类型: boolean

是否必填：非必填

#### watermark.paragraphs.runs.italic

定义当前文本是否显示为斜体。

类型: boolean

是否必填：非必填

#### watermark.paragraphs.runs.strikeout

定义当前文本是否显示为删除线。

类型: boolean

是否必填：非必填

#### watermark.paragraphs.runs.underline

定义当前文本是否显示下划线。

类型: boolean

是否必填：非必填

## 请求示例

### 发送到**文档转换服务**的 JSON 对象示例，用于将文件从 *docx* 格式转换为 *pdf* 格式

``` json
{
  "async": false,
  "filetype": "docx",
  "key": "Khirz6zTPdfd7",
  "outputtype": "pdf",
  "title": "Example Document Title.docx",
  "url": "https://example.com/url-to-example-document.docx"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)章节。

### 发送到**文档转换服务**的 JSON 对象示例，用于将受密码保护的文件从 *docx* 格式转换为 *pdf* 格式

``` json
{
  "async": false,
  "filetype": "docx",
  "key": "Khirz6zTPdfd7",
  "outputtype": "pdf",
  "password": "123456",
  "title": "Example Document Title.docx",
  "url": "https://example.com/url-to-example-document.docx"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)章节。

### 发送到**文档转换服务**的 JSON 对象示例，用于将文件从 *docx* 格式转换为 *pdf* 格式

``` json
{
  "async": false,
  "filetype": "docx",
  "key": "Khirz6zTPdfd7",
  "outputtype": "pdf",
  "pdf": {
    "form": true
  },
  "title": "Example Document Title.docx",
  "url": "https://example.com/url-to-example-document.docx"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)章节。

### 发送到**文档转换服务**的 JSON 对象示例，用于将文件从 *docx* 格式转换为插入水印的 *pdf* 格式

``` json
{
  "async": false,
  "filetype": "docx",
  "key": "Khirz6zTPdfd7",
  "outputtype": "pdf",
  "title": "Example Document Title.docx",
  "url": "https://example.com/url-to-example-document.docx",
  "watermark": {
    "align": 1,
    "fill": [255, 0, 0],
    "height": 100,
    "margins": [10, 10, 10, 10],
    "paragraphs": [
      {
        "align": 2,
        "fill": [255, 0, 0],
        "linespacing": 1,
        "runs": [
          {
            "bold": true,
            "italic": false,
            "fill": [0, 0, 0],
            "font-family": "Arial",
            "font-size": 40,
            "strikeout": false,
            "text": "Watermark",
            "underline": false
          },
          {
            "text": "<%br%>"
          }
        ]
      }
    ],
    "rotate": -45,
    "transparent": 0.3,
    "type": "rect",
    "stroke-width": 1,
    "stroke": [0, 0, 255],
    "width": 100
  }
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)章节。

### 发送到**文档转换服务**的 JSON 对象示例，用于生成 *docx* 格式的文件 *png* 缩略图

``` json
{
  "filetype": "docx",
  "key": "Khirz6zTPdfd7",
  "outputtype": "png",
  "thumbnail": {
    "aspect": 0,
    "first": true,
    "height": 150,
    "width": 100
  },
  "title": "Example Document Title.docx",
  "url": "https://example.com/url-to-example-document.docx"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)章节。

### 发送到**文档转换服务**的 JSON 对象示例，用于将 *电子表格* 文件转换为 *pdf* 格式

``` json
{
  "filetype": "xlsx",
  "key": "Khirz6zTPdfd7",
  "outputtype": "pdf",
  "region": "en-US",
  "spreadsheetLayout": {
    "ignorePrintArea": true,
    "orientation": "portrait",
    "fitToWidth": 0,
    "fitToHeight": 0,
    "scale": 100,
    "headings": false,
    "gridLines": false,
    "pageSize": {
      "width": "210mm",
      "height": "297mm"
    },
    "margins": {
      "left": "17.8mm",
      "right": "17.8mm",
      "top": "19.1mm",
      "bottom": "19.1mm"
    }
  },
  "title": "Example Document Title.docx",
  "url": "https://example.com/url-to-example-spreadsheet.xlsx"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)章节。

### JSON 对象示例包含发送到**文档转换服务**的 JSON Web Token，用于将文件从 *docx* 格式转换为 *pdf* 格式

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxldHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwib3V0cHV0dHlwZSI6InBkZiIsInRpdGxlIjoiRXhhbXBsZSBEb2N1bWVudCBUaXRsZS5kb2N4IiwidXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.U-YAfuuy7clWjn-xOncfJ-sxVG5DlcYn0AOzJYkoR0M"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)章节。
