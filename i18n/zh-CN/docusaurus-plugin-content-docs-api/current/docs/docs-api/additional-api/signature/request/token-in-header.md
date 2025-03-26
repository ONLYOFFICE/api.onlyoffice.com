# 请求头中的令牌

在从或向 ONLYOFFICE 文档执行 HTTP 请求时，系统会添加一个包含令牌的授权头以验证请求的合法性。

JSON Web 令牌的`payload`包含以下字段：

- `payload` - 如果不为空，则包含 JSON 格式的请求体参数的对象。

## 传入请求

> 请注意，在向 ONLYOFFICE 文档执行 HTTP 请求时，不建议在请求头中发送签名。请在[请求体](./token-in-body.md)中发送签名。

### 请求接收已编辑文档的状态

对于从**文件存储服务**向[文件命令服务](../../command-service/command-service.md)发送的命令请求，将执行验证。

示例参数，用于请求接收编辑文档状态:

  ``` json
  {
    "payload": {
      "c": "info",
      "key": "Khirz6zTPdfd7"
    }
  }
  ```

示例，用于请求接收已编辑文档的状态:

``` http
POST /command HTTP/1.1
Host: documentserver
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImMiOiJpbmZvIiwia2V5IjoiS2hpcno2elRQZGZkNyJ9fQ.hGQ8kquQWpg4MQYiSYaIzik0wotP1coAop6QfLruenA

{
    "c": "info",
    "key": "Khirz6zTPdfd7"
}
```

### 请求转换文档

使用从**文档存储服务**到[文档转换服务](../../conversion-api/request.md)的命令对传入请求执行验证。

请求转换文档的示例参数:

  ``` json
  {
    "payload": {
      "filetype": "docx",
      "key": "Khirz6zTPdfd7",
      "outputtype": "pdf",
      "title": "Example Document Title.docx",
      "url": "https://example.com/url-to-example-document.docx"
    }
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

请求转换文档示例:

``` http
POST /converter HTTP/1.1
Host: documentserver
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImZpbGV0eXBlIjoiZG9jeCIsImtleSI6IktoaXJ6NnpUUGRmZDciLCJvdXRwdXR0eXBlIjoicGRmIiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQuZG9jeCJ9fQ.Ec50Gvafu4niR2I1LPgETn1jkvvs1wKm0YeeI1RbRQs

{
    "filetype": "docx",
    "key": "Khirz6zTPdfd7",
    "outputtype": "pdf",
    "title": "Example Document Title.docx",
    "url": "https://example.com/url-to-example-document.docx"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

### 请求文档生成器服务

对于从**文档存储服务**向[文档生成器服务](../../document-builder-api.md)的传入请求进行验证。

请求文档生成器服务的示例参数:

  ``` json
  {
    "payload": {
      "async": true,
      "url": "https://example.com/url-to-example-script.docbuilder"
    }
  }
  ```

此处的 **example.com** 表示安装**文档存储服务**的服务器名称。要深入了解ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

文档生成器服务请求示例:

``` http
POST /docbuilder HTTP/1.1
Host: documentserver
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImFzeW5jIjp0cnVlLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXNjcmlwdC5kb2NidWlsZGVyIn19.JpHp_TB3XDacAhTTB4I0CE7SIESSE9aQUGDulbpYKTE

{
    "async": true,
    "url": "https://example.com/url-to-example-script.docbuilder"
}
```

此处的 **example.com** 表示安装**文档存储服务**的服务器名称。要深入了解ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

## 传出请求

### 当最后一个用户关闭编辑的没有更改的文档时，文档编辑服务向 "callbackUrl" 地址发送请求

对**文档编辑服务**向 "[callbackUrl](../../../usage-api/config/editor/editor.md#callbackurl)" 地址发出的请求进行验证。

当最后一个用户关闭编辑的没有更改的文档时，文档编辑服务对 "callbackUrl" 地址发送的请求示例参数:

  ``` json
  {
    "payload": {
      "key": "Khirz6zTPdfd7",
      "status": 4
    }
  }
  ```

当最后一个用户关闭编辑的没有更改的文档时，文档编辑服务对 "callbackUrl" 地址的请求示例:

``` http
POST /url-to-callback.ashx HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImtleSI6IktoaXJ6NnpUUGRmZDciLCJzdGF0dXMiOjR9fQ.MfVoGT-aYuPJfjQAaxwBv7-CqBylDae2AF9K5TpLf-E

{
    "key": "Khirz6zTPdfd7",
    "status": 4
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

### 向文档存储服务发出文件下载请求

对向**文档存储服务**发出的文件下载请求进行验证。

向文档存储服务发出的文件下载请求的示例负载：

  ``` json
  {
    "payload": {
      "url": "https://example.com/url-to-example-document.docx"
    }
  }
  ```

向文档存储服务发出的文件下载请求的示例：

``` http
GET /url-to-example-document.docx HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQuZG9jeCJ9fQ.DnhdBVtn8sFo9Adfl6GuT_v53NVV5cQ0Vi9c8xRzrjs
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

令牌包括负载（文档的完整 URL，在上面的示例中为 *\{"url: "http\://example.com/url-to-example-document.docx"\}*），该负载在请求头中也重复为 **Host** (*example.com*) 和 GET 请求发送到的文档地址 (*url-to-example-document.docx*)。

### 向文档存储服务发出的文档更改数据下载请求

对向**文档存储服务**发出的文档更改数据下载请求进行验证。

向文档存储服务发出的文档更改数据下载请求的示例负载：

  ``` json
  {
    "payload": {
      "url": "https://example.com/url-to-document-changes.zip"
    }
  }
  ```

向文档存储服务发出的文档变更数据下载请求示例：

``` http
GET /url-to-changes.zip HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWRvY3VtZW50LWNoYW5nZXMuemlwIn19.4CJ4F8x7VDMW72ss9VnIYGIwjRpBMYBBRXZ5aX2r2Y4
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

令牌包含有效负载（文档的完整 URL，在上面的示例中为 `{"url: "http://example.com/url-to-document-changes.zip"}`），该负载也在请求头中重复为 `Host` （`example.com`）和 GET 请求发送到的文档地址 (`url-to-document-changes.zip`)。
