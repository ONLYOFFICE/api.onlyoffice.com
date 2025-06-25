# 文档生成器 API

对于与 **Web 文档生成器服务** 的交互，使用 POST 请求。请求参数在请求正文中以 JSON 格式输入。请求被发送到 `https://documentserver/docbuilder` 地址，其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

从 8.1 版开始，建议将 [shardkey](../get-started/configuration/shard-key.md) 参数添加到 URL *QueryString*，其中包含 *key* 值。例如，*?shardkey=Khirz6zTPdfd7*。这允许您对请求进行负载平衡。

## 参数及其说明：

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 参数 | 类型    | 是否必填                  | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 论据  | object  | 非必填                  | 定义要传递给创建的文档的参数。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| async     | boolean | 非必填                  | 定义对**文档生成器服务**的请求类型：异步与否。<br/><br/>支持的值：<br/>- **true**;<br/>- **false**.<br/><br/>使用异步请求类型时，响应立即形成。在这种情况下，要获得结果，必须在不更改参数的情况下发送请求，直到文档生成完成。默认值为 **false**。                                                                                                                                    |
| key       | string  | 必填                  | 定义用于明确标识请求的请求标识符。key在**文档生成器服务**端形成，并作为对第一个请求的响应返回。当使用异步请求时（*async* 参数设置为 **true**），key不存在于第一个请求中，但必须存在于将在文档生成完成之前发送的所有后续请求中。使用同步请求时（ *async* 参数设置为 **false**），不需要该参数。 |
| 令牌     | string  | 配置要求 | 以[令牌](./signature/request/token-in-body.md#request-to-document-builder-service)的形式定义添加到 **ONLYOFFICE 文档**配置的加密签名。                                                                                                                                                                                                                                                                                                                                                                         |
| url       | string  | 必填                  | 定义 .docbuilder 文件的绝对 URL。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

```mdx-code-block
</APITable>
```

*.docbuilder* 文件包含用于生成输出文档文件（文本文档、电子表格或演示文稿）的脚本，指定输出文件格式和名称。一旦文档生成准备就绪后，将返回带有结果文件绝对 URL 的响应（见下文）。

> 请注意，*.docbuilder* 脚本文件可以包含多个输出文件。文件生成完成后，它们的 URL 将在请求响应中返回。

您可以在[此处](../../document-builder/builder-app/using-docbuilder-file.md)找到有关 *.docbuilder* 文件语法的更多信息。请阅读 [Office JavaScript API 文档](../../office-api/get-started/overview.md)了解使用哪些类和方法借助 *.docbuilder* 文件生成文档的详细信息。

## 示例

### 发送到**文档生成器服务**的 JSON 对象示例，用于第一个异步请求

``` json
{
  "async": true,
  "url": "https://example.com/url-to-example-script.docbuilder"
}
```

此处的 **example.com** 表示安装**文档存储服务**的服务器名称。要深入了解ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../get-started/how-it-works/how-it-works.md)章节。

响应格式:

``` json
{
  "key": "af86C7e71Ca8",
  "end": false
}
```

### 发送到**文档生成器服务**的JSON对象示例，用于接下来的异步请求

``` json
{
  "async": true,
  "key": "Khirz6zTPdfd7"
}
```

响应格式:

``` json
{
  "key": "Khirz6zTPdfd7",
  "urls": {
    "SampleText.docx": "https://documentserver/SampleText.docx",
    "SampleText2.docx": "https://documentserver/SampleText2.docx"
  },
  "end": true
}
```

### 发送到**文档生成器服务**的JSON对象示例，用于同步请求

``` json
{
  "async": false,
  "url": "https://example.com/url-to-example-script.docbuilder"
}
```

此处的 **example.com** 表示安装**文档存储服务**的服务器名称。要深入了解ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../get-started/how-it-works/how-it-works.md)章节。

响应格式:

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "SampleText.docx": "https://documentserver/SampleText.docx",
    "SampleText2.docx": "https://documentserver/SampleText2.docx"
  },
  "end": true
}
```

### JSON对象示例包含发送到**文档生成器服务**的JSON Web令牌，用于第一个异步请求

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3luYyI6dHJ1ZSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1zY3JpcHQuZG9jYnVpbGRlciJ9.dzoTbRzSMa95Fpg34CjnF3ZUPdGA2CnBedFL_qOOxAs"
}
```

响应格式:

``` json
{
  "error": -8
}
```

### JSON 对象的示例包含发送到第一个同步请求的**文档生成器服务**的参数

``` json
{
  "async": false,
  "url": "https://example.com/url-to-example-script.docbuilder",
  "argument": {"key": "string",
    "key2": "string2"}
}
```

此处的 **example.com** 表示安装**文档存储服务**的服务器名称。要深入了解ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../get-started/how-it-works/how-it-works.md)章节。

响应格式:

``` json
{
  "key": "af86C7e71Ca8",
  "urls": {
    "SampleText.docx": "https://documentserver/SampleText.docx",
    "SampleText2.docx": "https://documentserver/SampleText2.docx"
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
