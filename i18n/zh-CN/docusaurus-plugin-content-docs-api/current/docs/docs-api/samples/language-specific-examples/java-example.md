---
sidebar_position: -8
description: 运行 ONLYOFFICE 文档 Java 集成示例，并将其连接到您的 ONLYOFFICE 文档服务器。
tags: ["Docs", "Integration", "Java"]
---

# Java 集成

Java 集成示例是一个运行在 Apache Tomcat 上的小型 Servlet 和 JSP 应用程序，它可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。在编写您自己的集成之前，运行此示例即可看到一个完整可用的集成。

:::warning
本示例仅用于测试。它没有身份验证，不检查链接参数和保存请求，并接受来自任何网站的请求，因此任何能够访问它的人都可以读取和修改其中的文件。请勿在公共服务器上运行此示例，并在投入生产环境之前将其禁用。
:::

## 先决条件

- **ONLYOFFICE 文档**：[自托管版](https://www.onlyoffice.com/download?from=api#docs-developer)或[云版](https://www.onlyoffice.com/zh/docs-registration?from=api)。
- **Docker**：请参阅[官方网站](https://docs.docker.com/get-started/get-docker/)。
- **Git**：请参阅[官方网站](https://git-scm.com/downloads)。

Docker Compose 会使用 Maven 和 JDK 8 构建示例，并在 Apache Tomcat 中运行它，因此您无需自行安装 Java、Maven 或 Tomcat。

## 步骤1. 下载示例

克隆[示例仓库](https://github.com/ONLYOFFICE/document-server-integration/tree/main/web/documentserver-example/java)，进入 Java 示例目录，并获取其子模块：

```sh
git clone --depth 1 https://github.com/ONLYOFFICE/document-server-integration
cd document-server-integration/web/documentserver-example/java
git submodule update --init --depth 1 .
```

## 步骤2. 配置连接

打开 `src/main/resources/settings.properties` 文件并编辑以下键：

```ini
storage-folder=app_data
files.docservice.url.site=http://documentserver/
files.docservice.url.example=
files.docservice.secret=
```

- `files.docservice.url.site`：安装了 ONLYOFFICE 文档的服务器地址。请将 `documentserver` 替换为该服务器的名称或 IP 地址，并保留末尾的斜杠。示例在 Docker 容器中运行，因此请勿使用 `localhost`：您的浏览器和该容器都必须能够访问此地址。
- `storage-folder`：示例创建和存储文件的文件夹。相对路径会在已部署的应用程序内部解析，因此使用 Docker 时，文件保存在容器中。您可以设置一个绝对路径。在 `.properties` 文件中，每个反斜杠都需要转义，例如 `D:\\folder`。运行示例的用户需要对该文件夹具有读写权限。
- `files.docservice.secret`：必须与 ONLYOFFICE 文档的 JWT 密钥一致。此项默认为空，这会在示例中禁用 JWT。ONLYOFFICE 文档默认启用 JWT，因此请将此键设置为您服务器的[密钥](/docs/docs-api/additional-api/signature/signature.md)。
- `files.docservice.url.example`：ONLYOFFICE 文档访问示例时使用的地址。如果 ONLYOFFICE 文档在另一台计算机上或在 Docker 中运行，则需要设置此项，因为您在浏览器中打开的地址（例如 `localhost`）在那里指向的是其他位置。

设置文件会在构建时打包到应用程序中，因此每次修改后都需要重新构建示例。

如果您想尝试配置编辑器，请修改 `src/main/java/entities/FileModel.java` 文件中的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。该类会构建配置，再由 `src/main/webapp/editor.jsp` 传递给编辑器。

## 步骤3. 构建并运行示例

```sh
docker compose up --build
```

在浏览器中打开 `http://localhost:8080`。您将看到示例的起始页面，可以在其中上传文件，或者新建文档、电子表格、演示文稿或 PDF 表单。

## 故障排除

- **文档安全令牌的格式不正确**：`files.docservice.secret` 为空（这会在示例中禁用 JWT），或者与 ONLYOFFICE 文档的密钥不一致。
- **下载失败**：ONLYOFFICE 文档无法访问示例。请在 `src/main/resources/settings.properties` 中将 `files.docservice.url.example` 设置为 ONLYOFFICE 文档可以解析的地址，然后重新构建示例。
