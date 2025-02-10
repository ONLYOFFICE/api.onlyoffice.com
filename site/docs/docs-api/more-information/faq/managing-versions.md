---
sidebar_position: -4
---

## Which methods can be used when working with the document history events?

The document history can be shown using the [onRequestHistory](../../usage-api/config/Events.md#onrequesthistory) function (with the *events.onRequestHistory* event). Unless you use them, the **Version History** menu option (**Version History** button in the **Collaboration** tab) is not shown in the ONLYOFFICE Docs interface.

Once you call this function in the configuration file (together with the [refreshHistory](../../usage-api/methods.md#refreshhistory) method), the menu option and button are shown and the program will display the existing document versions. The data which is shown in the document version history, can be taken from the **document editing service** [callback](../../usage-api/callback-handler.md#status-2-3).

So the implementation of the document version history display should look like this:

1. The callback handler receives the data in the response from the **document editing service** with *status* **2** (which means that the all the users of the document closed it and the current version has been compiled). This response will look something like this:

``` ts
const data = {
  key: "2745492410",
  status: 2,
  users: ["F89d8069ba2b"],
  url: "https://documentserver/url-to-edited-document.docx",
  history: {
    serverVersion,
    changes,
  },
}
  ```

2. The callback handler parses the received data and passes it to the configuration file (it does not need to parse the *history.serverVersion* and *history.changes* data which can be used by the *onRequestHistory* function as is).

3. The configuration file must have the following sections present: *events.onRequestHistory* and the *onRequestHistory* function itself:

   ``` ts
   function onRequestHistory() {
     docEditor.refreshHistory({
       currentVersion: 2,
       history: [
         {
           created: "2019-02-01 3:03 PM",
           key: "2745492410",
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
   }
  
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     events: {
       onRequestHistory,
     },
   })
   ```

   Where

   - *currentVersion* is the number of the latest version which will be displayed in the editor interface as the current one;
   - *history* is the array of objects, each representing a document saved single version:
    - *history.changes* and *history.serverVersion* is the data received from the **document editing service**;
    - *history.user.id* is the ID of the user who was the last to save changes to the document for the specified version;
    - *history.created* is the time of the document specified version compilation (corresponds to when *status* **2** was received);
    - *history.version* is the number of the specified version as will be displayed in the version history section of the document editor interface.

4. The document is opened with all the above parameters specified. Switch to the **File** > **Version History** menu option (or **Collaboration** > **Version History**) and there the version data will be displayed.

> The *history.changes* objects are displayed as smaller changes (revisions) within the versions.

## How to display a document with highlighted changes?

The **document editing service** saves all the interim changes of the document into separate files and, once the version is compiled and *status* **2** is received, the link to the archive with all the changes between the versions is also sent to the callback handler.

So, if you want to additionally show the difference between the versions, you will also have to use the [onRequestHistoryData](../../usage-api/config/Events.md#onrequesthistorydata) function (with the *events.onRequestHistoryData* event) which must contain data also returned by the **document editing service** [callback](../../usage-api/callback-handler.md#changeshistory).

In addition to the actions described in the [above question](#which-methods-can-be-used-when-working-with-the-document-history-events) you will need to:

- Parse the *changesurl* parameter from the **document editing service** received response with *status* **2**:

  ``` ts
  const config = {
    changesurl: "https://documentserver/url-to-changes.zip",
    key: "2745492410",
    status: 2,
    users: ["F89d8069ba2b"],
    url: "https://documentserver/url-to-edited-document.docx",
    history: {
      serverVersion,
      changes,
    },
  }
  ```

- Add the *onRequestHistoryData* function to the configuration file together with the *setHistoryData* method and *events.onRequestHistoryData* event:

  ``` ts
  function onRequestHistoryData(event) {
    const version = event.data
    docEditor.setHistoryData({
      changesUrl: "https://example.com/url-to-changes.zip",
      key: "2745492410",
      previous: {
        key: "af86C7e71Ca8",
        url: "https://example.com/url-to-the-previous-version-of-the-document.docx",
      },
      url: "https://documentserver/url-to-edited-document.docx",
      version,
    })
  }
  
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    events: {
      onRequestHistoryData,
    },
  })
  ```

  The object containing the valid links to the current document version (*url*) and to the previous document version (*previous.url*) as well as the IDs (*key* and *previous.key*) must be passed to the configuration file. *changesUrl* archive file must be also available and downloadable from the browser to be able to display the changes.

## Why is a new version not shown in the document history after I forcefully save a document?

ONLYOFFICE Docs highlights the changes made from the beginning of the current document session, not from the beginning of the document version. And even if several document versions are created during one session, all changes from this session will be highlighted. Therefore, you cannot see the document versions created with the [force saving option](../../get-started/how-it-works/Saving%20file.md#force-saving) in the document history.
