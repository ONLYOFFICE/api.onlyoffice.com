---
sidebar_position: -4
---

# Request

For the interaction with the **document conversion service** the POST requests are used. The request parameters are entered in JSON format in the request body. The requests are sent to the `https://documentserver/converter` address where **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

:::note
Please note that prior to version 5.5, the `https://documentserver/ConvertService.ashx` address was used to send requests.
:::

Starting from version 8.1, it is recommended to add the [shardkey](../../get-started/configuration/shard-key.md) parameter to the URL *QueryString* with the *key* value in it. For example, *?shardkey=Khirz6zTPdfd7*. This allows you to load balance requests.

:::note
In **ONLYOFFICE Docs** prior to version 4.2 the GET request with the parameters in the *QueryString* were used.
:::

## Request parameters

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter | Type | Presence | Description |
| --------- | ---- | -------- | ----------- |
| async | boolean | optional | Defines the conversion request type: asynchronous or not. Supported values: **true**, **false**. When the asynchronous request type is used, the response is formed instantly. In this case to get the result it is necessary to send requests without parameter change until the conversion is finished. The default value is **false**. |
| codePage | integer | optional | Defines the file encoding when converting from *csv* or *txt* format. Main supported values: **932** - Japanese (Shift-JIS), **950** - Chinese Traditional (Big5), **1250** - Central European (Windows), **1251** - Cyrillic (Windows), **65001** - Unicode (UTF-8). You can find all the supported values [in this file](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js). |
| delimiter | integer | optional | Defines the delimiter characters for separating values when converting from *csv* format. Supported values: **0** - no delimiter, **1** - tab, **2** - semicolon, **3** - colon, **4** - comma, **5** - space. |
| documentLayout | object | optional | Defines the document layout which specifies parameters for printing forms as *pdf* documents or images. |
| documentLayout.drawPlaceHolders | boolean | optional | Defines if placeholders will be drawn or not. |
| documentLayout.drawFormHighlight | boolean | optional | Defines if forms will be highlighted or not. |
| documentLayout.isPrint | boolean | optional | Defines if the print mode is turned on or off. This parameter is used only for converting *docx* into *pdf*. If this parameter is equal to **true**, the *drawPlaceHolders* and *drawFormHighlight* flags are used as described above. If this parameter is **false**, the *drawFormHighlight* flag does not work and the *drawPlaceHolders* parameter allows saving the forms in the *pdf* format. The default value is **false**. |
| documentRenderer | object | optional | Defines the document renderer when converting from *pdf*, *xps*, *oxps*. |
| documentRenderer.textAssociation | string | optional | Defines the rendering mode: **blockChar** - all text is converted by single characters, **blockLine** - all text is converted by separate lines, **plainLine** - all text is converted as plain text with each line as a separate paragraph, **plainParagraph** - all text is converted as plain text with lines combined into paragraphs. The default value is **plainLine**. |
| filetype | string | required | Defines the type of the document file to be converted. |
| key | string | required | Defines the document identifier used to unambiguously identify the document file. |
| outputtype | string | required | Defines the resulting converted document type. Starting from version 7.0, file formats can be specified instead of extensions: **ooxml** (converts to *docx*, *docm*, *xlsx*, *xlsm*, *pptx* or *pptm*), **odf** (converts to *odt*, *ods* or *odp*). |
| password | string | optional | Defines the password for the document file if it is protected with a password. After conversion the file has no password. |
| pdf | object | optional | Defines settings for converting document files to pdf. |
| pdf.form | boolean | optional | Defines whether the document will be converted to the *pdf* form (**true**) or to a regular *pdf* file (**false**). If this parameter is omitted, the document contents will not be changed. |
| region | string | optional | Defines the default display format for currency and date and time when converting from *Spreadsheet format* to *pdf*. Is set using the four letter (**en-US**, **fr-FR**, etc.) language codes. The default value is **en-US**. |
| spreadsheetLayout | object | optional | Defines settings for converting the spreadsheet to pdf. |
| spreadsheetLayout.fitToHeight | integer | optional | Sets the height of the converted area, measured in the number of pages. The default value is **0**. |
| spreadsheetLayout.fitToWidth | integer | optional | Sets the width of the converted area, measured in the number of pages. The default value is **0**. |
| spreadsheetLayout.gridLines | boolean | optional | Allows to include grid lines to the output PDF file or not. The default value is **false**. |
| spreadsheetLayout.headings | boolean | optional | Allows to include the headings to the output PDF file or not. The default value is **false**. |
| spreadsheetLayout.ignorePrintArea | boolean | optional | Determines whether to ignore the print area chosen for the spreadsheet file or not. The default value is **true**. |
| spreadsheetLayout.margins | object | optional | Sets the margins of the output PDF file. |
| spreadsheetLayout.margins.bottom | string | optional | Sets the bottom margin of the output PDF file. The default value is **19.1mm**. |
| spreadsheetLayout.margins.left | string | optional | Sets the left margin of the output PDF file. The default value is **17.8mm**. |
| spreadsheetLayout.margins.right | string | optional | Sets the right margin of the output PDF file. The default value is **17.8mm**. |
| spreadsheetLayout.margins.top | string | optional | Sets the top margin of the output PDF file. The default value is **19.1mm**. |
| spreadsheetLayout.orientation | string | optional | Sets the orientation of the output PDF file. May be **landscape**, **portrait**. The default value is **portrait**. |
| spreadsheetLayout.pageSize | object | optional | Sets the page size of the output PDF file. |
| spreadsheetLayout.pageSize.height | string | optional | Sets the page height of the output PDF file. The default value is **297mm**. |
| spreadsheetLayout.pageSize.width | string | optional | Sets the page width of the output PDF file. The default value is **210mm**. |
| spreadsheetLayout.scale | integer | optional | Allows to set the scale of the output PDF file. The default value is **100**. |
| thumbnail | object | optional | Defines the settings for the thumbnail when specifying the image formats (*bmp*, *gif*, *jpg*, *png*) as **outputtype**. |
| thumbnail.aspect | integer | optional | Defines the mode to fit the image to the height and width specified: **0** - stretch file to fit height and width, **1** - keep the aspect for the image, **2** - metric sizes of the page are converted into pixels with 96dpi. The default value is **2**. |
| thumbnail.first | boolean | optional | Defines if the thumbnails should be generated for the first page only or for all the document pages. If false, the zip archive containing thumbnails for all the pages will be created. The default value is **true**. |
| thumbnail.height | integer | optional | Defines the thumbnail height in pixels. The default value is **100**. |
| thumbnail.width | integer | optional | Defines the thumbnail width in pixels. The default value is **100**. |
| title | string | optional | Defines the converted file name. |
| token | string | required by configuration | Defines the encrypted signature added to the **ONLYOFFICE Docs** config in the form of a [token](../signature/request/token-in-body.md#request-to-convert-the-document). |
| url | string | required | Defines the absolute URL to the document to be converted. Be sure to add a [token](../../get-started/how-it-works/security.md) when using local links. Otherwise, an error will occur. |
| watermark | object | optional | Defines a JSON object containing the [properties](../../../plugin-and-macros/interacting-with-editors/text-document-api/Enumeration/watermark_on_draw.md) of a watermark which is inserted into the pdf and image files during conversion. |
| watermark.align | integer | optional | Defines the vertical text align in the watermark shape: **0** - bottom, **1** - center, **4** - top. |
| watermark.fill | array of integers \| string | optional | Defines the watermark fill color in the RGB format, or the URL to image (base64 support: *data:image/png;...*). The empty array \[] means that the watermark has no fill. |
| watermark.height | integer | optional | Defines the watermark height measured in millimeters. |
| watermark.margins | array of integers | optional | Defines the text margins measured in millimeters in the watermark shape. |
| watermark.paragraphs | array of objects | optional | Defines the array with paragraphs from the current watermark with their properties. |
| watermark.paragraphs.align | integer | optional | Defines the horizontal text align in the current paragraph: **0** - right, **1** - left, **2** - center, **3** - justify. |
| watermark.paragraphs.fill | array of integers | optional | Defines the paragraph highlight in the RGB format. The empty array \[] means that the paragraph is not highlighted. |
| watermark.paragraphs.linespacing | integer | optional | Defines the text linespacing in the current paragraph. |
| watermark.paragraphs.runs | array of objects | optional | Defines the array with runs from the current paragraph with their properties. |
| watermark.paragraphs.runs.bold | boolean | optional | Defines if the current text is displayed bold or not. |
| watermark.paragraphs.runs.fill | array of integers | optional | Defines the text highlight in the RGB format. The empty array \[] means that the text is not highlighted. |
| watermark.paragraphs.runs.font-family | string | optional | Defines the text font family. |
| watermark.paragraphs.runs.font-size | string | optional | Defines the text font size measured in points (pt). |
| watermark.paragraphs.runs.italic | boolean | optional | Defines if the current text is displayed italic or not. |
| watermark.paragraphs.runs.strikeout | boolean | optional | Defines if the current text is displayed struck through or not. |
| watermark.paragraphs.runs.text | string | optional | Defines the run text. |
| watermark.paragraphs.runs.underline | boolean | optional | Defines if the current text is displayed underlined or not. |
| watermark.rotate | integer | optional | Defines the watermark rotation angle measured in degrees. |
| watermark.stroke | array of integers | optional | Defines the watermark stroke color in the RGB format. The empty array \[] means that the watermark stroke has no fill. |
| watermark.stroke-width | integer | optional | Defines the watermark stroke width measured in millimeters. |
| watermark.transparent | float | optional | Defines the watermark transparency degree. |
| watermark.type | string | optional | Defines the [shape type](../../../office-api/usage-api/text-document-api/Enumeration/ShapeType.md) which specifies the preset shape geometry for the current watermark. |
| watermark.width | integer | optional | Defines the watermark width measured in millimeters. |

```mdx-code-block
</APITable>
```

:::warning
If the conversion is synchronous and the file takes a long time to be converted, a web request timeout error may occur. Although the conversion can be eventually completed, the result can only be obtained by sending the request again with the same key.
:::

:::warning
Please note that the maximum number of pages that can be returned at once after converting a spreadsheet into pdf or image formats is no more than 1500.
:::

:::info
In the tables below you can see possibility of conversion your documents into the most known file formats, where the **Input format** column corresponds to the values of the **filetype** parameter and the **Output format** columns correspond to the values of the **outputtype** parameter.
:::

## Examples of requests

### Sample of JSON object sent to **document conversion service** used to convert the file from *docx* format to *pdf* format

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` of our sample document for testing. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

### Sample of JSON object sent to **document conversion service** used to convert the password-protected file from *docx* format to *pdf* format

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` of our sample document for testing. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

### Sample of JSON object sent to **document conversion service** used to convert the file from *docx* format to *pdf* form

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` of our sample document for testing. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

### Sample of JSON object sent to **document conversion service** used to convert the file from *docx* format to *pdf* format with a watermark inserted

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` of our sample document for testing. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

### Sample of JSON object sent to **document conversion service** used to generate *png* thumbnail of file in *docx* format

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` of our sample document for testing. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

### Sample of JSON object sent to **document conversion service** used to convert the *spreadsheet* file to *pdf* format

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.xlsx` of our sample document for testing. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

### Sample of JSON object contains the JSON Web Token sent to **document conversion service** used to convert the file from *docx* format to *pdf* format

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxldHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwib3V0cHV0dHlwZSI6InBkZiIsInRpdGxlIjoiRXhhbXBsZSBEb2N1bWVudCBUaXRsZS5kb2N4IiwidXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.U-YAfuuy7clWjn-xOncfJ-sxVG5DlcYn0AOzJYkoR0M"
}
```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. You can use the URL `https://static.onlyoffice.com/assets/docs/samples/demo.docx` of our sample document for testing. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.
