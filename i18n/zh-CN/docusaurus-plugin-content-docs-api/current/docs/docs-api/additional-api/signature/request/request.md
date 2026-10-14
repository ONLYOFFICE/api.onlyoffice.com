# 请求

在执行来自或发送到 ONLYOFFICE 文档的 HTTP 请求时，会将令牌作为参数添加以验证数据。令牌可以发送：

- [请求体中](token-in-body.md)；
- [请求头中](token-in-header.md)。

从 5.2 版本开始，可以在 ONLYOFFICE 文档的请求体参数中使用令牌。要启用它，请将配置文件中的 [services.CoAuthoring.token.inbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-inbox-inBody) 和 [services.CoAuthoring.token.outbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-outbox-inBody) 设置为`true`。

从 7.1 版本开始，传入请求将使用请求体中的令牌（如果存在）。否则，将采用请求头令牌。要指定接下来用于验证数据的内容，必须将 [services.CoAuthoring.server.tokenRequiredParams](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-tokenRequiredParams) 添加到`local.json`配置文件中。如果它为`true`，则仅使用令牌数据。否则，打开的请求部分将与令牌数据合并。

传出请求中，令牌既可以包含在请求体中，也可以置于请求头内，且两者可以不同。例如，考虑到请求头中令牌的大小限制，可能会从请求头中的令牌移除版本历史记录信息。

:::note
[请求体中的令牌](token-in-body.md)仅用于 POST 请求。对于 GET 请求，使用[请求头中的令牌](token-in-header.md)。
:::

## Operation {#operation}

从 10.0 版本开始，令牌可以声明其签发用于哪种操作。操作在令牌 payload 顶层的 `operation` 字段中指定。

### 传入请求 {#incoming-requests}

在传入请求的令牌中添加 `operation` 字段：

| 请求                                                           | `operation`    |
| -------------------------------------------------------------- | -------------- |
| [文档命令服务](../../command-service/command-service.md)（`/command`）   | `"command"`    |
| [文档转换服务](../../conversion-api/request.md)（`/converter`）          | `"converter"`  |
| [文档生成器服务](../../document-builder-api.md)（`/docbuilder`）         | `"docbuilder"` |

对于[请求头中的令牌](token-in-header.md)，请将 `operation` 字段放在 `payload` 对象旁边，而不是放在其内部。`operation` 字段位于 `payload` 对象内部的令牌将被拒绝。

ONLYOFFICE 文档如何检查传入令牌取决于服务器参数 [services.CoAuthoring.token.purposeCheck](../../../get-started/configuration/server-config/server-config.md#services.CoAuthoring.token.purposeCheck)：

- `validate`（默认）：`operation` 字段是可选的。如果指定了该字段但与请求不符，令牌将被拒绝。包含编辑器[配置](../../../usage-api/config/config.md)字段（例如 `document` 或 `editorConfig` 对象）的令牌将被拒绝，因此编辑器配置中的令牌不能用于这些请求。对于文档命令服务或文档生成器服务，不含 `operation` 字段的令牌只能包含该请求的参数。
- `strict`：执行与 `validate` 模式相同的检查，并且 `operation` 字段为必填项。
- `off`：不检查 `operation` 字段的值和编辑器配置字段。

`"callback"` 和 `"download"` 值保留用于传出请求。包含这些值或在 `payload` 对象内部包含 `operation` 字段的传入令牌在所有模式下都会被拒绝。

被拒绝的令牌将按无效令牌处理：请求返回的错误与签名错误的令牌相同。

客户端[浏览器请求](../browser.md)的令牌不使用 `operation` 字段。在 `validate` 和 `strict` 模式下，包含该字段的浏览器令牌将被拒绝。

### 传出请求 {#outgoing-requests}

ONLYOFFICE 文档会在其传出请求的令牌中添加 `operation` 字段：

- `"callback"`：发送到 [callbackUrl](../../../usage-api/config/editor/editor.md#callbackurl) 地址的请求；
- `"download"`：从**文档存储服务**下载文件的请求。

请检查此字段，以确保令牌是为您正在处理的请求签发的。
