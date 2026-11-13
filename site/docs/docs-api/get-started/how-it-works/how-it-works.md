---
sidebar_position: -5
---

# How it works

For the end user, viewing, editing, and saving documents with ONLYOFFICE Docs is a simple process. For integrators, understanding what happens behind the scenes when a document is opened, saved, or uploaded helps when building and debugging an integration.

## User-document interaction

User-document interaction happens on both the client side and the server side, with some components being part of **ONLYOFFICE Docs** and others provided by the integrator. The main terms used throughout this documentation are explained below.

The client side includes:

- **Document manager** - the browser-based interface that displays the list of documents available to the user, where the user can select a document and perform actions with it (depending on the provided rights, the user can view, edit, or share it with other users). When a document is opened, the manager passes that document's [`key`](../../usage-api/config/document/document.md#key) and [`url`](../../usage-api/config/document/document.md#url) to the **document editor** in the editor [`config`](../../usage-api/config/config.md).
- **Document editor** - the user interface for viewing and editing documents with common document editing features; it communicates with the **document editing service**.

The server side includes:

- **Document storage service** - the server service that stores all documents available to users with the appropriate access rights. The **document editing service** downloads a document from here using the [`url`](../../usage-api/config/document/document.md#url) supplied in the editor [`config`](../../usage-api/config/config.md).
- **Document editing service** - the server service that allows users to view and edit documents (provided that the user has the appropriate rights). The **document editor** is the user-facing interface for the **document editing service**.
- **Document command service** - the server service used to manage documents in the **document editing service**: force-save, disconnect users, request document status, update metadata, or manage forgotten files.
- **Document conversion service** - the server service that converts document files between supported formats for editing or downloading, including the editors' native formats: `.docx` for documents, `.xlsx` for spreadsheets, `.pptx` for presentations, and `.pdf` for PDFs.
- **Document builder service** - the server service that allows you to build a document easily without running a document editor.

:::note
ONLYOFFICE Docs includes the **document editor**, **document editing service**, **document command service**, **document conversion service**, and **document builder service**. The **document manager** and **document storage service** must be provided by an integrator. This can be **ONLYOFFICE Apps**, your own implementation on your server, or the **Node.js test example** bundled with ONLYOFFICE Docs (intended for testing only — see the [Node.js example](../../samples/language-specific-examples/nodejs-example.md)).
:::

## Server components

The server side of ONLYOFFICE Docs is written in [Node.js](https://nodejs.org/) and runs as three processes:

| Process | Services | What it does |
| ------- | -------- | ------------ |
| DocService | **Document editing service**, **document command service**, entry point of the **document conversion service** and **document builder service** | Keeps the WebSocket ([Socket.IO](../configuration/server-config/server-config.md#socket-io)) connections with the **document editors** and passes changes between co-editors. Serves the HTTP APIs: requests to the [callback handler](../../usage-api/callback-handler.md), the [command service](../../additional-api/command-service/command-service.md), the [conversion API](../../additional-api/conversion-api/conversion-api.md), the [Document Builder API](../../additional-api/document-builder-api.md), and [WOPI](../../using-wopi/overview.md). Checks [tokens](./security.md) and deletes the expired [document cache](./data-retention.md). |
| FileConverter | **Document conversion service**, **document builder service** | Takes tasks from the message queue, downloads the source file, and runs the native C++ engine: `x2t` to convert files, `docbuilder` to run Document Builder scripts. Uploads the result to the cache. |
| Metrics | — | A [StatsD](../configuration/server-config/server-config.md#statsd) server that receives metrics from DocService and FileConverter and forwards them to a backend, such as Graphite. Metrics are disabled by default. |

DocService and FileConverter use the following external services:

- **Database**: PostgreSQL by default, or MySQL, MariaDB, MS SQL Server, Oracle, or Dameng. See [SQL](../configuration/server-config/server-config.md#sql).
- **Message broker**: RabbitMQ by default, or ActiveMQ. It passes conversion tasks from DocService to FileConverter. See [Queues](../configuration/server-config/server-config.md#queues).
- **Redis**, if configured. See [Redis](../configuration/server-config/server-config.md#redis).
- **Cache storage**: the local file system, Amazon S3, or Azure Blob Storage. See [Document storage service](../configuration/server-config/server-config.md#document-storage-service).

The Admin Panel and the [Node.js test example](../../samples/language-specific-examples/nodejs-example.md) are separate Node.js applications.

Node.js does not run the **document editor** or the conversion itself. The **document editor** is JavaScript that runs in the user's browser, and files are converted and built by the native `x2t` and `docbuilder` engines.

### Node.js runtime

In the Linux and Windows packages and in the Docker images, each process is compiled with [pkg](https://github.com/yao-pkg/pkg) into a standalone executable that includes the Node.js runtime. Node.js does not need to be installed on the server, and its version is updated together with ONLYOFFICE Docs. Starting from version 10.0.2, the executables include Node.js 24. Building ONLYOFFICE Docs from source requires Node.js 24 or later.
