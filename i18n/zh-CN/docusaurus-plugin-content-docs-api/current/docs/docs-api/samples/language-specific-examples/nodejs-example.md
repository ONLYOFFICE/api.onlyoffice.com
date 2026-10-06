---
sidebar_position: -11
description: 运行 ONLYOFFICE 文档 Node.js 集成示例，并将其连接到您的 ONLYOFFICE 文档服务器。
tags: ["Docs", "Integration", "Node.js"]
---

# Node.js 集成

Node.js 集成示例是一个小型 Express 应用程序，它可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。在编写您自己的集成之前，运行此示例即可看到一个完整可用的集成。

:::warning
本示例仅用于测试。它没有身份验证，不检查链接参数和保存请求，并接受来自任何网站的请求，因此任何能够访问它的人都可以读取和修改其中的文件。请勿在公共服务器上运行此示例，并在投入生产环境之前将其禁用。
:::

## 先决条件

- **ONLYOFFICE 文档**：[自托管版](https://www.onlyoffice.com/download?from=api#docs-developer)或[云版](https://www.onlyoffice.com/zh/docs-registration?from=api)。
- **Node.js**：请参阅[官方网站](https://nodejs.org/en/download/)。
- **Git**：请参阅[官方网站](https://git-scm.com/downloads)。

## 步骤1. 下载示例

克隆[示例仓库](https://github.com/ONLYOFFICE/document-server-integration/tree/main/web/documentserver-example/nodejs)，进入 Node.js 示例目录，并获取其子模块：

```sh
git clone --depth 1 https://github.com/ONLYOFFICE/document-server-integration
cd document-server-integration/web/documentserver-example/nodejs
git submodule update --init --depth 1 .
```

## 步骤2. 配置连接

打开 `config/default.json` 文件并编辑以下键。它们都位于 `server` 对象中：

```json
{
  "server": {
    "siteUrl": "http://documentserver/",
    "storageFolder": "./files",
    "exampleUrl": null,
    "token": {
      "enable": true,
      "secret": "secret"
    }
  }
}
```

- `siteUrl`：安装了 ONLYOFFICE 文档的服务器地址。请将 `documentserver` 替换为该服务器的名称或 IP 地址。
- `storageFolder`：示例创建和存储文件的文件夹。您可以设置一个绝对路径。在 JSON 中，每个反斜杠都需要转义，例如 `D:\\folder`。运行示例的用户需要对该文件夹具有读写权限。
- `token.enable` 和 `token.secret`：必须与 ONLYOFFICE 文档的 JWT 设置一致。ONLYOFFICE 文档默认启用 JWT，因此请将 `enable` 设置为 `true`，并将 `secret` 的值替换为您服务器的[密钥](/docs/docs-api/additional-api/signature/signature.md)。
- `exampleUrl`：ONLYOFFICE 文档访问示例时使用的地址。如果 ONLYOFFICE 文档在另一台计算机上或在 Docker 中运行，则需要设置此项，因为您在浏览器中打开的地址（例如 `localhost`）在那里指向的是其他位置。

如果您想尝试配置编辑器，请修改 `views/config.ejs` 文件中的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

## 步骤3. 安装依赖项并运行示例

```sh
npm install
npm start
```

在浏览器中打开 `http://localhost:3000`。您将看到示例的起始页面，可以在其中上传文件，或者新建文档、电子表格、演示文稿或 PDF 表单。

## 故障排除

- **文档安全令牌的格式不正确**：示例中未启用 JWT（`token.enable` 为 `false`），或者 `token.secret` 与 ONLYOFFICE 文档的密钥不一致。
- **下载失败**：ONLYOFFICE 文档无法访问示例。请在 `config/default.json` 中将 `exampleUrl` 设置为 ONLYOFFICE 文档可以解析的地址。
