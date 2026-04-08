---
sidebar_position: -3
---

# Response

The request result is returned in XML format. To receive a response in JSON format you need to specify the `Accept` header with the `application/json` value in the HTTP request. When forming the link to the resulting file, the same server name is used to which the conversion request was made.

:::note
JSON response format is available from version 4.3.
:::

## Response parameters and their description

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter | Type | Example | Description |
| --------- | ---- | ------- | ----------- |
| endConvert | boolean | `true` | Defines if the conversion is completed or not. |
| error | integer | `-3` | Defines an error that occurred during the conversion. Possible error codes can be found [here](./error-codes.md). |
| fileType | string | `pdf` | Defines an extension of the converted file. |
| fileUrl | string | `https://documentserver/url-to-converted-document.pdf` | Defines the link to the converted document. This parameter will be received only when the `endConvert` parameter is set to `true`. |
| percent | integer | `100` | Defines the percentage of the file conversion. If the `endConvert` parameter is set to `true`, the `percent` is equal to `100`. |

```mdx-code-block
</APITable>
```

## Examples of responses

### Completed conversion (XML)

When forming the link to the resulting file, the same server name is used to which the conversion request was made.

``` xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <EndConvert>True</EndConvert>
    <FileType>pdf</FileType>
    <FileUrl>https://documentserver/url-to-converted-document.pdf</FileUrl>
    <Percent>100</Percent>
</FileResult>
```

### Completed conversion (JSON)

When forming the link to the resulting file, the same server name is used to which the conversion request was made.

``` json
{
  "endConvert": true,
  "fileType": "pdf",
  "fileUrl": "https://documentserver/url-to-converted-document.pdf",
  "percent": 100
}
```

### Async intermediate response (XML)

Returned when the `async` parameter is set to `true` and the conversion is still in progress.

```xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <EndConvert>False</EndConvert>
    <FileType></FileType>
    <FileUrl></FileUrl>
    <Percent>95</Percent>
</FileResult>
```

### Async intermediate response (JSON)

Returned when the `async` parameter is set to `true` and the conversion is still in progress.

```json
{
  "endConvert": false,
  "percent": 95
}
```

### Error response (XML)

Returned when an error occurs during the conversion.

```xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <Error>-3</Error>
</FileResult>
```

### Error response (JSON)

Returned when an error occurs during the conversion.

``` json
{
  "error": -3
}
```
