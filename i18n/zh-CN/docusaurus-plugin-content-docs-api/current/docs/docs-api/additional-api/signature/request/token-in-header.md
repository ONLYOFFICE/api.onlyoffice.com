# 请求头中的令牌

在从或向 ONLYOFFICE 文档执行 HTTP 请求时，系统会添加一个包含令牌的授权头以验证请求的合法性。

JSON Web 令牌的 payload 包含 `payload` 对象及请求正文参数。

:::info
在以下示例中，`example.com` 代表安装**文档存储服务**的服务器。请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节了解更多关于 ONLYOFFICE 文档服务客户端-服务器交互的信息。
:::

## 传入请求

:::caution
在向 ONLYOFFICE 文档执行 HTTP 请求时，不建议在请求头中发送签名。请在[请求体](./token-in-body.md)中发送签名。
:::

### 获取文档状态

对于从**文件存储服务**向[文件命令服务](../../command-service/command-service.md)发送的命令请求，将执行验证。

示例 payload：

  ``` json
  {
    "payload": {
      "c": "info",
      "key": "Khirz6zTPdfd7"
    }
  }
  ```

**Request:**

``` bash
curl -X POST "https://documentserver/command" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImMiOiJpbmZvIiwia2V5IjoiS2hpcno2elRQZGZkNyJ9fQ.hGQ8kquQWpg4MQYiSYaIzik0wotP1coAop6QfLruenA" \
  -d '{
    "c": "info",
    "key": "Khirz6zTPdfd7"
  }'
```

### 转换文档

使用从**文档存储服务**到[文档转换服务](../../conversion-api/request.md)的命令对传入请求执行验证。

示例 payload：

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

**Request:**

``` bash
curl -X POST "https://documentserver/converter" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImZpbGV0eXBlIjoiZG9jeCIsImtleSI6IktoaXJ6NnpUUGRmZDciLCJvdXRwdXR0eXBlIjoicGRmIiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQuZG9jeCJ9fQ.Ec50Gvafu4niR2I1LPgETn1jkvvs1wKm0YeeI1RbRQs" \
  -d '{
    "filetype": "docx",
    "key": "Khirz6zTPdfd7",
    "outputtype": "pdf",
    "title": "Example Document Title.docx",
    "url": "https://example.com/url-to-example-document.docx"
  }'
```

### 文档生成器

对于从**文档存储服务**向[文档生成器服务](../../document-builder-api.md)的传入请求进行验证。

示例 payload：

  ``` json
  {
    "payload": {
      "async": true,
      "url": "https://example.com/url-to-example-script.js"
    }
  }
  ```

**Request:**

``` bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImFzeW5jIjp0cnVlLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXNjcmlwdC5qcyJ9fQ.0_2NH7PCswspvVWcc8W5Fzfbx9dCNvynP9DNlI0qJDU" \
  -d '{
    "async": true,
    "url": "https://example.com/url-to-example-script.js"
  }'
```

## 传出请求

### 关闭时回调（无更改）

对**文档编辑服务**向 "[callbackUrl](../../../usage-api/config/editor/editor.md#callbackurl)" 地址发出的请求进行验证。

示例 payload：

  ``` json
  {
    "payload": {
      "key": "Khirz6zTPdfd7",
      "status": 4
    }
  }
  ```

**Request:**

``` bash
curl -X POST "https://example.com/url-to-callback.ashx" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImtleSI6IktoaXJ6NnpUUGRmZDciLCJzdGF0dXMiOjR9fQ.MfVoGT-aYuPJfjQAaxwBv7-CqBylDae2AF9K5TpLf-E" \
  -d '{
    "key": "Khirz6zTPdfd7",
    "status": 4
  }'
```

### 文件下载

对向**文档存储服务**发出的文件下载请求进行验证。

示例 payload：

  ``` json
  {
    "payload": {
      "url": "https://example.com/url-to-example-document.docx"
    }
  }
  ```

**Request:**

``` bash
curl -X GET "https://example.com/url-to-example-document.docx" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQuZG9jeCJ9fQ.DnhdBVtn8sFo9Adfl6GuT_v53NVV5cQ0Vi9c8xRzrjs"
```

令牌包含 payload（文档的完整 URL，在上面的示例中为 `{"url": "https://example.com/url-to-example-document.docx"}`），该 payload 在请求头中也重复为 `Host`（`example.com`）和 GET 请求发送到的文档地址（`url-to-example-document.docx`）。

### 文档更改下载

对向**文档存储服务**发出的文档更改数据下载请求进行验证。

示例 payload：

  ``` json
  {
    "payload": {
      "url": "https://example.com/url-to-document-changes.zip"
    }
  }
  ```

**Request:**

``` bash
curl -X GET "https://example.com/url-to-document-changes.zip" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWRvY3VtZW50LWNoYW5nZXMuemlwIn19.4CJ4F8x7VDMW72ss9VnIYGIwjRpBMYBBRXZ5aX2r2Y4"
```

令牌包含 payload（文档的完整 URL，在上面的示例中为 `{"url": "https://example.com/url-to-document-changes.zip"}`），该 payload 在请求头中也重复为 `Host`（`example.com`）和 GET 请求发送到的文档地址（`url-to-document-changes.zip`）。
