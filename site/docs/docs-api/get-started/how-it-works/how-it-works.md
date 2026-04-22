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
- **Document conversion service** - the server service that converts document files between supported formats for editing or downloading, including the editors' native formats: `.docx` for text documents, `.xlsx` for spreadsheets, `.pptx` for presentations, and `.pdf` for PDFs.
- **Document builder service** - the server service that allows you to build a document easily without running a document editor.

:::note
ONLYOFFICE Docs includes the **document editor**, **document editing service**, **document command service**, **document conversion service**, and **document builder service**. The **document manager** and **document storage service** must be provided by an integrator. This can be **ONLYOFFICE DocSpace**, your own implementation on your server, or the **Node.js test example** bundled with ONLYOFFICE Docs (intended for testing only — see the [Node.js example](../../samples/language-specific-examples/nodejs-example.md)).
:::
