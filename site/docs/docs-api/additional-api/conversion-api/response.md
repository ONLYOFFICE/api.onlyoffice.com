---
sidebar_position: -3
---

# Response

The request result is returned in XML format. To receive a response in JSON format you need to specify the *Accept* header with the **application/json** value in the HTTP request (available from version 4.3). When forming the link to the resulting file, the same server name is used which was made the conversion request to.

## Response parameters and their description

| Parameter   | Type     | Presence | Description |
|-------------|----------|----------|-------------|
| `endConvert`| boolean  | required | Defines if the conversion is completed or not. |
| `error`     | integer  | optional | Defines an error occurred during conversion. See [error codes](./error-codes.md). |
| `fileType`  | string   | optional | Extension of the converted file. |
| `fileUrl`   | string   | optional | Link to the converted document (only when `endConvert` is `true`). |
| `percent`   | integer  | required | Conversion progress in percent (100 if `endConvert` is `true`). |

## Examples of responses

### Sample of the response in XML format

When forming the link to the resulting file, the same server name is used which was made the conversion request to.

``` xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <EndConvert>True</EndConvert>
    <FileType>docm</FileType>
    <FileUrl>https://documentserver/url-to-converted-document.pdf</FileUrl>
    <Percent>100</Percent>
</FileResult>
```

### Sample of the response in JSON format

When forming the link to the resulting file, the same server name is used which was made the conversion request to.

``` json
{
  "endConvert": true,
  "fileType": "docm",
  "fileUrl": "https://documentserver/url-to-converted-document.pdf",
  "percent": 100
}
```

### Sample of the intermediate response to the asynchronous request (with the parameter *async=true*) in XML format

```xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <EndConvert>False</EndConvert>
    <FileType></FileType>
    <FileUrl></FileUrl>
    <Percent>95</Percent>
</FileResult>
```

### Sample of the intermediate response to the asynchronous request (with the parameter *async=true*) in JSON format

```json
{
  "endConvert": false,
  "percent": 95
}
```

### Sample of the response when an error occurred in XML format

```xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <Error>-3</Error>
</FileResult>
```

### Sample of the response when an error occurred in JSON format

``` json
{
  "error": -3
}
```
