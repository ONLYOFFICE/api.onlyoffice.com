---
sidebar_position: -5
---

# 工作原理

对最终用户而言，使用 ONLYOFFICE 文档 查看、编辑和保存文档是一个简单的过程。对集成商而言，了解打开、保存或上传文档时幕后发生的具体过程，有助于构建和调试集成。

## 用户与文档的交互

用户与文档的交互在客户端和服务器端均会发生，其中部分组件属于 **ONLYOFFICE 文档**，其他组件则由集成商提供。下面将解释本说明文档中使用的主要术语。

客户端包括：

- **文档管理器**：基于浏览器的界面，显示用户可访问的文档列表，用户可以在其中选择文档并对其执行操作（根据所提供的权限，用户可以查看、编辑或与其他用户共享该文档）。打开文档时，文档管理器会通过编辑器 [`config`](../../usage-api/config/config.md) 将该文档的 [`key`](../../usage-api/config/document/document.md#key) 和 [`url`](../../usage-api/config/document/document.md#url) 传递给**文档编辑器**。
- **文档编辑器**：用于查看和编辑文档的用户界面，具备常见的文档编辑功能；它与**文档编辑服务**进行通信。

服务器端包括：

- **文档存储服务**：一种服务器服务，用于存储所有用户有权访问的文档。**文档编辑服务**会根据编辑器 [`config`](../../usage-api/config/config.md) 中提供的 [`url`](../../usage-api/config/document/document.md#url)，从该服务下载文档。
- **文档编辑服务**：一种服务器服务，允许用户进行文档的查看和编辑（前提是用户拥有相应的权限）。**文档编辑器**是**文档编辑服务**面向用户的界面。
- **文档命令服务**：一种服务器服务，用于管理**文档编辑服务**中的文档：强制保存、断开用户连接、请求文档状态、更新元数据或管理遗留文件。
- **文档转换服务**：一种服务器服务，用于在支持的格式之间转换文档文件，以便进行编辑或下载，包括编辑器本身使用的原生格式：文本文档为 `.docx`、电子表格为 `.xlsx`、演示文稿为 `.pptx`、PDF 为 `.pdf`。
- **文档构建服务**：一种服务器服务，无需运行文档编辑器即可轻松构建文档。

:::note
ONLYOFFICE 文档包括**文档编辑器**、**文档编辑服务**、**文档命令服务**、**文档转换服务**和**文档构建服务**。**文档管理器**和**文档存储服务**必须由集成商提供。可以是 **ONLYOFFICE Apps**、您在自己服务器上的实现，或 ONLYOFFICE 文档附带的 **Node.js 测试示例**（仅用于测试，参见 [Node.js 示例](../../samples/language-specific-examples/nodejs-example.md)）。
:::

## 服务器组件

ONLYOFFICE 文档的服务器端使用 [Node.js](https://nodejs.org/) 编写，以三个进程运行：

| 进程 | 服务 | 作用 |
| ---- | ---- | ---- |
| DocService | **文档编辑服务**、**文档命令服务**、**文档转换服务**和**文档构建服务**的入口 | 与**文档编辑器**保持 WebSocket（[Socket.IO](../configuration/server-config/server-config.md#socket-io)）连接，并在协作编辑者之间传递更改。提供 HTTP API：对[回调处理程序](../../usage-api/callback-handler.md)的请求、[命令服务](../../additional-api/command-service/command-service.md)、[转换 API](../../additional-api/conversion-api/conversion-api.md)、[Document Builder API](../../additional-api/document-builder-api.md) 和 [WOPI](../../using-wopi/overview.md)。检查[令牌](./security.md)并删除过期的[文档缓存](./data-retention.md)。 |
| FileConverter | **文档转换服务**、**文档构建服务** | 从消息队列中获取任务，下载源文件，并运行原生 C++ 引擎：`x2t` 用于转换文件，`docbuilder` 用于运行 Document Builder 脚本。将结果上传到缓存。 |
| Metrics | — | 一个 [StatsD](../configuration/server-config/server-config.md#statsd) 服务器，接收来自 DocService 和 FileConverter 的指标，并将其转发到后端，例如 Graphite。指标默认处于禁用状态。 |

DocService 和 FileConverter 使用以下外部服务：

- **数据库**：默认为 PostgreSQL，也可以是 MySQL、MariaDB、MS SQL Server、Oracle 或 Dameng。参见 [SQL](../configuration/server-config/server-config.md#sql)。
- **消息代理**：默认为 RabbitMQ，也可以是 ActiveMQ。它将转换任务从 DocService 传递给 FileConverter。参见[队列](../configuration/server-config/server-config.md#queues)。
- **Redis**（如已配置）。参见 [Redis](../configuration/server-config/server-config.md#redis)。
- **缓存存储**：本地文件系统、Amazon S3 或 Azure Blob Storage。参见[文档存储服务](../configuration/server-config/server-config.md#document-storage-service)。

管理面板和 [Node.js 测试示例](../../samples/language-specific-examples/nodejs-example.md)是独立的 Node.js 应用程序。

Node.js 不运行**文档编辑器**，也不执行转换本身。**文档编辑器**是在用户浏览器中运行的 JavaScript，文件由原生 `x2t` 和 `docbuilder` 引擎进行转换和构建。

### Node.js 运行时

在 Linux 和 Windows 安装包以及 Docker 镜像中，每个进程都使用 [pkg](https://github.com/yao-pkg/pkg) 编译为包含 Node.js 运行时的独立可执行文件。服务器上无需安装 Node.js，其版本随 ONLYOFFICE 文档一起更新。从 10.0.2 版本开始，可执行文件包含 Node.js 24。从源代码构建 ONLYOFFICE 文档需要 Node.js 24 或更高版本。
