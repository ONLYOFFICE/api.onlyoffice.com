---
sidebar_position: -5
sidebar_label: Docs API 集成
description: 将 ONLYOFFICE 文档集成到您网站的各语言示例。
---

# Docs API 集成示例

集成示例是一些小型 Web 应用程序，它们可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。每个示例以不同的语言或框架完成相同的工作。在编写您自己的集成之前，运行与您的技术栈最接近的示例，即可看到一个完整可用的集成。所有示例的源代码均位于 [document-server-integration](https://github.com/ONLYOFFICE/document-server-integration) 仓库中。

ONLYOFFICE 文档本身也包含 Node.js 示例。该示例默认处于禁用状态。要启用它，请按照 ONLYOFFICE 文档起始页面上的说明操作。

:::warning
这些示例仅用于测试。它们没有身份验证，不检查链接参数和保存请求，并接受来自任何网站的请求，因此任何能够访问它们的人都可以读取和修改其中的文件。请勿在公共服务器上运行这些示例，并在投入生产环境之前将其禁用。
:::

## 示例

| 示例 | 构建方式 | 设置 | 运行方式 |
| ---- | -------- | ---- | -------- |
| [.NET (C#)](/docs/docs-api/samples/language-specific-examples/net-example.md) | ASP.NET Web Forms 和 ASP.NET MVC | `settings.config`、`web.appsettings.config` | Visual Studio 和 IIS，仅限 Windows |
| [Go](/docs/docs-api/samples/language-specific-examples/go-example.md) | gorilla/mux | `config/configuration.json` | `go run` |
| [Java](/docs/docs-api/samples/language-specific-examples/java-example.md) | Servlet 和 JSP | `src/main/resources/settings.properties` | Docker Compose |
| [Java Spring](/docs/docs-api/samples/language-specific-examples/java-spring-example.md) | Spring Boot | `src/main/resources/application.properties` | Maven |
| [Node.js](/docs/docs-api/samples/language-specific-examples/nodejs-example.md) | Express | `config/default.json` | npm |
| [PHP](/docs/docs-api/samples/language-specific-examples/php-example.md) | 无框架 | 环境变量 | PHP 内置服务器或 Docker Compose |
| [PHP Laravel](/docs/docs-api/samples/language-specific-examples/php-laravel-example.md) | Laravel | `.env` | Docker Compose |
| [Python](/docs/docs-api/samples/language-specific-examples/python-example.md) | Django | 环境变量 | Django 服务器或 Docker Compose |
| [Ruby](/docs/docs-api/samples/language-specific-examples/ruby-example.md) | Ruby on Rails | 环境变量 | Make |

如需基于类库而非从示例开始构建 Java 集成，请参阅 [Java SDK](/docs/docs-api/samples/language-specific-examples/java-integration-sdk.md)。

## 每个示例都需要的设置

无论选择哪个示例，您都需要设置相同的三项内容：

- **ONLYOFFICE 文档的地址**：浏览器从该地址加载编辑器，示例也向该地址发送请求。
- **JWT 密钥**：必须与 ONLYOFFICE 文档的[密钥](/docs/docs-api/additional-api/signature/signature.md)一致。
- **示例的地址**：ONLYOFFICE 文档通过该地址下载文件并发送回调。如果 ONLYOFFICE 文档在另一台计算机上或在 Docker 中运行，则需要设置此项，因为 `localhost` 在那里指向的是其他位置。

每个示例页面都说明了这些设置的位置和名称。
