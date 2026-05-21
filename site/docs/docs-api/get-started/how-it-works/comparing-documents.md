---
sidebar_position: -9
---

# Comparing documents

Document comparison highlights the differences between two documents as tracked changes — the user can then accept or reject each one.

The figure and steps below explain the comparison flow.

![Comparing documents](/assets/images/editor/compare.png)

1. Using the **document manager** in the browser, the user opens a document to view or edit it.
2. The **document manager** initializes the **document editor** with a [`config`](../../usage-api/config/config.md) that includes the [`onRequestSelectDocument`](../../usage-api/config/events.md#onrequestselectdocument) event handler.
3. The file is [opened](./opening-file.md) for editing.
4. The user clicks **Document from Storage** in the Compare menu. The **document editor** fires the [`onRequestSelectDocument`](../../usage-api/config/events.md#onrequestselectdocument) event with `data.c` set to `"compare"`.
5. The **document manager** lets the user select a comparison document from storage.
6. The **document manager** calls [`setRequestedDocument`](../../usage-api/methods.md#setrequesteddocument) with the selected document's URL and `c: "compare"` to pass it to the **document editor** for comparison.

## How this can be done in practice

1. Create an `.html` file to [open the document](./opening-file.md#how-this-can-be-done-in-practice).

2. Add the [`onRequestSelectDocument`](../../usage-api/config/events.md#onrequestselectdocument) event handler to the editor config. When the user clicks **Document from Storage** in the Compare menu, this event fires with `data.c` set to `"compare"`. The handler calls [`setRequestedDocument`](../../usage-api/methods.md#setrequesteddocument) with the comparison document:

   ![onRequestSelectDocument](/assets/images/editor/onRequestSelectDocument.png#gh-light-mode-only)![onRequestSelectDocument](/assets/images/editor/onRequestSelectDocument.dark.png#gh-dark-mode-only)

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestSelectDocument(event) {
         docEditor.setRequestedDocument({
           c: event.data.c,
           fileType: "docx",
           token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
           url: "https://example.com/url-to-example-document.docx",
         });
       },
     },
   });
   ```

   :::caution
   The `token` must be signed with your document server's JWT secret — the example token above is signed with a throwaway secret and will not validate on your server. Regenerate it whenever the parameters change. See [security](./security.md) for details.
   :::

3. After the comparison loads, the user can accept or reject changes using the corresponding buttons on the top toolbar.

   ![Accept changes](/assets/images/editor/compare-documents.png#gh-light-mode-only)![Accept changes](/assets/images/editor/compare-documents.dark.png#gh-dark-mode-only)

When the user is done reviewing, the document is [saved](./saving-file.md) with the accepted changes.
