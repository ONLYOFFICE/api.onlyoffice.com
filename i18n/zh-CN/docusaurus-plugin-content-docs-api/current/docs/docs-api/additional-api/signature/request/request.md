# 请求

在执行来自或发送到 ONLYOFFICE 文档的 HTTP 请求时，会将令牌作为参数添加以验证数据。令牌可以发送：

- [请求体中](token-in-body.md)；
- [请求头中](token-in-header.md)。

从 5.2 版本开始，可以在 ONLYOFFICE 文档的请求体参数中使用令牌。要启用它，请将配置文件中的 [services.CoAuthoring.token.inbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-inbox-inBody) 和 [services.CoAuthoring.token.outbox.inBody](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-token-outbox-inBody) 设置为`true`。

从 7.1 版本开始，传入请求将使用请求体中的令牌（如果存在）。否则，将采用请求头令牌。要指定接下来用于验证数据的内容，必须将 [services.CoAuthoring.server.tokenRequiredParams](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-tokenRequiredParams) 添加到`local.json`配置文件中。如果它为`true`，则仅使用令牌数据。否则，打开的请求部分将与令牌数据合并。

传出请求中，令牌既可以包含在请求体中，也可以置于请求头内，且两者可以不同。例如，考虑到请求头中令牌的大小限制，可能会从请求头中的令牌移除版本历史记录信息。

> [请求体中的令牌](token-in-body.md)仅用于 POST 请求。对于 GET 请求，使用[请求头中的令牌](token-in-header.md)。
