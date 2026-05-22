---
sidebar_position: -22
---

# Opening file

The figure and steps below explain how a document is opened in ONLYOFFICE Docs.

![Opening File](/assets/images/editor/opening.svg)

1. Using the **document manager** in the browser, the user opens a document to view or edit it.
2. The **document manager** initializes the **document editor** with a [`config`](../../usage-api/config/config.md) object that includes the document [`key`](../../usage-api/config/document/document.md#key), [`url`](../../usage-api/config/document/document.md#url), and other required parameters.
3. The **document editor** sends a request to the **document editing service** to open the document, using the `config` received from the **document manager**.
4. The **document editing service** downloads the document file from the **document storage service** using the `url` provided. If the file is not already in one of the editors' native formats (`.docx`, `.xlsx`, `.pptx`, or `.pdf`), it is [converted](./converting-and-downloading-file.md) at this step so the **document editor** can work with it natively.
5. When ready, the **document editing service** transfers the document file to the **document editor**.
6. The **document editor** displays the document file and, if the user has the appropriate rights, allows editing.

After editing is finished, the document is [saved](./saving-file.md).

## How this can be done in practice

1. Create an empty `.html` file.

2. Add the `<div>` element as shown below:

   ``` html
   <div id="placeholder"></div>
   ```

3. Include the ONLYOFFICE Docs JavaScript API script on your page:

   ``` html
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   Where `documentserver` is the name of the server where ONLYOFFICE Docs is installed. The `api.js` script is served by the **document editing service**; it loads the **document editor** and connects it to that same service.

   :::tip
   Don't have a document server yet? [Register](https://www.onlyoffice.com/docs-registration.aspx?from=api) for a free ONLYOFFICE Docs Cloud and use the public IP address or public DNS name of your instance as `documentserver`. You can find them in the **Instances** section of the cloud console.
   :::

4. Add the script that initializes the **document editor** for the `<div>` element, using the configuration for the document you want to open:

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document Title.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCJ9.7IpEJxdOvBQ0kJ8l6ZegIV4tX5vsPbZZCDDVmcFROXc",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   Replace `example.com` with the host serving your document file — i.e., your **document storage service**. In this minimal example, the local `.html` file plays the role of the **document manager** — in a real integration, the manager would build this config dynamically for each user and document. For a quick test without hosting a file yourself, use `https://static.onlyoffice.com/assets/docs/samples/demo.docx` as the `url`.

   :::caution
   When JWT validation is enabled on your document server (the default configuration), the `config` must be signed with a matching [`token`](./security.md). The `token` above matches this exact config but is signed with a throwaway secret — it will not validate on your server, and it must be regenerated whenever the config changes (for example, if you switch `url` to the demo document). Sign with your document server's JWT secret. A token does not bypass network restrictions: if `url` points to a local or private address, the document server must still be able to reach it.
   :::

5. Open your `.html` file in the browser.
