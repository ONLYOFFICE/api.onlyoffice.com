# 文档生成器 API

对于与 **Web 文档生成器服务** 的交互，使用 POST 请求。请求参数在请求正文中以 JSON 格式输入。请求被发送到 `https://documentserver/docbuilder` 地址，其中 `documentserver` 是安装了 ONLYOFFICE 文档的服务器的名称。

从 8.1 版开始，建议将 [shardkey](../get-started/configuration/shard-key.md) 参数添加到 URL QueryString，其中包含 `key` 值。例如，`?shardkey=Khirz6zTPdfd7`。这允许您对请求进行负载平衡。

## 请求参数及其说明

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 参数 | 类型    | 是否必填                  | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| argument  | object  | 非必填                  | 定义要传递给创建的文档的参数。请参阅[支持的属性](../../document-builder/builder-framework/CDocBuilder/SetProperty.md#supported-properties)了解如何使用参数的详细信息。                                                                                                                                                                                                                                                                                                                                                      |
| async     | boolean | 非必填                  | 定义对**文档生成器服务**的请求类型：异步与否。当设置为 `true` 时，响应立即形成并包含一个 `key`。然后您必须使用此 `key` 发送请求进行轮询，直到文档生成完成（当 `end` 变为 `true` 时）。默认值为 `false`。                                                                                                                                    |
| key       | string  | 视情况而定               | 定义用于明确标识请求的请求标识符。key 在**文档生成器服务**端形成，并作为对第一个请求的响应返回。当使用异步请求时（`async` 参数设置为 `true`），key 不存在于第一个请求中，但必须存在于将在文档生成完成之前发送的所有后续请求中。使用同步请求时（`async` 参数设置为 `false`），不需要该参数。 |
| token     | string  | 配置要求 | 以[令牌](./signature/request/token-in-body.md#request-to-document-builder-service)的形式定义添加到 **ONLYOFFICE 文档**配置的加密签名。                                                                                                                                                                                                                                                                                                                                                                         |
| url       | string  | 必填                  | 定义 `.docbuilder` 文件的绝对 URL。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

```mdx-code-block
</APITable>
```

`.docbuilder` 文件包含用于生成输出文档文件（文本文档、电子表格或演示文稿）的脚本，指定输出文件格式和名称。一旦文档生成准备就绪后，将返回带有结果文件绝对 URL 的响应（见下文）。

:::note
`.docbuilder` 脚本文件可以包含多个输出文件。文件生成完成后，它们的 URL 将在请求响应中返回。
:::

您可以在[此处](../../document-builder/builder-app/using-docbuilder-file.md)找到有关 `.docbuilder` 文件语法的更多信息。请阅读 [Office JavaScript API 文档](../../office-api/get-started/overview.md)了解使用哪些类和方法借助 `.docbuilder` 文件生成文档的详细信息。

## 响应参数及其说明

请求结果以 JSON 格式返回。

```mdx-code-block
<APITable name="response">
```

| 参数      | 类型    | 示例                                                 | 描述                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| end       | boolean | `true`                                               | 定义文档生成是否完成。当值为 `false` 时，任务仍在处理中，响应中不包含 `urls` 参数。当值为 `true` 时，任务已完成，`urls` 参数将出现在响应中。                                                                                                                                                                                                   |
| error     | integer | `-8`                                                 | 定义文档生成过程中发生的错误。可能的错误代码可在[下方](#可能的错误代码及其描述)找到。                                                                                                                                                                                                                                                           |
| key       | string  | `af86C7e71Ca8`                                       | 定义文档生成任务的唯一标识符。如果请求中提供了 `key` 参数，则返回相同的值。如果在第一个异步请求中未提供 `key` 参数，则由**文档生成器服务**生成新的 key。请在所有后续轮询请求中使用此值。                                                                                                                                                        |
| urls      | object  | `{"output.docx": "https://documentserver/..."}`      | 定义包含生成的输出文件绝对 URL 的对象。对象键是 `.docbuilder` 脚本中指定的输出文件名。此参数仅在 `end` 值为 `true` 时存在。                                                                                                                                                                                                                     |

```mdx-code-block
</APITable>
```

## 示例 .docbuilder 文件

下面是一个简单的 `.docbuilder` 脚本，用于创建包含 "Hello World!" 文本的文档：

``` js
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Hello World!");
builder.SaveFile("docx", "output.docx");
builder.CloseFile();
```

将此文件托管在可公开访问的服务器上，以便与下面的 API 请求一起使用。

## 示例

:::info
在以下示例中，`example.com` 表示安装**文档存储服务**以及托管 `.docbuilder` 文件的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../get-started/how-it-works/how-it-works.md)章节。
:::

### 异步请求

**步骤 1.** 发送包含 `.docbuilder` 文件 URL 的初始请求：

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": true,
    "url": "https://example.com/url-to-example-script.docbuilder"
  }'
```

**响应：**

``` json
{
  "key": "af86C7e71Ca8",
  "end": false
}
```

**步骤 2.** 使用返回的 `key` 轮询，直到 `end` 为 `true`：

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": true,
    "key": "af86C7e71Ca8"
  }'
```

**响应：**

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "output.docx": "https://documentserver/output.docx"
  },
  "end": true
}
```

### 同步请求

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": false,
    "url": "https://example.com/url-to-example-script.docbuilder"
  }'
```

**响应：**

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "output.docx": "https://documentserver/output.docx"
  },
  "end": true
}
```

### 带令牌的异步请求

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3luYyI6dHJ1ZSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1zY3JpcHQuZG9jYnVpbGRlciJ9.dzoTbRzSMa95Fpg34CjnF3ZUPdGA2CnBedFL_qOOxAs"
  }'
```

**响应：**

``` json
{
  "error": -8
}
```

:::info
此示例演示了令牌无效时的错误响应。有关更多详细信息，请参阅[错误代码](#可能的错误代码及其描述)部分。
:::

### 带参数的同步请求

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": false,
    "url": "https://example.com/url-to-example-script.docbuilder",
    "argument": {
      "key": "string",
      "key2": "string2"
    }
  }'
```

**响应：**

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "output.docx": "https://documentserver/output.docx"
  },
  "end": true
}
```

### 多个输出文件

一个 `.docbuilder` 脚本可以生成多个文件。例如：

``` js
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Document 1");
builder.SaveFile("docx", "document1.docx");
builder.CloseFile();

builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Spreadsheet 1");
builder.SaveFile("xlsx", "spreadsheet1.xlsx");
builder.CloseFile();
```

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "async": false,
    "url": "https://example.com/url-to-example-script.docbuilder"
  }'
```

**响应：**

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "document1.docx": "https://documentserver/document1.docx",
    "spreadsheet1.xlsx": "https://documentserver/spreadsheet1.xlsx"
  },
  "end": true
}
```

## 可能的错误代码及其描述

| 错误代码 | 描述                                                    |
| ---------- | -------------------------------------------------------------- |
| -1         | 未知错误。                                                |
| -2         | 生成超时错误。                                      |
| -3         | 文档生成错误。                                     |
| -4         | 下载要生成的文档文件时出错。     |
| -6         | 访问文档生成结果数据库时出错。 |
| -8         | 令牌无效。                                                 |
