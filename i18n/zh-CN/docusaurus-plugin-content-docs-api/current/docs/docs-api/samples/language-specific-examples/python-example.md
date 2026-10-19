---
sidebar_position: -9
description: 运行 ONLYOFFICE 文档 Python 集成示例，并将其连接到您的 ONLYOFFICE 文档服务器。
tags: ["Docs", "Integration", "Python"]
---

# Python 集成

Python 集成示例是一个小型 Django 应用程序，它可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。在编写您自己的集成之前，运行此示例即可看到一个完整可用的集成。

:::warning
本示例仅用于测试。它没有身份验证，不检查链接参数和保存请求，并接受来自任何网站的请求，因此任何能够访问它的人都可以读取和修改其中的文件。请勿在公共服务器上运行此示例，并在投入生产环境之前将其禁用。
:::

## 先决条件

- **ONLYOFFICE 文档**：[自托管版](https://www.onlyoffice.com/download?from=api#docs-developer)或[云版](https://www.onlyoffice.com/zh/docs-registration?from=api)。
- **Python**：3.11.4 或更高版本，请参阅[官方网站](https://www.python.org/downloads/)。
- **libmagic**：`python-magic` 包需要此库，请参阅其[安装说明](https://github.com/ahupp/python-magic#installation)。
- **Git**：请参阅[官方网站](https://git-scm.com/downloads)。

## 步骤1. 下载示例

克隆[示例仓库](https://github.com/ONLYOFFICE/document-server-integration/tree/main/web/documentserver-example/python)，进入 Python 示例目录，并获取其子模块：

```sh
git clone --depth 1 https://github.com/ONLYOFFICE/document-server-integration
cd document-server-integration/web/documentserver-example/python
git submodule update --init --depth 1 .
```

## 步骤2. 配置连接

本示例没有配置文件，而是从环境变量中读取设置。因此，请在下一步运行示例所用的终端中设置这些变量：

```sh
export DOCUMENT_SERVER_PUBLIC_URL=http://documentserver
export STORAGE_PATH=storage
export JWT_SECRET=secret
export EXAMPLE_URL=http://example.com:8000
```

在 Windows 上，请在命令提示符中使用 `set NAME=value`，或在 PowerShell 中使用 `$env:NAME = "value"`，以代替 `export`。

- `DOCUMENT_SERVER_PUBLIC_URL`：安装了 ONLYOFFICE 文档的服务器地址。请将 `documentserver` 替换为该服务器的名称或 IP 地址。如果示例访问 ONLYOFFICE 文档时使用的地址与浏览器不同，还需要将 `DOCUMENT_SERVER_PRIVATE_URL` 设置为该地址。
- `STORAGE_PATH`：示例创建和存储文件的文件夹。默认为示例目录中的 `storage` 文件夹。您可以设置一个绝对路径。运行示例的用户需要对该文件夹具有读写权限。
- `JWT_SECRET`：必须与 ONLYOFFICE 文档的 JWT 设置一致。ONLYOFFICE 文档默认启用 JWT，而只要此变量为空，示例中的 JWT 就处于禁用状态，因此请将其设置为您服务器的[密钥](/docs/docs-api/additional-api/signature/signature.md)。
- `EXAMPLE_URL`：ONLYOFFICE 文档访问示例时使用的地址，末尾不带斜杠。如果 ONLYOFFICE 文档在另一台计算机上或在 Docker 中运行，则需要设置此项，因为您在浏览器中打开的地址（例如 `localhost`）在那里指向的是其他位置。

如果您想尝试配置编辑器，请修改 `src/views/actions.py` 文件中 `edit` 函数里的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

## 步骤3. 安装依赖项并运行示例

创建虚拟环境，将依赖项安装到其中，然后启动服务器：

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install .
python manage.py runserver 0.0.0.0:8000
```

在 Windows 上，请运行 `python -m venv .venv` 和 `.venv\Scripts\activate`，以代替前两条命令。

在浏览器中打开 `http://localhost:8000`。您将看到示例的起始页面，可以在其中上传文件，或者新建文档、电子表格、演示文稿或 PDF 表单。

## 使用 Docker 运行

本示例还包含 Docker Compose 文件，可以将示例与其自带的 ONLYOFFICE 文档一起启动，因此您只需要安装带有 Docker Compose 的 [Docker](https://docs.docker.com/get-started/get-docker/)。完成步骤1后，在示例目录中运行：

```sh
docker compose --file compose-base.yml --file compose-prod.yml up --detach --build
```

在浏览器中打开 `http://localhost`。如需更改步骤2中的设置，请编辑 `compose-base.yml` 文件中 `example` 服务的 `environment` 部分。如果您在此处更改了 `JWT_SECRET`，请同时更改 `documentserver` 服务的该设置。

## 故障排除

- **文档安全令牌的格式不正确**：未设置 `JWT_SECRET`，因此示例中未启用 JWT，或者其值与 ONLYOFFICE 文档的密钥不一致。
- **下载失败**：ONLYOFFICE 文档无法访问示例。请将 `EXAMPLE_URL` 设置为 ONLYOFFICE 文档可以解析的地址，然后重新启动示例。
