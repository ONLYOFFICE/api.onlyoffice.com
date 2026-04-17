---
sidebar_position: -16
---

# Renaming files

The reference figure and the steps below explain the process of renaming a document in ONLYOFFICE Docs.

![Renaming File](/assets/images/editor/rename.svg)

1. The user gives a new name to the document in the **document editor**.
2. The **document editor** informs the **document manager** about the new name of the document.
3. The **document manager** sends the new name of the document to the **document storage service** where the software integrators rename the document.
4. The **document storage service** informs the **document editing service** about the new name of the document.
5. The **document editing service** sends the new name of the document to the **document editor** of each user.
6. Now the new name becomes visible to all users.

## How this can be done in practice

1. Create an *html* file to [Open the document](./opening-file.md#how-this-can-be-done-in-practice).

2. Specify the event handler for opening the *Rename...* menu in the configuration script for Document Editor initialization. When the [onRequestRename](../../usage-api/config/events.md#onrequestrename) event is called, the new name of the document without extension is sent to the software integrators which rename the document in the document storage service.

   <img alt="onRequestRename" src="/assets/images/editor/onRequestRename.png#gh-light-mode-only" width="282px" />   
   <img alt="onRequestRename" src="/assets/images/editor/onRequestRename.dark.png#gh-dark-mode-only" width="282px" />

   ``` ts
   function onRequestRename(event) {
     const title = event.data
   };
   
   const config = {
     events: {
       onRequestRename,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. In order to update the name of the document for all collaborative editors, send the request to the [document command service](../../additional-api/command-service/command-service.md), using the [meta](../../additional-api/command-service/meta.md) value for the *c* parameter:

   ``` json
   {
     "c": "meta",
     "key": "Khirz6zTPdfd7",
     "meta": {
       "title": "Example Document Title.docx"
     }
   }
   ```

4. When the name of the document is changed via the [meta](../../additional-api/command-service/meta.md) command, the [onMetaChange](../../usage-api/config/events.md#onmetachange) event must be called in the document editor of each user. This event sends the name of the document in the *data.title* parameter.

   ``` ts
   function onMetaChange(event) {
     const title = event.data.title
   };
   
   const config = {
     events: {
       onMetaChange,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```
