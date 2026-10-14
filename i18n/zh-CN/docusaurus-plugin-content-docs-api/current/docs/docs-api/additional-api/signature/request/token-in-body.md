# 请求体中的令牌

从 5.2 版本开始，可以在 ONLYOFFICE 文档的请求体参数中使用令牌。要启用它，请将配置文件中的 [services.CoAuthoring.token.inbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-inbox-inBody) 和 [services.CoAuthoring.token.outbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-outbox-inBody) 设置为 `true`。

## 配置参数

| 参数                                | 类型    | 示例 | 描述                                                        |
| ---------------------------------------- | ------- | ------- | ------------------------------------------------------------------ |
| services.CoAuthoring.token.inbox.inBody  | boolean | false   | 是否在传入请求体中启用令牌。 |
| services.CoAuthoring.token.outbox.inBody | boolean | false   | 是否在传出请求体中启用令牌。 |

JSON Web 令牌的 `payload` 包含请求正文参数。从 10.0 版本开始，令牌还包含 [operation](request.md#operation) 字段。

:::info
在以下示例中，`example.com` 代表安装**文档存储服务**的服务器。请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节了解更多关于 ONLYOFFICE 文档服务客户端-服务器交互的信息。
:::

## 传入请求 {#incoming-request}

### 获取文档状态 {#get-document-status}

使用从**文档存储服务**到[文档命令服务](../../command-service/command-service.md)的命令对传入请求执行验证。

示例参数：

  ``` json
  {
    "c": "info",
    "key": "Khirz6zTPdfd7",
    "operation": "command"
  }
  ```

这些参数必须编码到令牌中，以便请求看起来像这样：

**Request:**

```bash
curl -X POST "https://documentserver/command" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiaW5mbyIsImtleSI6IktoaXJ6NnpUUGRmZDciLCJvcGVyYXRpb24iOiJjb21tYW5kIn0.trVKeI7OFWsAUhnNKJYxbDW14tcf4RnKgYrRPYL7JAw"
  }'
```

如您所见，不需要将上述参数包含在请求正文中，因为它们都已编码到令牌中并在其中发送。

### 转换文档 {#convert-document}

使用从**文档存储服务**到[文档转换服务](../../conversion-api/request.md)的命令对传入请求执行验证。

示例参数：

  ``` json
  {
    "filetype": "docx",
    "key": "Khirz6zTPdfd7",
    "outputtype": "pdf",
    "title": "Example Document Title.docx",
    "url": "https://example.com/url-to-example-document.docx",
    "operation": "converter"
  }
  ```

**Request:**

```bash
curl -X POST "https://documentserver/converter" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxldHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwib3V0cHV0dHlwZSI6InBkZiIsInRpdGxlIjoiRXhhbXBsZSBEb2N1bWVudCBUaXRsZS5kb2N4IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4Iiwib3BlcmF0aW9uIjoiY29udmVydGVyIn0.uPg0UB8h99StTOqnm3nzyGW7MTYdogOlvyXeZ9R9TQA"
  }'
```

### 文档生成器 {#document-builder}

使用从**文档存储服务**到[文档生成器服务](../../../get-started/how-it-works/how-it-works.md)的命令对传入请求执行验证。

示例参数：

  ``` json
  {
    "async": true,
    "url": "https://example.com/url-to-example-script.js",
    "operation": "docbuilder"
  }
  ```

**Request:**

```bash
curl -X POST "https://documentserver/docbuilder" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3luYyI6dHJ1ZSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1zY3JpcHQuanMiLCJvcGVyYXRpb24iOiJkb2NidWlsZGVyIn0.47dIcXHShPAz5i1FBcszQ4gabCP2ONcRjj1XRC4apK0"
  }'
```

## 传出请求 {#outgoing-requests}

### 关闭时回调（无更改） {#callback-on-close-without-changes}

**文档编辑服务**对 "[callbackUrl](../../../usage-api/config/editor/editor.md#callbackurl)" 地址的传出请求执行验证。

示例参数：

  ``` json
  {
    "key": "Khirz6zTPdfd7",
    "status": 4,
    "operation": "callback"
  }
  ```

**Request:**

```bash
curl -X POST "https://example.com/url-to-callback" \
  -H "Content-Type: application/json" \
  -d '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwic3RhdHVzIjo0LCJvcGVyYXRpb24iOiJjYWxsYmFjayJ9.4350Gsw3fFOH9EC_tnY9iJ_PfAbKW8ZiNU4wiBagHdU"
  }'
```

当从 ONLYOFFICE 文档执行 GET 请求时，会添加带有令牌的[授权头](./token-in-header.md)。
