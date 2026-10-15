---
sidebar_position: -3
description: 运行 ONLYOFFICE 文档 PHP Laravel 集成示例，并将其连接到您的 ONLYOFFICE 文档服务器。
tags: ["Docs", "Integration", "PHP"]
---

# PHP Laravel 集成

PHP Laravel 集成示例是一个小型 Laravel 应用程序，它可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。它的 Docker 配置还会启动 ONLYOFFICE 文档，因此在编写您自己的集成之前，您可以看到一个完整可用的集成。

:::warning
本示例仅用于测试。它没有身份验证，不检查链接参数和保存请求，并接受来自任何网站的请求，因此任何能够访问它的人都可以读取和修改其中的文件。请勿在公共服务器上运行此示例，并在投入生产环境之前将其禁用。
:::

## 先决条件

- **Docker 和 Docker Compose**：请参阅[官方网站](https://docs.docker.com/get-started/get-docker/)。
- **Git**：请参阅[官方网站](https://git-scm.com/downloads)。
- **ONLYOFFICE 文档**：可选，因为 Docker 配置会启动自己的 ONLYOFFICE 文档。如需使用您自己的服务器，请获取[自托管版](https://www.onlyoffice.com/download?from=api#docs-developer)或[云版](https://www.onlyoffice.com/zh/docs-registration?from=api)。

## 步骤1. 下载示例

克隆[示例仓库](https://github.com/ONLYOFFICE/document-server-integration/tree/main/web/documentserver-example/php-laravel)，进入 PHP Laravel 示例目录，并获取其子模块：

```sh
git clone --depth 1 https://github.com/ONLYOFFICE/document-server-integration
cd document-server-integration/web/documentserver-example/php-laravel
git submodule update --init --depth 1 .
```

## 步骤2. 配置连接

根据模板创建 `.env` 文件：

```sh
cp .env.example .env
```

默认值可直接使用：Docker Compose 会在示例旁启动 ONLYOFFICE 文档，并向其传递相同的 JWT 密钥。如需改为连接您自己的 ONLYOFFICE 文档服务器，请编辑 `.env` 中的以下变量：

```ini
DOCUMENT_SERVER_PUBLIC_URL=http://localhost:8080
DOCUMENT_SERVER_PRIVATE_URL=http://proxy:8080
DOCUMENT_STORAGE_PRIVATE_URL=http://proxy
DOCUMENT_SERVER_JWT_SECRET=secret
```

- `DOCUMENT_SERVER_PUBLIC_URL` 和 `DOCUMENT_SERVER_PRIVATE_URL`：您的 ONLYOFFICE 文档服务器的地址。
- `DOCUMENT_STORAGE_PRIVATE_URL`：ONLYOFFICE 文档访问示例时使用的地址。名称 `proxy` 只能在 Docker 网络内部解析。
- `DOCUMENT_SERVER_JWT_SECRET`：您服务器的[密钥](/docs/docs-api/additional-api/signature/signature.md)。

如果您想尝试配置编辑器，请修改 `app/Models/Editor/Editor.php` 文件中的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

## 步骤3. 构建并运行示例

```sh
docker compose up -d --build
```

在浏览器中打开 `http://localhost`。您将看到示例的起始页面，可以在其中上传文件，或者新建文档、电子表格、演示文稿或 PDF 表单。

示例的文件（包括 `.env`）会在首次启动时复制到 Docker 卷中。修改这些文件后，请运行 `docker compose down -v`，然后重新启动示例。

## 故障排除

- **文档安全令牌的格式不正确**：示例中未启用 JWT（`DOCUMENT_SERVER_JWT_SECRET` 为空），或者 `DOCUMENT_SERVER_JWT_SECRET` 与 ONLYOFFICE 文档的密钥不一致。如果您在首次启动后修改了该值，请使用 `docker compose down -v` 重新创建卷。
- **下载失败**：ONLYOFFICE 文档无法访问示例。请在 `.env` 中将 `DOCUMENT_STORAGE_PRIVATE_URL` 设置为 ONLYOFFICE 文档可以解析的地址。
- **Laravel 安装或配置问题**：请参阅 [Laravel 文档](https://laravel.com/docs/11.x/deployment#server-configuration)。
