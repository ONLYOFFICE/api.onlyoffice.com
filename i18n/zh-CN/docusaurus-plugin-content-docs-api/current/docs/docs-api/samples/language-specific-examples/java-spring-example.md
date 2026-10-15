---
sidebar_position: -6
description: 运行 ONLYOFFICE 文档 Java Spring 集成示例，并将其连接到您的 ONLYOFFICE 文档服务器。
tags: ["Docs", "Integration", "Java"]
---

# Java Spring 集成

Java Spring 集成示例是一个 Spring Boot 应用程序，它可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。它基于 [ONLYOFFICE 文档集成 SDK](/docs/docs-api/samples/language-specific-examples/java-integration-sdk.md) 构建。在编写您自己的集成之前，运行此示例即可看到一个完整可用的集成。

:::warning
本示例仅用于测试。它没有身份验证，不检查链接参数和保存请求，并接受来自任何网站的请求，因此任何能够访问它的人都可以读取和修改其中的文件。请勿在公共服务器上运行此示例，并在投入生产环境之前将其禁用。
:::

## 先决条件

- **ONLYOFFICE 文档**：[自托管版](https://www.onlyoffice.com/download?from=api#docs-developer)或[云版](https://www.onlyoffice.com/zh/docs-registration?from=api)。
- **Java**：版本 11，即示例的 `pom.xml` 所指定的版本。请参阅[官方网站](https://www.oracle.com/java/technologies/downloads/#java11)。
- **Apache Maven**：请参阅[官方网站](https://maven.apache.org/download.cgi)。
- **Git**：请参阅[官方网站](https://git-scm.com/downloads)。

## 步骤1. 下载示例

克隆[示例仓库](https://github.com/ONLYOFFICE/document-server-integration/tree/main/web/documentserver-example/java-spring)，进入 Java Spring 示例目录，并获取其子模块：

```sh
git clone --depth 1 https://github.com/ONLYOFFICE/document-server-integration
cd document-server-integration/web/documentserver-example/java-spring
git submodule update --init --depth 1 .
```

## 步骤2. 配置连接

打开 `src/main/resources/application.properties` 文件并编辑以下键：

```ini
files.storage=
files.docservice.url.example=
docservice.url=http://documentserver/
docservice.security.key=
```

- `docservice.url`：安装了 ONLYOFFICE 文档的服务器地址。请将 `documentserver` 替换为该服务器的名称或 IP 地址。
- `files.storage`：示例创建和存储文件的文件夹。如果留空，示例将使用运行目录中的 `documents` 文件夹。您可以设置一个绝对路径。在此文件中，每个反斜杠都需要转义，例如 `D:\\folder`。运行示例的用户需要对该文件夹具有读写权限。
- `docservice.security.key`：必须与 ONLYOFFICE 文档的 JWT 设置一致。ONLYOFFICE 文档默认启用 JWT，但此处的密钥为空，这会使示例中的 JWT 处于禁用状态。请将其设置为您服务器的[密钥](/docs/docs-api/additional-api/signature/signature.md)。
- `files.docservice.url.example`：ONLYOFFICE 文档访问示例时使用的地址，末尾不带斜杠，例如 `http://192.168.1.10:4000`。如果 ONLYOFFICE 文档在另一台计算机上或在 Docker 中运行，则需要设置此项，因为您在浏览器中打开的地址（例如 `localhost`）在那里指向的是其他位置。

如果您想尝试配置编辑器，请修改 `src/main/java/com/onlyoffice/integration/sdk/service/ConfigServiceImpl.java` 文件中 `createConfig` 方法的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

## 步骤3. 构建并运行示例

```sh
mvn spring-boot:run
```

在浏览器中打开 `http://localhost:4000`。如需使用其他端口，请修改 `application.properties` 中的 `server.port`。您将看到示例的起始页面，可以在其中上传文件，或者新建文档、电子表格、演示文稿或 PDF 表单，并选择测试用户和编辑器语言。

## 使用 Docker 运行

如果您已安装带有 Docker Compose 的 [Docker](https://docs.docker.com/get-started/get-docker/)，也可以在容器中构建并运行示例，无需安装 Java 或 Maven。此配置不会启动 ONLYOFFICE 文档，因此请先完成步骤2。在示例目录中运行：

```sh
docker compose up --build
```

在浏览器中打开 `http://localhost:4000`。示例文件夹会挂载到容器中，因此文件存储在其 `documents` 文件夹中，对 `application.properties` 的修改在重新启动后生效。在容器内部，`localhost` 指向容器本身，因此请勿在 `docservice.url` 中使用它，并将 `files.docservice.url.example` 设置为 ONLYOFFICE 文档可以访问您计算机的地址。

## 故障排除

- **文档安全令牌的格式不正确**：示例中未启用 JWT（`docservice.security.key` 为空），或者 `docservice.security.key` 与 ONLYOFFICE 文档的密钥不一致。
- **下载失败**：ONLYOFFICE 文档无法访问示例。请在 `application.properties` 中将 `files.docservice.url.example` 设置为 ONLYOFFICE 文档可以解析的地址。
