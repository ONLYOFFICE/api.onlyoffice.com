---
sidebar_position: -3
---

# 响应

请求结果以 XML 格式返回。要接收 JSON 格式的响应，您需要在 HTTP 请求中使用 `application/json` 值指定 `Accept` 标头。在形成结果文件的链接时，使用与转换请求相同的服务器名称。

:::note
JSON 响应格式从 4.3 版开始提供。
:::

## 响应参数及其描述

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter | Type | Example | Description |
| --------- | ---- | ------- | ----------- |
| endConvert | boolean | `true` | 定义转换是否完成。 |
| error | integer | `-3` | 定义转换期间发生的错误。可以在[此处](./error-codes.md)找到可能的错误代码。 |
| fileType | string | `pdf` | 定义转换文件的扩展名。 |
| fileUrl | string | `https://documentserver/url-to-converted-document.pdf` | 定义到已转换文档的链接。仅当 `endConvert` 参数设置为 `true` 时才会接收到此参数。 |
| percent | integer | `100` | 定义文件转换的百分比。如果 `endConvert` 参数设置为 `true`，则 `percent` 等于 `100`。 |

```mdx-code-block
</APITable>
```

## 响应示例

### 转换完成 (XML)

在形成结果文件的链接时，使用与转换请求相同的服务器名称。

``` xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <EndConvert>True</EndConvert>
    <FileType>pdf</FileType>
    <FileUrl>https://documentserver/url-to-converted-document.pdf</FileUrl>
    <Percent>100</Percent>
</FileResult>
```

### 转换完成 (JSON)

在形成结果文件的链接时，使用与转换请求相同的服务器名称。

``` json
{
  "endConvert": true,
  "fileType": "pdf",
  "fileUrl": "https://documentserver/url-to-converted-document.pdf",
  "percent": 100
}
```

### 异步中间响应 (XML)

当 `async` 参数设置为 `true` 且转换仍在进行时返回。

```xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <EndConvert>False</EndConvert>
    <FileType></FileType>
    <FileUrl></FileUrl>
    <Percent>95</Percent>
</FileResult>
```

### 异步中间响应 (JSON)

当 `async` 参数设置为 `true` 且转换仍在进行时返回。

```json
{
  "endConvert": false,
  "percent": 95
}
```

### 错误响应 (XML)

转换过程中发生错误时返回。

```xml
<?xml version="1.0" encoding="utf-8"?>
<FileResult>
    <Error>-3</Error>
</FileResult>
```

### 错误响应 (JSON)

转换过程中发生错误时返回。

``` json
{
  "error": -3
}
```
