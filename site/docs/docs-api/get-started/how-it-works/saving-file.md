---
sidebar_position: -21
---

# Saving file

The figure and steps below explain how a document is saved in ONLYOFFICE Docs.

![Saving File](/assets/images/editor/saving.jpg)

1. The user edits the document in the **document editor**.

2. The **document editor** sends the changes to the **document editing service**.

3. The user closes the **document editor**.

4. The **document editing service** detects that all users have finished editing and compiles the changes received from the **document editor** into the final document.

5. The **document editing service** informs the **document storage service** that editing is complete using the [`callbackUrl`](../../usage-api/config/editor/editor.md#callbackurl) and returns the link to the modified document as the [`url`](../../usage-api/callback-handler.md#url) parameter.

   :::note
   Since version 5.5, `callbackUrl` is selected based on the [status](../../usage-api/callback-handler.md#status) of the request. From version 4.4 to version 5.5, the `callbackUrl` from the last user who joined the co-editing session is used. Prior to version 4.4, the `callbackUrl` from the user who first opened the file for editing is used.
   :::

6. The **document storage service** downloads the document file with all the saved changes from the **document editing service** and stores it.

## How this can be done in practice

1. Create a [callback handler](../../usage-api/callback-handler.md) to save the document from the **document editing service**.

2. Create an `.html` file to [open the document](./opening-file.md#how-this-can-be-done-in-practice).

3. In the editor initialization config, add the URL of your callback handler as the [`callbackUrl`](../../usage-api/config/editor/editor.md#callbackurl) parameter. Be sure to add a [`token`](./security.md) — otherwise, the request will be rejected.

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document Title.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     editorConfig: {
       callbackUrl: "https://example.com/url-to-callback.ashx",
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWNhbGxiYWNrLmFzaHgifX0.vbezS2aM8Xf8qFzIAsO-jrIsi7VLxjRYkIkwh5jLTJU",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   Replace `example.com` with the host serving your document file — i.e., your **document storage service**.

4. Open your `.html` file in the browser and edit the document.

5. Close the **document editor**. After about 10 seconds, verify that the document contains your changes — if it does, the configuration is correct.

## Save delay

Once editing is finished, the **document editing service** informs the **document storage service**. The total time before this happens depends on two factors:

- **Conversion time** — the edited file is converted into one of the editors' native formats (`.docx`, `.xlsx`, `.pptx`, or `.pdf`). This varies with file size, complexity, and server performance.
- **Conversion start delay** — 5 seconds by default. This delay allows the user to return to the editing session without triggering a save — for example, when reloading the browser page while the file is still open.

In most cases, the save completes about 10 seconds after editing ends. The default delay is defined by the [`savetimeoutdelay`](../configuration/server-config/server.md#servicescoauthoringserversavetimeoutdelay) parameter in the [ONLYOFFICE Docs server configuration](../configuration/server-config/intro.md).

## Force saving

The **document editing service** allows you to get the current document state before editing is finished. This process is called *forcesave* in ONLYOFFICE Docs. When forcesave is initiated, the **document editing service** sends a request to the [callback handler](../../usage-api/callback-handler.md) with the link to the document as the `url` parameter and the `status` parameter set to `6`. The forcesave process can be initiated in the following ways:

- By sending a request to the [document command service](../../additional-api/command-service/command-service.md) with the [forcesave](../../additional-api/command-service/forcesave.md) value in the `c` parameter. The `forcesavetype` parameter will be `0` in the callback handler request.

- By enabling the [editorConfig.customization.forcesave](../../usage-api/config/editor/customization/customization-standard-branding.md#forcesave) mode (set it to `true` in the editor initialization config). Each time the user clicks **Save**, a forcesave is triggered, and the `forcesavetype` parameter will be `1` in the callback handler request.

- By enabling automatic repeating forcesave via the [auto assembly](../configuration/server-config/auto-assembly.md) server configuration. The `forcesavetype` parameter will be `2` in the callback handler request.

  :::info
  The auto assembly feature saves the current state of the file at that moment. If a user is in strict mode and has not clicked **Save**, their changes will not be included in the assembled file. In PDF format, strict mode is enabled by default.
  :::

:::note
Document versions created by forcesave do not appear in the document history. ONLYOFFICE Docs [highlights changes](./document-history.md#how-this-can-be-done-in-practice) made from the beginning of the current editing session, not from the beginning of each document version. Even if several document versions are created during one session, all changes from that session will be highlighted.
:::

## Saving in original format

Since version 7.0, the [`assemblyFormatAsOrigin`](../configuration/server-config/server.md#servicescoauthoringserverassemblyformatasorigin) server setting is enabled by default to save the assembled file in its original format. This is used to convert from OOXML to ODF or to preserve files with macros.

This parameter works as follows:

1. The **document editing service** returns the file in one of the native formats: `.docx`, `.xlsx`, `.pptx`, or `.pdf`.
2. If `assemblyFormatAsOrigin` is `true`, the **document editing service** tries to convert the file back to the original format.
3. If the original format is legacy (for example, `.doc`) and the conversion fails, the **document editing service** shows a *rollback to save changes to ooxml* warning and keeps the file in the native format.
4. If `assemblyFormatAsOrigin` is `false`, the **document editing service** does not convert the file and returns it in the native format.

:::warning
This setting can break integrations that open documents without prior conversion (for example, the `.doc` format, which is not available for saving in ONLYOFFICE Docs). Disable this setting if necessary.
:::
