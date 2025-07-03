---
sidebar_position: -4
---

# Request

For the interaction with the **document conversion service** the POST requests are used. The request parameters are entered in JSON format in the request body. The requests are sent to the `https://documentserver/converter` address where **documentserver** is the name of the server with the ONLYOFFICE Docs installed.

> Please note that prior to version 5.5, the `https://documentserver/ConvertService.ashx` address was used to send requests.

Starting from version 8.1, it is recommended to add the [shardkey](../../get-started/configuration/shard-key.md) parameter to the URL *QueryString* with the *key* value in it. For example, *?shardkey=Khirz6zTPdfd7*. This allows you to load balance requests.

> In **ONLYOFFICE Docs** prior to version 4.2 the GET request with the parameters in the *QueryString* were used.

## Request parameters and their description

| Parameter        | Type    | Presence | Description |
|------------------|---------|----------|-------------|
| `async`          | boolean | optional | Defines the conversion request type: asynchronous or not. |
| `codePage`       | integer | optional | Defines the file encoding when converting from *csv* or *txt* format. See [supported values](https://github.com/ONLYOFFICE/server/blob/master/Common/sources/commondefines.js). |
| `delimiter`      | integer | optional | Defines the delimiter characters when converting from *csv*. Supported values: `0` – no delimiter, `1` – tab, `2` – semicolon, `3` – colon, `4` – comma, `5` – space. |
| `documentLayout` | object  | optional | Specifies layout options for printing forms as *pdf* documents or images. |
| `documentRenderer` | object | optional | Defines the document renderer when converting from *pdf*, *xps*, *oxps*. |
| `filetype`       | string  | required | Type of the document file to be converted. |
| `key`            | string  | required | Document identifier used to unambiguously identify the file. |
| `outputtype`     | string  | required | Resulting document type. |
| `password`       | string  | optional | Password for the protected document. The result will not have a password. |
| `pdf`            | object  | optional | Settings for converting document files to PDF. |
| `region`         | string  | optional | Default display format for currency and date/time when converting from spreadsheets. |
| `spreadsheetLayout` | object | optional | Settings for converting spreadsheets to PDF. |
| `thumbnail`      | object  | optional | Settings for generating a thumbnail image from the document. |
| `title`          | string  | optional | Converted file name. |
| `token`          | string  | required by configuration | Encrypted signature (JWT) if enabled in server configuration. |
| `url`            | string  | required | Absolute URL to the file to be converted. |
| `watermark`      | object  | optional | JSON object describing a watermark to be inserted into *pdf* or image output. |

## Nested Parameters

### documentLayout Parameters

| Parameter            | Type    | Presence | Description |
|----------------------|---------|----------|-------------|
| `drawPlaceHolders`   | boolean | optional | Defines if placeholders will be drawn. |
| `drawFormHighlight`  | boolean | optional | Defines if forms will be highlighted. |
| `isPrint`            | boolean | optional | Enables print mode (DOCX to PDF only). |

---

### documentRenderer Parameters

| Parameter         | Type   | Presence | Description |
|-------------------|--------|----------|-------------|
| `textAssociation` | string | optional | Rendering mode: `blockChar`, `blockLine`, `plainLine`, or `plainParagraph`. Default: `plainLine`. |

---

### pdf Parameters

| Parameter | Type    | Presence | Description |
|-----------|---------|----------|-------------|
| `form`    | boolean | optional | Convert to PDF form (`true`) or regular PDF (`false`). |

---

### spreadsheetLayout Parameters

| Parameter         | Type    | Presence | Description |
|-------------------|---------|----------|-------------|
| `fitToHeight`     | integer | optional | Height in pages. Default: 0. |
| `fitToWidth`      | integer | optional | Width in pages. Default: 0. |
| `gridLines`       | boolean | optional | Include grid lines. Default: false. |
| `headings`        | boolean | optional | Include headings. Default: false. |
| `ignorePrintArea` | boolean | optional | Ignore spreadsheet print area. Default: true. |
| `margins`         | object  | optional | Page margins. |
| `orientation`     | string  | optional | Page orientation: `landscape` or `portrait`. Default: `portrait`. |
| `pageSize`        | object  | optional | Page dimensions. |
| `scale`           | integer | optional | Output scale (percentage). Default: 100. |

#### spreadsheetLayout.margins

| Parameter | Type   | Presence | Description |
|-----------|--------|----------|-------------|
| `bottom`  | string | optional | Bottom margin. Default: `19.1mm`. |
| `left`    | string | optional | Left margin. Default: `17.8mm`. |
| `right`   | string | optional | Right margin. Default: `17.8mm`. |
| `top`     | string | optional | Top margin. Default: `19.1mm`. |

#### spreadsheetLayout.pageSize

| Parameter | Type   | Presence | Description |
|-----------|--------|----------|-------------|
| `height`  | string | optional | Page height. Default: `297mm`. |
| `width`   | string | optional | Page width. Default: `210mm`. |

---

### thumbnail Parameters

| Parameter | Type    | Presence | Description |
|-----------|---------|----------|-------------|
| `aspect`  | integer | optional | Fit mode: `0` – stretch, `1` – keep aspect, `2` – page-size-to-pixel (default). |
| `first`   | boolean | optional | First page only (`true`) or all pages (`false`). Default: true. |
| `height`  | integer | optional | Height in pixels. Default: 100. |
| `width`   | integer | optional | Width in pixels. Default: 100. |

---

### watermark Parameters

| Parameter       | Type              | Presence | Description |
|-----------------|-------------------|----------|-------------|
| `transparent`   | float             | optional | Transparency level. |
| `type`          | string            | optional | Shape type of watermark. |
| `width`         | integer           | optional | Width in mm. |
| `height`        | integer           | optional | Height in mm. |
| `rotate`        | integer           | optional | Rotation angle in degrees. |
| `margins`       | array of integers | optional | Text margins in mm. |
| `fill`          | array \| string   | optional | Fill color in RGB or base64 image. |
| `stroke-width`  | integer           | optional | Stroke width in mm. |
| `stroke`        | array of integers | optional | Stroke color in RGB. |
| `align`         | integer           | optional | Vertical align: `0` – bottom, `1` – center, `4` – top. |
| `paragraphs`    | array of objects  | optional | Array of watermark paragraphs. |

#### watermark.paragraphs

| Parameter     | Type              | Presence | Description |
|---------------|-------------------|----------|-------------|
| `align`       | integer           | optional | Horizontal align: `0` – right, `1` – left, `2` – center, `3` – justify. |
| `fill`        | array of integers | optional | Background highlight in RGB. |
| `linespacing` | integer           | optional | Line spacing. |
| `runs`        | array of objects  | optional | Array of text runs. |

#### watermark.paragraphs.runs

| Parameter     | Type              | Presence | Description |
|---------------|-------------------|----------|-------------|
| `text`        | string            | optional | Text content. |
| `fill`        | array of integers | optional | Highlight color in RGB. |
| `font-family` | string            | optional | Font family. |
| `font-size`   | string            | optional | Font size in points. |
| `bold`        | boolean           | optional | Bold text. |
| `italic`      | boolean           | optional | Italic text. |
| `strikeout`   | boolean           | optional | Strikeout text. |
| `underline`   | boolean           | optional | Underlined text. |


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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

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
  "title": "Example Document Title.docx",
  "url": "https://example.com/url-to-example-spreadsheet.xlsx"
}
```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

### Sample of JSON object contains the JSON Web Token sent to **document conversion service** used to convert the file from *docx* format to *pdf* format

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxldHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwib3V0cHV0dHlwZSI6InBkZiIsInRpdGxlIjoiRXhhbXBsZSBEb2N1bWVudCBUaXRsZS5kb2N4IiwidXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.U-YAfuuy7clWjn-xOncfJ-sxVG5DlcYn0AOzJYkoR0M"
}
```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.
