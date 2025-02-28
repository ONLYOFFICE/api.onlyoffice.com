---
sidebar_position: -3
---

# Response

 请求结果以 XML 格式返回。要接收 JSON 格式的响应，您需要在 HTTP 请求中使用 **application/json** 值指定 *Accept* 标头（从 4.3 版开始提供）。在形成结果文件的链接时，使用与转换请求相同的服务器名称。

## 响应参数及其描述

### endConvert

定义转换是否完成。

类型: boolean

示例: true

### 错误

定义转换期间发生的错误。可以在[此处](./error-codes.md)找到可能的错误代码。

类型: integer

示例: -3

### fileType

定义转换文件的扩展名。

类型: string

示例: "docm"

### fileUrl

定义到已转换文档的链接。仅当 *endConvert* 参数设置为 **true** 时才会接收到此参数。

类型: string

示例: `https://documentserver/url-to-converted-document.pdf`

### 百分比

定义文件转换的百分比。如果 *endConvert* 参数设置为 **true**，则 *percent* 等于 **100**。

类型: integer

示例: 100 

## 响应示例

### XML 格式的响应示例

在形成结果文件的链接时，使用与转换请求相同的服务器名称。

``` xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <EndConvert>True</EndConvert>
    <FileType>docm</FileType>
    <FileUrl>https://documentserver/url-to-converted-document.pdf</FileUrl>
    <Percent>100</Percent>
</FileResult>
```

### JSON 格式的响应示例

在形成到结果文件的链接时，使用与转换请求相同的服务器名称。

``` json
{
  "endConvert": true,
  "fileType": "docm",
  "fileUrl": "https://documentserver/url-to-converted-document.pdf",
  "percent": 100
}
```

### XML 格式的异步请求（带有参数 *async=true*）的中间响应示例

```xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <EndConvert>False</EndConvert>
    <FileType></FileType>
    <FileUrl></FileUrl>
    <Percent>95</Percent>
</FileResult>
```

### JSON 格式的异步请求（带参数 *async=true*）的中间响应示例

```json
{
  "endConvert": false,
  "percent": 95
}
```

### 格式发生错误时的响应示例

```xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <Error>-3</Error>
</FileResult>
```

### JSON 格式发生错误时的响应示例

``` json
{
  "error": -3
}
```
