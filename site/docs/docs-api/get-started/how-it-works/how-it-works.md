---
sidebar_position: -5
---

# How it works

Working with document files in ONLYOFFICE Docs is quite a simple process, but it requires some understanding of what happens when you click a document link to open it in the browser, save the document, or upload it from your computer to the document server.

## User-document interaction

The user-document interaction is done both at the client side and at the server side.

The main notions used throughout this documentation are explained below.

The client side includes:

- **Document manager** - the list of the documents displayed in the user browser where the user can select the necessary document and perform some actions with it (depending on the provided rights, the user can open the document to view it or edit, share the document with other users).
- **Document editor** - the document viewing and editing interface with all the most known document editing features available, used as a medium between the user and the **document editing service**.

The server side includes:

- **Document storage service** - the server service which stores all the documents available to the users with the appropriate access rights. It provides the document IDs and links to these documents to the **document manager** which the user sees in the browser.
- **Document editing service** - the server service that allows users to view and edit documents (provided that the user has the appropriate rights). The **document editor** interface is used to access all the **document editing service** features.
- **Document command service** - the server service used to manage documents in the **document editing service**: force-save, disconnect users, request document status, update metadata, or recover forgotten files.
- **Document conversion service** - the server service that converts document files to the appropriate Office Open XML format (`.docx` for text documents, `.xlsx` for spreadsheets, and `.pptx` for presentations) for editing or downloading.
- **Document builder service** - the server service that allows you to build a document easily without the need to actually run a document processing editor.

:::note
ONLYOFFICE Docs includes the **document editor**, **document editing service**, **document command service**, **document conversion service**, and **document builder service**. The **document manager** and **document storage service** must be provided by an integrator. This can be **ONLYOFFICE DocSpace**, your own implementation on your server, or the **Node.js test example** bundled with ONLYOFFICE Docs (intended for testing only — see [Docs API integration samples](../../samples/language-specific-examples/language-specific-examples.md)).
:::
