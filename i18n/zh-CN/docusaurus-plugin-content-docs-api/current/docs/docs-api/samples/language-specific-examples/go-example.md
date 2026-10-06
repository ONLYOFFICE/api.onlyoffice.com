---
sidebar_position: -7
description: 运行 ONLYOFFICE 文档 Go 集成示例，并将其连接到您的 ONLYOFFICE 文档服务器。
tags: ["Docs", "Integration", "Go"]
---

# Go 集成

Go 集成示例是一个基于 gorilla/mux 路由器的小型 Web 应用程序，它可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。在编写您自己的集成之前，运行此示例即可看到一个完整可用的集成。

:::warning
本示例仅用于测试。它没有身份验证，不检查链接参数和保存请求，并接受来自任何网站的请求，因此任何能够访问它的人都可以读取和修改其中的文件。请勿在公共服务器上运行此示例，并在投入生产环境之前将其禁用。
:::

## 先决条件

- **ONLYOFFICE 文档**：[自托管版](https://www.onlyoffice.com/download?from=api#docs-developer)或[云版](https://www.onlyoffice.com/zh/docs-registration?from=api)。
- **Go**：请参阅[官方网站](https://go.dev/dl/)。
- **Git**：请参阅[官方网站](https://git-scm.com/downloads)。

## 步骤1. 下载示例

克隆[示例仓库](https://github.com/ONLYOFFICE/document-server-integration/tree/main/web/documentserver-example/go)，进入 Go 示例目录，并获取其子模块：

```sh
git clone --depth 1 https://github.com/ONLYOFFICE/document-server-integration
cd document-server-integration/web/documentserver-example/go
git submodule update --init --depth 1 .
```

## 步骤2. 配置连接

打开 `config/configuration.json` 文件并编辑以下键：

```json
{
  "SERVER_ADDRESS": "",
  "DOC_SERVER_HOST": "http://documentserver/",
  "JWT_IS_ENABLED": false,
  "JWT_SECRET": "secret",
  "STORAGE_PATH": "filestore"
}
```

- `DOC_SERVER_HOST`：安装了 ONLYOFFICE 文档的服务器地址。请将 `documentserver` 替换为该服务器的名称或 IP 地址。
- `STORAGE_PATH`：示例创建和存储文件的文件夹。该文件夹创建在示例的 `static` 文件夹中，因此请设置一个相对路径。运行示例的用户需要对该文件夹具有读写权限。
- `JWT_IS_ENABLED` 和 `JWT_SECRET`：必须与 ONLYOFFICE 文档的 JWT 设置一致。ONLYOFFICE 文档默认启用 JWT，因此请将 `JWT_IS_ENABLED` 设置为 `true`，并将 `JWT_SECRET` 的值替换为您服务器的[密钥](/docs/docs-api/additional-api/signature/signature.md)。
- `SERVER_ADDRESS`：ONLYOFFICE 文档访问示例时使用的地址，需包含协议和端口，且末尾不带斜杠，例如 `http://192.168.1.10:3000`。如果 ONLYOFFICE 文档在另一台计算机上或在 Docker 中运行，则需要设置此项，因为您在浏览器中打开的地址（例如 `localhost`）在那里指向的是其他位置。

每个键也可以通过同名的环境变量设置，例如 `JWT_SECRET`。环境变量会覆盖文件中的值。

如果您想尝试配置编辑器，请修改 `server/managers/default/document.go` 文件中的[参数](/docs/docs-api/usage-api/advanced-parameters.md)，示例在该文件中构建编辑器配置。

## 步骤3. 安装依赖项并运行示例

请在示例文件夹中运行以下命令，因为示例会从当前文件夹加载其模板和文件：

```sh
go mod download
go run main.go
```

在浏览器中打开 `http://localhost:3000`。如需使用其他端口，请修改 `config/configuration.json` 中的 `SERVER_PORT`。您将看到示例的起始页面，可以在其中上传文件，或者新建文档、电子表格、演示文稿或 PDF 表单。

## 故障排除

- **文档安全令牌的格式不正确**：示例中未启用 JWT（`JWT_IS_ENABLED` 为 `false`），或者 `JWT_SECRET` 与 ONLYOFFICE 文档的密钥不一致。
- **下载失败**：ONLYOFFICE 文档无法访问示例。请在 `config/configuration.json` 中将 `SERVER_ADDRESS` 设置为 ONLYOFFICE 文档可以解析的地址。
