# Token in body

从 5.2 版本开始，可以在 ONLYOFFICE 文档的请求体参数中使用令牌。要启用它，请将配置文件中的 [services.CoAuthoring.token.inbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-inbox-inBody) 和 [services.CoAuthoring.token.outbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-outbox-inBody) 设置为 `true`。

## 参数

| 参数                                | 类型    | 示例 | 描述                                                        |
| ---------------------------------------- | ------- | ------- | ------------------------------------------------------------------ |
| services.CoAuthoring.token.inbox.inBody  | boolean | false   | 定义是否在传入请求体中启用令牌。 |
| services.CoAuthoring.token.outbox.inBody | boolean | false   | 定义是否在传出请求体中启用令牌。 |

JSON Web 令牌的 `payload` 包含请求正文参数。

## 传入请求

### 请求接收已编辑文档的状态

使用从**文档存储服务**到[文档命令服务](../../command-service/command-service.md)的命令对传入请求执行验证。

示例参数，用于请求接收编辑文档状态:

  ``` json
  {
    "c": "info",
    "key": "Khirz6zTPdfd7"
  }
  ```

这些参数必须编码到令牌中，以便请求看起来像这样：

示例，用于请求接收已编辑文档的状态

``` http
POST /command HTTP/1.1
Host: documentserver
Content-Type: application/json

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiaW5mbyIsImtleSI6IktoaXJ6NnpUUGRmZDcifQ.r_6sThjFABsHMNHhkVdHDSz4jwkbXRQNYdvawkBGJgg"
}
```

如您所见，不需要将上述参数包含在请求正文中，因为它们都已编码到令牌中并在其中发送。

### 请求转换文档

使用从**文档存储服务**到[文档转换服务](../../conversion-api/request.md)的命令对传入请求执行验证。

请求转换文档的示例参数:

  ``` json
  {
    "filetype": "docx",
    "key": "Khirz6zTPdfd7",
    "outputtype": "pdf",
    "title": "Example Document Title.docx",
    "url": "https://example.com/url-to-example-document.docx"
  }
  ```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

请求转换文档示例:

``` http
POST /converter HTTP/1.1
Host: documentserver
Content-Type: application/json

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxldHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwib3V0cHV0dHlwZSI6InBkZiIsInRpdGxlIjoiRXhhbXBsZSBEb2N1bWVudCBUaXRsZS5kb2N4IiwidXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.U-YAfuuy7clWjn-xOncfJ-sxVG5DlcYn0AOzJYkoR0M"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

### 请求文档生成器服务

使用从**文档存储服务**到[文档生成器服务](../../../get-started/how-it-works/how-it-works.md)的命令对传入请求执行验证。

请求文档生成器服务的示例参数:

  ``` json
  {
    "async": true,
    "url": "https://example.com/url-to-example-script.docbuilder"
  }
  ```

此处的 **example.com** 表示安装**文档存储服务**的服务器名称。要深入了解ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

文档生成器服务请求示例:

``` http
POST /docbuilder HTTP/1.1
Host: documentserver
Content-Type: application/json

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3luYyI6dHJ1ZSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1zY3JpcHQuZG9jYnVpbGRlciJ9.dzoTbRzSMa95Fpg34CjnF3ZUPdGA2CnBedFL_qOOxAs"
}
```

此处的 **example.com** 表示安装**文档存储服务**的服务器名称。要深入了解ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

## 传出请求

### 当最后一个用户关闭编辑的没有更改的文档时，文档编辑服务对"callbackUrl"地址发送的请求示例参数

**文档编辑服务**对 “[callbackUrl](../../../usage-api/config/editor/editor.md#callbackurl)” 地址的传出请求执行验证。

当最后一个用户关闭编辑文档且未做任何修改时，文档编辑服务会向“callbackUrl”地址发送请求，示例参数如下：

  ``` json
  {
    "key": "Khirz6zTPdfd7",
    "status": 4
  }
  ```

当最后一个用户关闭编辑的没有更改的文档时，文档编辑服务对"callbackUrl"地址的请求示例:

``` http
POST /url-to-callback.ashx HTTP/1.1
Host: example.com
Content-Type: application/json

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJLaGlyejZ6VFBkZmQ3Iiwic3RhdHVzIjo0fQ.gCyNKPpg6ISAnhvFQmRiY6BRqG6WPcEGgnK79hREdkU"
}
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。

当从 ONLYOFFICE 文档执行 GET 请求时，会添加带有令牌的[授权头](./token-in-header.md)。
