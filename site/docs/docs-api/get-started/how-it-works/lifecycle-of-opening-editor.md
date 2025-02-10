---
sidebar_position: -1
---

The lifecycle of [opening](./opening-file.md) an editor can be defined by the sequence of the events.

Add the script initializing the Document Editor with the configuration for the document you want to open:

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    title: "Example Document Title.docx",
    url: "https://example.com/url-to-example-document.docx",
  },
  documentType: "word",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCJ9.7IpEJxdOvBQ0kJ8l6ZegIV4tX5vsPbZZCDDVmcFROXc",
})
```

Specify there the following events:

1. When the application is loaded into the browser, the [onAppReady](../../usage-api/config/events.md#onappready) event is executed:

   ``` ts
   function onAppReady() {
     console.log("ONLYOFFICE Document Editor is ready")
   }

   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onAppReady,
     },
   })
   ```

   After that, the [showMessage](../../usage-api/methods.md#showmessage) method can be called which displays a tooltip with a message:

   ``` ts
   docEditor.showMessage(message)
   ```

   ## message

   Defines the message text.

   Type: string

   Presence: required

  > Please note that displaying a tooltip with a message is not supported in the embedded platform [type](../../usage-api/config/config.md#type).

2. When an error or some other specific event occurs, the [onError](../../usage-api/config/events.md#onerror)  event is executed:

   ``` ts
   function onError(event) {
     console.log(`ONLYOFFICE Document Editor reports an error: code ${event.data.errorCode}, description ${event.data.errorDescription}`)
   }

   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onError,
     },
   })
   ```

   For example, it may be a conversion error or an error loading a certain editor component. Further work will not be available.

3. When the document is opened for editing with the old [document.key](../../usage-api/config/document/document.md#key) value, which was used to edit the previous document version and was successfully saved, the [onOutdatedVersion](../../usage-api/config/events.md#onoutdatedversion) event is executed:

   ``` ts
   function onOutdatedVersion() {
     location.reload(true)
   }

   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onOutdatedVersion,
     },
   })
   ```

   An [error](../../more-information/Troubleshooting.md#the-file-version-has-been-changed) will occur and further work will not be available. If the event is not processed, the file will be opened for viewing only. The editor must be reinitialized with a new key.

   This event is deprecated since version 8.3. Please use the [onRequestRefreshFile](../../usage-api/config/events.md#onrequestrefreshfile) event instead.

   When the editor is opened with [key](../../usage-api/config/document/document.md#key) that was already used to successfully save a file, the `onRequestRefreshFile` event is executed instead of the `onOutdatedVersion` event:

   ``` ts
   function onRequestRefreshFile() {
     refreshFile({
       document: {
         key: "Khirz6zTPdfd7",
         title: "Example Document Title.docx",
         url: "https://example.com/url-to-example-document.docx",
         permissions: {},
       },
       editorConfig: {
         callbackUrl: "https://example.com/url-to-callback.ashx",
         mode: "edit",
       },
       token: "...",
     })
   }
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestHistory,
     },
   })
   ```

   In this case, the [refreshFile](../../usage-api/methods.md#refreshfile) method is called and the file version is updated with a new key value without reloading the editor.

4. When a user action is required to open a document, the [onUserActionRequired](../../usage-api/config/events.md#onuseractionrequired) event is executed:

   ``` ts
   function onUserActionRequired() {
     console.log("Enter a password")
   }
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onUserActionRequired,
     },
   })
   ```

   This happens when  the user needs to enter a password to open the protected document or to select an encoding or a delimiter for the `txt` or `csv` files.

5. When the document is loaded and the editor is ready for work, the [onDocumentReady](../../usage-api/config/events.md#ondocumentready) event is executed:

   ``` ts
   function onDocumentReady() {
     console.log("Document is loaded")
   }

   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onDocumentReady,
     },
   })
   ```

   After that, the requests to the [Automation API](../../usage-api/automation-api.md) can be sent.
   
   The `onOutdatedVersion` or `onRequestRefreshFile` events can be also called after the `onDocumentReady` event in the following case:

   1. the document has been modified;
   2. the Internet connection has been lost;
   3. the document has been saved successfully;
   4. the editor has reconnected to the server.

6. When the user is trying to end the work with the editor and close it by clicking the cross button, the [onRequestClose](../../usage-api/config/events.md#onrequestclose) event is executed:

   ```ts
   function onRequestClose() {
     if (window.opener) {
       window.close()
       return
     }
     docEditor.destroyEditor()
   }

   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestClose,
     },
   })
   ```

   The `onRequestClose` event can be also executed after the [requestClose](../../usage-api/methods.md#requestclose) method. It is recommended to call this method before the [destroyEditor](../../usage-api/methods.md#destroyeditor) method to check if there is some unsaved data in the editor or not. If the unsaved data exists, then the dialog box will be displayed to ask the user whether they want to continue editing or close the editor losing all the unsaved data. If the `Close` option will be chosen, then the `onRequestClose` event will be called:

   ``` ts
   docEditor.requestClose()
   ```

   The `destroyEditor` method is used to destroy `docEditor` object. This method can be called when you want to reinit document editor with another configurations:

   ``` ts
   docEditor.destroyEditor()
   ```
