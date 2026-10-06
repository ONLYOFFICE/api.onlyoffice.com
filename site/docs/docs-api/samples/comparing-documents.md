---
sidebar_position: 0
hide_table_of_contents: true
description: Open a document in view mode and compare it with a revised file as soon as the editor loads.
tags: ["Docs", "Integration", "Comparing documents"]
---

import { CompareDocumentsEditor } from '@site/src/components/BrowserWindow';

# Comparing documents

Open a document and compare it with a revised version as soon as the editor loads. The editor opens in view mode, and the comparison starts on its own, without the user clicking **Compare** in the editor.

:::info
The editor opens the original file and, as soon as it is ready, compares it with the revised file. The differences appear as tracked changes.
:::

<CompareDocumentsEditor/>

## How it works

1. The editor opens the original file in view mode:

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "original-key",
       title: "original.docx",
       url: "https://example.com/original.docx",
     },
     documentType: "word",
     editorConfig: {
       mode: "view",
     },
   };
   ```

2. When the editor fires the [onDocumentReady](../usage-api/config/events.md#ondocumentready) event, the [setRequestedDocument](../usage-api/methods.md#setrequesteddocument) method is called with the `compare` type and the URL of the revised file:

   ``` ts
   config.events = {
     onDocumentReady() {
       docEditor.setRequestedDocument({
         c: "compare",
         fileType: "docx",
         url: "https://example.com/revised.docx",
         token: "<token>",
       });
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   If JWT is enabled on the document server, sign the object passed to `setRequestedDocument` with the same secret as the editor config. See [Signature](../additional-api/signature/browser.md#setrequesteddocument) for details.

:::tip
To compare documents on the server without opening an editor, use the [CompareDocuments](/docs/office-api/usage-api/document-api/Api/Methods/CompareDocuments.md) method in [Document Builder](/docs/document-builder/using-cli/comparing-documents.md). The method requires a file opened with `builderJS.OpenTmpFile`, which is available only in Document Builder.
:::
