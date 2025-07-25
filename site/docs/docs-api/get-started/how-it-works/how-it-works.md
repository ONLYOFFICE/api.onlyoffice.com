---
sidebar_position: -5
---

# How it works

The work with document files in ONLYOFFICE Docs is quite a simple process but it requires some understanding of what is going on when you click your document link to open it in the browser, save the document or upload it from your computer to the document server.

## User-document interaction

The user-document interaction is done both at the client side and at the server side.

Below the main notions used throughout the current documentation are explained.

The client side includes:

- **Document manager** - the list of the documents displayed in the user browser where the user can select the necessary document and perform some actions with it (depending on the provided rights, the user can open the document to view it or edit, share the document with other users).
- **Document editor** - the document viewing and editing interface with all the most known document editing features available, used as a medium between the user and the **document editing service**.

The server side includes:

- **Document storage service** - the server service which stores all the documents available to the users with the appropriate access rights. It provides the document IDs and links to these documents to the **document manager** which the user sees in the browser.
- **Document editing service** - the server service which allows to perform the document viewing and editing (in case the user has the appropriate rights to do that). The **document editor** interface is used to access all the **document editing service** features.
- **Document command service** - the server service which allows to perfom additional commands with **document editing service**.
- **Document conversion service** - the server service which allows to convert the document file into the appropriate Office Open XML format (*docx* for text documents, *xlsx* for spreadsheets and *pptx* for presentations) for their editing or downloading.
- **Document builder service** - the server service which allows to build a document easily without the need to actually run a document processing editor.

Please note, that ONLYOFFICE Docs includes the **document editor**, **document editing service**, **document command service**, **document conversion service** and **document builder service**. The **document manager** and **document storage service** are either included to ONLYOFFICE Workspace or must be implemented by the software integrators which use ONLYOFFICE Docs on their own server.
