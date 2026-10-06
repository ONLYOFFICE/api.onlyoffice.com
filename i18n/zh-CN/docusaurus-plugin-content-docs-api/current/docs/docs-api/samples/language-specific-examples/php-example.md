---
sidebar_position: -5
description: 运行 ONLYOFFICE 文档 PHP 集成示例，并将其连接到您的 ONLYOFFICE 文档服务器。
tags: ["Docs", "Integration", "PHP"]
---

# PHP 集成

PHP 集成示例是一个不依赖框架、使用纯 PHP 编写的小型应用程序，它可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。在编写您自己的集成之前，运行此示例即可看到一个完整可用的集成。

:::warning
本示例仅用于测试。它没有身份验证，不检查链接参数和保存请求，并接受来自任何网站的请求，因此任何能够访问它的人都可以读取和修改其中的文件。请勿在公共服务器上运行此示例，并在投入生产环境之前将其禁用。
:::

## 先决条件

- **ONLYOFFICE 文档**：[自托管版](https://www.onlyoffice.com/download?from=api#docs-developer)或[云版](https://www.onlyoffice.com/zh/docs-registration?from=api)。
- **PHP**：请参阅[官方网站](https://www.php.net/downloads)。
- **Composer**：请参阅[官方网站](https://getcomposer.org/download/)。
- **Git**：请参阅[官方网站](https://git-scm.com/downloads)。

## 步骤1. 下载示例

克隆[示例仓库](https://github.com/ONLYOFFICE/document-server-integration/tree/main/web/documentserver-example/php)，进入 PHP 示例目录，并获取其子模块：

```sh
git clone --depth 1 https://github.com/ONLYOFFICE/document-server-integration
cd document-server-integration/web/documentserver-example/php
git submodule update --init --depth 1 .
```

## 步骤2. 配置连接

本示例没有配置文件，而是从环境变量中读取设置。因此，请在下一步运行示例所用的终端中设置这些变量：

```sh
export DOCUMENT_SERVER_PUBLIC_URL=http://documentserver
export STORAGE_PATH=storage
export JWT_SECRET=secret
export EXAMPLE_URL=http://example.com:9000
```

在 Windows 上，请在命令提示符中使用 `set NAME=value`，或在 PowerShell 中使用 `$env:NAME = "value"`，以代替 `export`。

- `DOCUMENT_SERVER_PUBLIC_URL`：安装了 ONLYOFFICE 文档的服务器地址。请将 `documentserver` 替换为该服务器的名称或 IP 地址。默认值为 `http://documentserver`。
- `STORAGE_PATH`：示例创建和存储文件的文件夹。默认值为 `storage`。相对路径以示例目录为基准进行解析，您也可以设置一个绝对路径。运行示例的用户需要对该文件夹具有读写权限。
- `JWT_SECRET`：必须与 ONLYOFFICE 文档的 JWT 密钥一致。如果该值为空（默认情况），示例将禁用 JWT。ONLYOFFICE 文档默认启用 JWT，因此请将 `JWT_SECRET` 设置为您服务器的[密钥](/docs/docs-api/additional-api/signature/signature.md)。
- `EXAMPLE_URL`：ONLYOFFICE 文档访问示例时使用的地址。如果 ONLYOFFICE 文档在另一台计算机上或在 Docker 中运行，则需要设置此项，因为您在浏览器中打开的地址（例如 `localhost`）在那里指向的是其他位置。

如果您想尝试配置编辑器，请修改 `src/views/DocEditorView.php` 文件中 `$config` 数组的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

## 步骤3. 安装依赖项并运行示例

```sh
composer install --no-dev
php -S 0.0.0.0:9000
```

在浏览器中打开 `http://localhost:9000`。您将看到示例的起始页面，可以在其中上传文件，或者新建文档、电子表格、演示文稿或 PDF 表单。

## 使用 Docker 运行

如果您已安装 Docker 和 Docker Compose，也可以将示例与其自带的 ONLYOFFICE 文档以及 nginx 代理一起运行，无需单独的 ONLYOFFICE 文档服务器。在示例目录中运行：

```sh
docker compose up --build --detach
```

在浏览器中打开 `http://localhost`。环境变量在 `docker-compose.yml` 文件中设置。JWT 已启用，密钥为 `your-256-bit-secret`。如果您要更改密钥，请同时更改 `documentserver` 和 `example` 两个服务的 `JWT_SECRET`。

## 故障排除

- **文档安全令牌的格式不正确**：示例中未启用 JWT（`JWT_SECRET` 为空），或者 `JWT_SECRET` 与 ONLYOFFICE 文档的密钥不一致。
- **下载失败**：ONLYOFFICE 文档无法访问示例。请将 `EXAMPLE_URL` 设置为 ONLYOFFICE 文档可以解析的地址，然后重新启动示例。
