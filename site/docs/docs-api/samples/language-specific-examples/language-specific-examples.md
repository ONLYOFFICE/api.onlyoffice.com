---
sidebar_position: -4
sidebar_label: Docs API integration
description: Language-specific examples for integrating ONLYOFFICE Docs into your website.
---

# Docs API integration samples

The integration examples are small web applications that list files, open them in ONLYOFFICE Docs, and save them back through the callback handler. Each one does the same job in a different language or framework. Run the one closest to your stack to see a complete integration working before you write your own. The source code of all examples is in the [document-server-integration](https://github.com/ONLYOFFICE/document-server-integration) repository.

ONLYOFFICE Docs also includes the Node.js example. It is disabled by default. To enable it, follow the instructions on the ONLYOFFICE Docs start page.

:::warning
The examples are for testing only. They have no authentication, do not validate link parameters or save requests, and accept requests from any site, so anyone who can reach them can read and change their files. Do not run them on a public server, and disable them before going to production.
:::

## Examples

| Example | Built with | Settings | Runs with |
| ------- | ---------- | -------- | --------- |
| [.NET (C#)](/docs/docs-api/samples/language-specific-examples/net-example.md) | ASP.NET Web Forms and ASP.NET MVC | `settings.config`, `web.appsettings.config` | Visual Studio and IIS, Windows only |
| [Go](/docs/docs-api/samples/language-specific-examples/go-example.md) | gorilla/mux | `config/configuration.json` | `go run` |
| [Java](/docs/docs-api/samples/language-specific-examples/java-example.md) | Servlets and JSP | `src/main/resources/settings.properties` | Docker Compose |
| [Java Spring](/docs/docs-api/samples/language-specific-examples/java-spring-example.md) | Spring Boot | `src/main/resources/application.properties` | Maven |
| [Node.js](/docs/docs-api/samples/language-specific-examples/nodejs-example.md) | Express | `config/default.json` | npm |
| [PHP](/docs/docs-api/samples/language-specific-examples/php-example.md) | No framework | Environment variables | PHP built-in server or Docker Compose |
| [PHP Laravel](/docs/docs-api/samples/language-specific-examples/php-laravel-example.md) | Laravel | `.env` | Docker Compose |
| [Python](/docs/docs-api/samples/language-specific-examples/python-example.md) | Django | Environment variables | Django server or Docker Compose |
| [Ruby](/docs/docs-api/samples/language-specific-examples/ruby-example.md) | Ruby on Rails | Environment variables | Make |

To build a Java integration on a library instead of starting from an example, see the [Java SDK](/docs/docs-api/samples/language-specific-examples/java-integration-sdk.md).

## What every example needs

Whichever example you choose, you set the same three things:

- **The address of ONLYOFFICE Docs**, from which the browser loads the editors and to which the example sends its requests.
- **The JWT secret**, which must match the [secret key](/docs/docs-api/additional-api/signature/signature.md) of ONLYOFFICE Docs.
- **The address of the example**, at which ONLYOFFICE Docs downloads files and sends the callback. Set it when ONLYOFFICE Docs runs on another computer or in Docker, where `localhost` points somewhere else.

Each example page shows where these settings are and what they are called.
