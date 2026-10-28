---
sidebar_position: -12
description: 使用 ONLYOFFICE Create App 生成 Next.js 集成示例，并将其连接到您的 ONLYOFFICE 文档服务器。
tags: ["Docs", "Integration", "Node.js", "React"]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create App 集成

[ONLYOFFICE Create App](https://www.npmjs.com/package/@onlyoffice/create-app) 是一个命令行工具，只需一条命令即可生成一个可直接运行的集成示例，就像 `create-next-app` 生成 Next.js 网站一样。生成的项目是一个使用 Next.js、React 和 TypeScript 构建的小型文件管理器，它可以列出文件、在 ONLYOFFICE 文档中打开文件，并通过回调处理程序将其保存回来。生成此项目即可看到一个完整可用的集成，然后以其代码为基础构建您自己的集成。

生成的应用程序可以：

- 上传、下载和删除文件；
- 根据 [ONLYOFFICE 文档模板](https://github.com/ONLYOFFICE/document-templates)新建空白文档、电子表格、演示文稿和 PDF 表单；
- 在编辑器中打开每个文件，对于只能查看的格式，则在查看器中打开；
- 使用 JWT 签署编辑器配置，并在回调中验证 JWT；
- 将编辑后的文档保存回磁盘。

该工具和应用程序的源代码位于 [create-app](https://github.com/ONLYOFFICE/create-app) 仓库中。

:::warning
本示例仅用于测试。它没有身份验证，以单个演示用户的身份打开所有文件，并向任何请求者提供文件，因此任何能够访问它的人都可以读取和修改其中的文件。请勿在公共服务器上运行此示例，也不要将其直接用于生产环境。
:::

## 先决条件

- **ONLYOFFICE 文档**：9.3 或更高版本，[自托管版](https://www.onlyoffice.com/download?from=api#docs-developer)或[云版](https://www.onlyoffice.com/zh/docs-registration?from=api)。Create App 不会安装 ONLYOFFICE 文档。ONLYOFFICE 文档必须能够访问运行应用程序的计算机。
- **Node.js**：20.12 或更高版本，请参阅[官方网站](https://nodejs.org/en/download/)。

如需在本地试用此应用程序，您可以在 [Docker](https://docs.docker.com/get-started/get-docker/) 中启动 ONLYOFFICE 文档：

```sh
docker run -i -t -d -p 80:80 --restart=always \
  -e JWT_SECRET=developer-only-not-a-real-secret \
  -e ALLOW_PRIVATE_IP_ADDRESS=true \
  onlyoffice/documentserver
```

- `JWT_SECRET`：ONLYOFFICE 文档的[密钥](/docs/docs-api/additional-api/signature/signature.md)。生成的应用程序默认使用相同的值。
- `ALLOW_PRIVATE_IP_ADDRESS`：允许 ONLYOFFICE 文档从私有 IP 地址（例如您计算机的局域网地址）下载文件。默认情况下，ONLYOFFICE 文档会拒绝此类请求。

## 步骤 1. 创建项目

运行 Create App 并指定项目文件夹的名称。请选择适用于您的包管理器的命令：

<Tabs>
  <TabItem value="npx" label="npx" default>
    ```sh
    npx @onlyoffice/create-app my-docs-app
    ```
  </TabItem>
  <TabItem value="npm" label="npm">
    ```sh
    npm init @onlyoffice/app my-docs-app
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```sh
    pnpm create @onlyoffice/app my-docs-app
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```sh
    yarn create @onlyoffice/app my-docs-app
    ```
  </TabItem>
</Tabs>

如果 npm 询问是否安装 `@onlyoffice/create-app` 包，请输入 `y` 确认。如果省略文件夹名称，该工具会提示您输入。该文件夹必须为空或尚不存在。

然后进入项目文件夹：

```sh
cd my-docs-app
```

该工具会将应用程序复制到文件夹中，根据 `.env.example` 创建 `.env` 文件，并安装依赖项。它不会创建 Git 仓库。

该工具支持以下选项：

- `--skip-install`：不安装依赖项。
- `--use-npm`、`--use-pnpm`、`--use-yarn`、`--use-bun`：使用指定的包管理器安装依赖项。默认情况下，该工具使用运行它的包管理器。
- `-v`、`--version`：显示该工具的版本。
- `-h`、`--help`：显示帮助信息。

## 步骤 2. 配置连接

打开 `.env` 文件并编辑以下变量：

```ini
DOCUMENT_SERVER_URL=http://localhost/
DOCUMENT_SERVER_JWT_SECRET=developer-only-not-a-real-secret
APP_URL=http://localhost:3000
```

- `DOCUMENT_SERVER_URL`：浏览器访问 ONLYOFFICE 文档时使用的地址。浏览器从该地址加载编辑器。
- `DOCUMENT_SERVER_JWT_SECRET`：必须与 ONLYOFFICE 文档的[密钥](/docs/docs-api/additional-api/signature/signature.md)一致。如果 ONLYOFFICE 文档在 Docker 中运行，请使用容器变量 `JWT_SECRET` 的值。仅当 ONLYOFFICE 文档中禁用了 JWT 时，才可将其留空。
- `APP_URL`：ONLYOFFICE 文档访问应用程序以下载文件和发送回调时使用的地址。只有当两者在同一台计算机上运行且未使用容器时，`http://localhost:3000` 才有效。如果 ONLYOFFICE 文档在 Docker 中或在另一台计算机上运行，因为 `localhost` 在那里指向的是其他位置，请使用您计算机的局域网地址，例如 `http://192.168.1.10:3000`。

以下变量为可选项：

- `DOCUMENT_SERVER_INTERNAL_URL`：应用程序服务器访问 ONLYOFFICE 文档时使用的地址。仅当它与 `DOCUMENT_SERVER_URL` 不同时（例如在 Docker 网络内部）才需要设置。
- `DOCUMENT_SERVER_JWT_HEADER`：ONLYOFFICE 文档用于发送令牌的 HTTP 标头。默认值为 `Authorization`。
- `DOCS_LANG`：编辑器界面语言，例如 `en-US`、`de-DE` 或 `zh-CN`。
- `DEMO_USER_ID` 和 `DEMO_USER_NAME`：打开编辑器的用户。
- `STORAGE_DIR`：应用程序存储文件的文件夹。默认值为 `storage`。您可以设置相对路径或绝对路径。
- `ALLOWED_DEV_ORIGINS`：可以打开开发服务器的其他主机名，以逗号分隔。`APP_URL` 的主机始终被允许。

更改 `.env` 后，请重新启动应用程序。使用 `npm start` 时，应用程序只读取一次设置，并在停止运行前一直使用这些设置。开发服务器仅在启动时读取 `ALLOWED_DEV_ORIGINS`。

如果您想尝试配置编辑器，请修改 `src/lib/editor-config.ts` 文件中的[参数](/docs/docs-api/usage-api/advanced-parameters.md)。

## 步骤 3. 运行应用程序

```sh
npm start
```

此命令会构建应用程序并在 3000 端口上启动它。如需改为启动支持热重载的开发服务器，请运行 `npm run dev`。

首次启动时，应用程序会从 [document-templates](https://github.com/ONLYOFFICE/document-templates) 仓库将用于新建文件的空白文档下载到 `document-templates/new` 文件夹中，因此需要联网一次。如需重新下载，请运行 `npm run fetch-templates`。如需更改新文件的外观，请替换已下载的文件。

在浏览器中打开 `APP_URL` 地址，例如 `http://localhost:3000` 或 `http://192.168.1.10:3000`。使用应用程序期间，请保持终端运行。您将看到文件管理器，可以在其中上传文件，或者新建文档、电子表格、演示文稿或 PDF 表单，然后单击文件即可在编辑器中打开。

## 应用程序的工作原理

该应用程序遵循[工作原理](/docs/docs-api/get-started/how-it-works/how-it-works.md)中描述的标准集成流程：

1. 浏览器打开应用程序的编辑器页面，并从 `/api/editor-config` 请求编辑器配置。应用程序构建[配置](/docs/docs-api/usage-api/config/config.md)并使用 JWT 对其进行签名。
2. 浏览器从 ONLYOFFICE 文档加载编辑器，并使用 [React 组件](/docs/docs-api/get-started/frontend-frameworks/react.md)打开文件。
3. ONLYOFFICE 文档从 [`document.url`](/docs/docs-api/usage-api/config/document/document.md#url) 地址 `/api/files/<file>/download` 下载文件。
4. 当最后一个用户关闭编辑器时，ONLYOFFICE 文档会向[回调处理程序](/docs/docs-api/usage-api/callback-handler.md) `/api/callback` 发送请求。应用程序验证令牌，从 ONLYOFFICE 文档下载编辑后的文件，并替换已存储的文件。

应用程序会向 ONLYOFFICE 文档查询其支持的格式（`GET /meta/formats`）。具有 `edit` 或 `lossy-edit` 操作的格式在编辑器中打开，仅具有 `view` 操作的格式在查看器中打开。应用程序不接受上传不受支持格式的文件。

应用程序根据文件名、文件大小和修改时间生成 [`document.key`](/docs/docs-api/usage-api/config/document/document.md#key)。只要文件未更改，该密钥就保持不变，因此所有打开该文件的用户都会共同编辑同一个文档；每次保存后，该密钥都会更改。这样，应用程序无需数据库。

集成代码位于以下文件中：

| 文件 | 用途 |
| ---- | ---- |
| `src/app/api/editor-config/route.ts` | 向浏览器返回已签名的编辑器配置。 |
| `src/lib/editor-config.ts` | 构建编辑器配置。 |
| `src/lib/jwt.ts` | 签署和验证 JWT。 |
| `src/lib/document-key.ts` | 生成文档密钥。 |
| `src/lib/formats.ts` | 请求支持的格式，并决定以编辑还是查看方式打开文件。 |
| `src/components/Editor.tsx` | 使用 React 组件打开编辑器。 |
| `src/app/api/callback/route.ts` | 处理回调并保存编辑后的文件。 |
| `src/app/api/files/[name]/download/route.ts` | 向 ONLYOFFICE 文档和用户返回文件。 |
| `src/app/api/files/` | 上传、新建和删除文件。 |
| `src/lib/storage.ts` | 将文件存储在磁盘上。它先将每个文件写入临时文件，然后再重命名，因此 ONLYOFFICE 文档永远不会下载写入了一半的文件。 |
| `src/lib/env.ts` | 读取并验证 `.env` 中的设置。 |
| `scripts/fetch-templates.mjs` | 下载空白文档。 |

应用程序将文件存储在本地磁盘上，并直接修改原文件，不保留版本历史记录。强制保存已禁用，因此 ONLYOFFICE 文档会在最后一个用户关闭文档后保存文档。

## 故障排除

- **文档安全令牌的格式不正确**：`DOCUMENT_SERVER_JWT_SECRET` 为空，或者与 ONLYOFFICE 文档的密钥不一致。
- **下载失败**：ONLYOFFICE 文档无法访问应用程序。请在 `.env` 中将 `APP_URL` 设置为 ONLYOFFICE 文档可以解析的地址。如果该地址是私有 IP 地址，请使用 `ALLOW_PRIVATE_IP_ADDRESS=true` 启动 ONLYOFFICE 文档。
- **编辑器无法加载**：浏览器无法访问 ONLYOFFICE 文档。请检查能否在浏览器中打开 `DOCUMENT_SERVER_URL`。
- **页面可以打开，但按钮不起作用**：您通过不被允许的地址打开了开发服务器。请将该地址的主机名添加到 `.env` 中的 `ALLOWED_DEV_ORIGINS`，或使用 `npm start` 运行应用程序。
- **无法新建文件**：空白文档未下载。请检查网络连接并运行 `npm run fetch-templates`。

如需报告问题或提出改进建议，请在 [create-app](https://github.com/ONLYOFFICE/create-app/issues) 仓库中提交 issue，或通过 support@onlyoffice.com 联系我们。
