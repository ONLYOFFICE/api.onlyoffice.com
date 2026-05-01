---
sidebar_position: -19
---

# Document history

The **document editor** can display a version history for text documents, spreadsheets, presentations, and PDFs. The version data itself is stored by the **document storage service** — after each editing session, ONLYOFFICE Docs returns change information that the integrator saves alongside the document. The **document editor** then shows this history as a version list in a side panel, where the user can select any version to preview it.

The figure and steps below explain how document history viewing works in ONLYOFFICE Docs.

![Document history](/assets/images/editor/viewing-history.svg)

1. The user clicks the *Version History* button in the **document editor**.
2. The **document editor** requests the list of document versions from the **document storage service**.
3. The **document storage service** returns the version list, including which version to display.
4. The **document editor** requests the data for the selected version from the **document storage service**.
5. The **document storage service** returns a link to the selected version's file.
6. The **document editor** displays the selected version. If the user selects a different version, steps 4–6 repeat.
7. The user clicks the *Close History* button, and the **document editor** returns to normal editing mode.

## How this can be done in practice

1. Create an `.html` file to [open the document](./opening-file.md#how-this-can-be-done-in-practice).

2. Add an [onRequestHistory](../../usage-api/config/events.md#onrequesthistory) event handler to the editor config. When the user opens the version history, this event fires. In the handler, call [refreshHistory](../../usage-api/methods.md#refreshhistory) with the full version list. To highlight individual changes within each version, pass additional data as described in [highlighting changes](#highlighting-changes).

   ``` ts
   function onRequestHistory() {
     docEditor.refreshHistory({
       currentVersion: 2,
       history: [
         {
           created: "2010-07-06 10:13 AM",
           key: "af86C7e71Ca8",
           user: {
             id: "F89d8069ba2b",
             name: "Kate Cage",
           },
           version: 1,
         },
         {
           created: "2010-07-07 3:46 PM",
           key: "Khirz6zTPdfd7",
           user: {
             id: "78e1e841",
             name: "John Smith",
           },
           version: 2,
         },
       ],
     })
   };
   
   const config = {
     events: {
       onRequestHistory,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![Opening History](/assets/images/editor/history_open.png#gh-light-mode-only)![Opening History](/assets/images/editor/history_open.dark.png#gh-dark-mode-only)

3. Add an [onRequestHistoryData](../../usage-api/config/events.md#onrequesthistorydata) event handler. When the user selects a version from the list, this event fires with the version number. In the handler, call [setHistoryData](../../usage-api/methods.md#sethistorydata) with the absolute URL to that version's file.

   When calling `setHistoryData`, a [`token`](./security.md) must be included to validate the parameters.

   ``` ts
   function onRequestHistoryData(event) {
     const version = event.data
     docEditor.setHistoryData({
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4IiwidmVyc2lvbiI6Mn0.iRcdHve235L5K1e29SmUBkuHcxb63WHRko51WMJlmS0",
       url: "https://example.com/url-to-example-document.docx",
       version: 2,
     })
   };
   
   const config = {
     events: {
       onRequestHistoryData,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![History](/assets/images/editor/history.png#gh-light-mode-only)![History](/assets/images/editor/history.dark.png#gh-dark-mode-only)

4. Add an [onRequestRestore](../../usage-api/config/events.md#onrequestrestore) event handler. When the user clicks the *Restore* button, this event fires with the selected version's data. In the handler, save the restored version on your server and call [refreshHistory](../../usage-api/methods.md#refreshhistory) to reload the version list.

   ``` ts
   function onRequestRestore(event) {
     const fileType = event.data.fileType
     const url = event.data.url
     const version = event.data.version
   
     docEditor.refreshHistory({
       currentVersion: 2,
       history: [
         {
           created: "2010-07-06 10:13 AM",
           key: "af86C7e71Ca8",
           user: {
             id: "F89d8069ba2b",
             name: "Kate Cage",
           },
           version: 1,
         },
         {
           changes,
           created: "2010-07-07 3:46 PM",
           key: "Khirz6zTPdfd7",
           serverVersion,
           user: {
             id: "78e1e841",
             name: "John Smith",
           },
           version: 2,
         },
       ],
     })
   };
   
   const config = {
     events: {
       onRequestRestore,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![onRequestRestore](/assets/images/editor/onRequestRestore.png#gh-light-mode-only)![onRequestRestore](/assets/images/editor/onRequestRestore.dark.png#gh-dark-mode-only)

5. Add an [onRequestHistoryClose](../../usage-api/config/events.md#onrequesthistoryclose) event handler. When the user clicks the *Close History* button, this event fires. In the handler, reinitialize the editor in editing mode — for example, by reloading the page.

   ``` ts
   function onRequestHistoryClose() {
     document.location.reload()
   };
   
   const config = {
     events: {
       onRequestHistoryClose,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   ![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.png#gh-light-mode-only)![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.dark.png#gh-dark-mode-only)

6. Open your `.html` file in the browser.

7. Open the *Version History* option in the Document Editor menu.

## Highlighting changes

If a document version was created with the **document editor**, the individual changes within that version can be highlighted when viewing the history. To enable this, the **document storage service** must save additional data returned by ONLYOFFICE Docs when [saving](./saving-file.md) each editing session.

:::note
When the server version is updated, the **document editor** does not use the `changes` data to highlight changes in the history. It only returns the changed document in the `changesurl` parameter.
:::

Along with the changed document itself, the **document editing service** sends:

- [history](../../usage-api/callback-handler.md#history) — contains the timestamp and author for each change, displayed in the version history side panel. Pass this data as the `changes` property of each version in the object passed to [refreshHistory](../../usage-api/methods.md#refreshhistory).

  ``` ts
  docEditor.refreshHistory({
    currentVersion: 2,
    history: [
      {
        created: "2010-07-06 10:13 AM",
        key: "af86C7e71Ca8",
        user: {
          id: "F89d8069ba2b",
          name: "Kate Cage",
        },
        version: 1,
      },
      {
        changes,
        created: "2010-07-07 3:46 PM",
        key: "Khirz6zTPdfd7",
        serverVersion,
        user: {
          id: "78e1e841",
          name: "John Smith",
        },
        version: 2,
      },
    ],
  })
  ```

  Where `changes` and `serverVersion` are the values from [the history object](../../usage-api/callback-handler.md#history) returned after saving the document.

  :::note
  ONLYOFFICE Docs highlights the changes made from the beginning of the current document session, not from the beginning of the document version. And even if several document versions are created during one session, all changes from this session will be highlighted. Therefore, you cannot see the document versions created with the [force saving option](./saving-file.md#force-saving) in the document history.
  :::

- [changesurl](../../usage-api/callback-handler.md#changesurl) — the absolute URL to a zip file with the editing data used to highlight changes for a specific version. Save this file and pass its address as the `changesUrl` parameter when calling [setHistoryData](../../usage-api/methods.md#sethistorydata). You must also include a link to the previous document version in `previous.url`.

  When calling `setHistoryData`, a [`token`](./security.md) must be included to validate the parameters.

  ``` ts
  docEditor.setHistoryData({
    changesUrl: "https://example.com/url-to-changes.zip",
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    previous: {
      fileType: "docx",
      key: "af86C7e71Ca8",
      url: "https://example.com/url-to-the-previous-version-of-the-document.docx",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFuZ2VzVXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tY2hhbmdlcy56aXAiLCJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwicHJldmlvdXMiOnsiZmlsZVR5cGUiOiJkb2N4Iiwia2V5IjoiYWY4NkM3ZTcxQ2E4IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tdGhlLXByZXZpb3VzLXZlcnNpb24tb2YtdGhlLWRvY3VtZW50LmRvY3gifSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4IiwidmVyc2lvbiI6Mn0.ril3Ol3rvYne3g0dG8TdKCiwJ7-7kkYGc6-XWMvp8FU",
    url: "https://example.com/url-to-example-document.docx",
    version: 2,
  })
  ```

  :::warning
  The `changesurl` request is made in the browser from the added iframe with the `documentserver` domain, where `documentserver` is the name of the server with ONLYOFFICE Docs installed. For correct operation, cross-origin HTTP requests must be allowed (CORS). This can be achieved using the `Access-Control-Allow-Origin` header. You can [register](https://www.onlyoffice.com/docs-registration.aspx?from=api) a free ONLYOFFICE Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.
  :::

  ![changesurl](/assets/images/editor/changesurl.png#gh-light-mode-only)![changesurl](/assets/images/editor/changesurl.dark.png#gh-dark-mode-only)
