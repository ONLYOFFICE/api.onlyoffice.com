---
sidebar_position: -4
---

# 请求

 对于与**文档转换服务**的交互，使用 POST 请求。请求参数在请求正文中以 JSON。格式输入请求被发送到`https://documentserver/converter` 其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

:::note
请注意，在 5.5 版本之前，使用`https://documentserver/ConvertService.ashx`地址发送请求。
:::

从 8.1 版开始，建议将 [shardkey](../../get-started/configuration/shard-key.md) 参数添加到 URL *QueryString*，其中包含 *key* 值。例如，*?shardkey=Khirz6zTPdfd7*。这允许您对请求进行负载平衡。

:::note
**ONLYOFFICE 文档**4.2 之前的版本中，使用了 GET 请求,请求参数在 *QueryString* 中。
:::

## 请求参数

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter | Type | Presence | Description |
| --------- | ---- | -------- | ----------- |
| async | boolean | optional | 定义转换请求类型：异步与否。支持的值：**true**，**false**。使用异步请求类型时，响应立即形成。在这种情况下，要获得结果，必须在转换完成之前发送不更改参数的请求。默认值为 **false**。 |
| codePage | integer | optional | 定义从 *csv* 或 *txt* 格式转换时的文件编码。主要支持的值：**932** - 日语 (Shift-JIS)，**950** - 繁体中文 (Big5)，**1250** - 中欧 (Windows)，**1251** - 西里尔字母 (Windows)，**65001** - Unicode (UTF-8)。您可以在[此文件](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js)中找到所有支持的值。 |
| delimiter | integer | optional | 定义从 *csv* 格式转换时用于分隔值的定界符。支持的值：**0** - 没有定界符，**1** - 制表符，**2** - 分号，**3** - 冒号，**4** - 逗号，**5** - 空格。 |
| documentLayout | object | optional | 定义文档布局，该布局指定参数，用于说明将表单打印为 *pdf* 文档还是图像。 |
| documentLayout.drawPlaceHolders | boolean | optional | 定义是否将绘制占位符。 |
| documentLayout.drawFormHighlight | boolean | optional | 定义表单是否突出显示。 |
| documentLayout.isPrint | boolean | optional | 定义打印模式是打开还是关闭。此参数仅用于将 *docx* 转换为 *pdf*。如果此参数等于 **true**，则使用 *drawPlaceHolders* 和 *drawFormHighlight* 标志，如上所述。如果此参数为 **false**，则 *drawFormHighlight* 标志不起作用，并且 *drawPlaceHolders* 参数允许将表单保存为 *pdf* 格式。默认值为 **false**。 |
| documentRenderer | object | optional | 定义从 *pdf*、*xps*、*oxps* 转换时的文档渲染器。 |
| documentRenderer.textAssociation | string | optional | 定义渲染模式：**blockChar** - 所有文本都由单个字符转换，**blockLine** - 所有文本都由单独的行转换，**plainLine** - 所有文本都转换为纯文本，每行作为单独的段落，**plainParagraph** - 所有文本都转换为纯文本，行被组合成段落。默认值为 **plainLine**。 |
| filetype | string | required | 定义要转换的文档文件的类型。 |
| key | string | required | 定义文档标识符，用于明确标识文档文件。 |
| outputtype | string | required | 定义生成的转换文档类型。从 7.0 版开始，可以指定文件格式而不是扩展名：**ooxml**（转换为 *docx*、*docm*、*xlsx*、*xlsm*、*pptx* 或 *pptm*），**odf**（转换为 *odt*、*ods* 或 *odp*）。 |
| password | string | optional | 如果文件有密码保护，则定义文件的密码。转换后的文件没有密码。 |
| pdf | object | optional | 定义将文档文件转换为 pdf 的设置。 |
| pdf.form | boolean | optional | 定义文档是否转换为 *pdf* 格式（**true**）或常规 *pdf* 文件（**false**）。如果省略此参数，则不会更改文档内容。 |
| region | string | optional | 定义从*电子表格*格式转换为 *pdf* 时货币、日期和时间的默认显示格式。使用四个字母（**en-US**、**fr-FR** 等）语言代码设置。默认值为 **en-US**。 |
| spreadsheetLayout | object | optional | 定义将电子表格转换为 pdf 的设置。 |
| spreadsheetLayout.fitToHeight | integer | optional | 设置转换区域的高度，以页数为单位。默认值为 **0**。 |
| spreadsheetLayout.fitToWidth | integer | optional | 设置转换区域的宽度，以页数为单位。默认值为 **0**。 |
| spreadsheetLayout.gridLines | boolean | optional | 允许在输出 PDF 文件中包含或不包含网格线。默认值为 **false**。 |
| spreadsheetLayout.headings | boolean | optional | 允许在输出 PDF 文件中包含或不包含标题。默认值为 **false**。 |
| spreadsheetLayout.ignorePrintArea | boolean | optional | 确定是否忽略为电子表格文件选择的打印区域。默认值为 **true**。 |
| spreadsheetLayout.margins | object | optional | 设置输出 PDF 文件的边距。 |
| spreadsheetLayout.margins.bottom | string | optional | 设置输出 PDF 文件的下边距。默认值为 **19.1mm**。 |
| spreadsheetLayout.margins.left | string | optional | 设置输出 PDF 文件的左边距。默认值为 **17.8mm**。 |
| spreadsheetLayout.margins.right | string | optional | 设置输出 PDF 文件的右边距。默认值为 **17.8mm**。 |
| spreadsheetLayout.margins.top | string | optional | 设置输出 PDF 文件的上边距。默认值为 **19.1mm**。 |
| spreadsheetLayout.orientation | string | optional | 设置输出 PDF 文件的方向。可以是 **landscape**、**portrait**。默认值为 **portrait**。 |
| spreadsheetLayout.pageSize | object | optional | 设置输出 PDF 文件的页面大小。 |
| spreadsheetLayout.pageSize.height | string | optional | 设置输出 PDF 文件的页面高度。默认值为 **297mm**。 |
| spreadsheetLayout.pageSize.width | string | optional | 设置输出 PDF 文件的页面宽度。默认值为 **210mm**。 |
| spreadsheetLayout.scale | integer | optional | 允许设置输出 PDF 文件的缩放比例。默认值为 **100**。 |
| thumbnail | object | optional | 在将图像格式（*bmp*、*gif*、*jpg*、*png*）指定为 **outputtype** 时，定义缩略图的设置。 |
| thumbnail.aspect | integer | optional | 定义使图像适合指定的高度和宽度的模式：**0** - 拉伸文件以适应高度和宽度，**1** - 保持图像的外观，**2** - 页面的米制尺寸被转换为 96dpi 的像素。默认值为 **2**。 |
| thumbnail.first | boolean | optional | 定义是否应仅为首页或所有文档页面生成缩略图。如果为 false，将创建包含所有页面缩略图的 zip 存档。默认值为 **true**。 |
| thumbnail.height | integer | optional | 以像素为单位定义缩略图高度。默认值为 **100**。 |
| thumbnail.width | integer | optional | 以像素为单位定义缩略图宽度。默认值为 **100**。 |
| title | string | optional | 定义转换后的文件名。 |
| token | string | required by configuration | 以[令牌](../signature/request/token-in-body.md#request-to-convert-the-document)的形式定义添加到 **ONLYOFFICE 文档**配置的加密签名。 |
| url | string | required | 定义要转换的文档的绝对 URL。使用本地链接时请务必添加[令牌](../../get-started/how-it-works/security.md)。否则会出现错误。 |
| watermark | object | optional | 定义一个 JSON 对象，其中包含水印的[属性](../../../plugin-and-macros/interacting-with-editors/text-document-api/Enumeration/watermark_on_draw.md)，在转换过程中将其插入到 pdf 和图像文件中。 |
| watermark.align | integer | optional | 定义水印形状中的垂直文本对齐方式：**0** - 底部、**1** - 中心、**4** - 顶部。 |
| watermark.fill | array of integers \| string | optional | 以 RGB 格式定义水印填充颜色，或图像的 URL（base64 支持：*data:image/png;...*）。空数组 \[] 表示水印没有填充。 |
| watermark.height | integer | optional | 定义以毫米为单位测量的水印高度。 |
| watermark.margins | array of integers | optional | 定义水印形状中的文本边距（以毫米为单位）。 |
| watermark.paragraphs | array of objects | optional | 使用当前水印中的段落及其属性定义数组。 |
| watermark.paragraphs.align | integer | optional | 定义当前段落中的水平文本对齐方式：**0** - 右、**1** - 左、**2** - 居中、**3** - 两端对齐。 |
| watermark.paragraphs.fill | array of integers | optional | 以 RGB 格式定义段落突出显示。空数组 \[] 表示该段落不突出显示。 |
| watermark.paragraphs.linespacing | integer | optional | 定义当前段落中的文本行间距。 |
| watermark.paragraphs.runs | array of objects | optional | 定义包含当前段落中的 runs 及其属性的数组。 |
| watermark.paragraphs.runs.bold | boolean | optional | 定义当前文本是否显示为粗体。 |
| watermark.paragraphs.runs.fill | array of integers | optional | 以 RGB 格式定义文本突出显示。空数组 \[] 表示文本不突出显示。 |
| watermark.paragraphs.runs.font-family | string | optional | 定义文本字体系列。 |
| watermark.paragraphs.runs.font-size | string | optional | 定义以磅 (pt) 为单位测量的文本字体大小。 |
| watermark.paragraphs.runs.italic | boolean | optional | 定义当前文本是否显示为斜体。 |
| watermark.paragraphs.runs.strikeout | boolean | optional | 定义当前文本是否显示为删除线。 |
| watermark.paragraphs.runs.text | string | optional | 定义 run 文本。 |
| watermark.paragraphs.runs.underline | boolean | optional | 定义当前文本是否显示下划线。 |
| watermark.rotate | integer | optional | 定义水印旋转角度（以度为单位）。 |
| watermark.stroke | array of integers | optional | 以 RGB 格式定义水印描边颜色。空数组 \[] 表示水印笔划没有填充。 |
| watermark.stroke-width | integer | optional | 定义以毫米为单位测量的水印描边宽度。 |
| watermark.transparent | float | optional | 定义水印透明度。 |
| watermark.type | string | optional | 定义指定当前水印的预设形状几何形状的[形状类型](../../../office-api/usage-api/text-document-api/Enumeration/ShapeType.md)。 |
| watermark.width | integer | optional | 定义以毫米为单位测量的水印宽度。 |

```mdx-code-block
</APITable>
```

:::warning
如果是同步转换，文件转换时间比较长，可能会出现 web 请求超时错误。虽然最终可以完成转换，但只有用相同的 key 再次发送请求才能得到结果。
:::

:::warning
请注意，将电子表格转换为 pdf 或图像格式后，一次可以返回的最大页数不超过 1500。
:::

:::info
下表展示了文档转换为各种知名格式的可能性，其中**输入格式**列对应于 **filetype** 参数值，**输出格式**列对应于 **outputtype** 参数值。
:::

## 请求示例

### 发送到**文档转换服务**的 JSON 对象示例，用于将文件从 *docx* 格式转换为 *pdf* 格式 {#sample-of-json-object-sent-to-document-conversion-service-used-to-generate-png-thumbnail-of-file-in-docx-format}

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

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。您可以使用示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。有关 ONLYOFFICE 文档服务客户端-服务器交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

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

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。您可以使用示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。有关 ONLYOFFICE 文档服务客户端-服务器交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

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

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。您可以使用示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。有关 ONLYOFFICE 文档服务客户端-服务器交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

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

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。您可以使用示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。有关 ONLYOFFICE 文档服务客户端-服务器交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

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

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。您可以使用示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。有关 ONLYOFFICE 文档服务客户端-服务器交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

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
  "title": "Example Document Title.xlsx",
  "url": "https://example.com/url-to-example-spreadsheet.xlsx"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。您可以使用示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.xlsx` 进行测试。有关 ONLYOFFICE 文档服务客户端-服务器交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。

### JSON 对象示例包含发送到**文档转换服务**的 JSON Web Token，用于将文件从 *docx* 格式转换为 *pdf* 格式

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxldHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwib3V0cHV0dHlwZSI6InBkZiIsInRpdGxlIjoiRXhhbXBsZSBEb2N1bWVudCBUaXRsZS5kb2N4IiwidXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.U-YAfuuy7clWjn-xOncfJ-sxVG5DlcYn0AOzJYkoR0M"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。您可以使用示例文档的 URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` 进行测试。有关 ONLYOFFICE 文档服务客户端-服务器交互的更多信息，请参阅[工作原理](../../get-started/how-it-works/how-it-works.md)部分。
