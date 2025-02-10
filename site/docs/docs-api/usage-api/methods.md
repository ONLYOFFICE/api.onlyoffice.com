---
sidebar_position: -3
---

After initializing **document editor** you will get the object that can be used to call the methods.

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", config)
```

## createConnector

Create the [connector](./automation-api.md) to interact with text documents, spreadsheets, presentations, and fillable forms from the outside.

> This parameter is available for editing only for ONLYOFFICE Developer Edition.

  ``` ts
  docEditor.createConnector()
  ```

## denyEditingRights

Deny editing. This method can be called when you want to make the document editing unavailable.

  ``` ts
  docEditor.denyEditingRights(message)
  ```

| Parameter | Type   | Presence | Description                           |
| --------- | ------ | -------- | ------------------------------------- |
| message   | string | optional | Defines the text messages for dialog. |

## destroyEditor

Destroy *docEditor* object. This method can be called when you want to reinit document editor with another configurations. Used since version 4.3.

  ``` ts
  docEditor.destroyEditor()
  ```

## downloadAs

Download the edited file. This method can be called only when the existence of the [onDownloadAs](./config/Events.md#ondownloadas) events. **Document editing service** asynchronously creates a document and triggers the **onDownloadAs** event with a link in parameter.

  ``` ts
  docEditor.downloadAs(format)
  ```

| Parameter | Type   | Presence | Description                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format    | string | optional | Defines the format in which a file will be downloaded. All the possible formats you can find in the [conversion tables](../Additional%20API/conversion-api/Conversion%20tables.md). But you cannot download a file in the image formats such as *bmp*, *gif*, *jpg*, *png*. If this parameter is undefined, the file will be downloaded in the OOXML format according to the file type. |

> Please note that conversion from the *djvu*, *pdf*, *xps* formats are not available. The original format will be downloaded.

## insertImage

Insert an image into the file. Starting from version 7.0, this method allows a user to insert several images. The *images* array is used to do it. This method must be called after the [onRequestInsertImage](./config/Events.md#onrequestinsertimage) events.

  ``` ts
  docEditor.insertImage({
    c: "add",
    images: [
      {
        fileType: "png",
        url: "https://example.com/url-to-example-image1.png",
      },
      {
        fileType: "png",
        url: "https://example.com/url-to-example-image2.png",
      },
    ],
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiYWRkIiwiaW1hZ2VzIjpbeyJmaWxlVHlwZSI6InBuZyIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtaW1hZ2UxLnBuZyJ9LHsiZmlsZVR5cGUiOiJwbmciLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWltYWdlMi5wbmcifV19.JfSa__qPeY3MjUgdkJDjdfJWBgvCmEdLfFzjd3WgeUA",
  })
  ```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

| Parameter       | Type             | Presence | Description                                                                                                                                                                                                                                                                     |
| --------------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| c               | string           | required | Defines a type of image insertion from the event. Can be: *add*, *change*, *fill*, *watermark*, *slide*. The default value is "*add*".                                                                                                                                          |
| fileType        | string           | required | Defines a type of the image to be inserted into the file. Can be: *bmp*, *gif*, *jpe*, *jpeg*, *jpg*, *png*. Deprecated since version 7.0, please use the *images.fileType* parameter instead.                                                                                  |
| images          | array of objects | required | Defines an array of images to be inserted.                                                                                                                                                                                                                                      |
| images.fileType | string           | required | Defines a type of the image to be inserted into the file. Can be: *bmp*, *gif*, *jpe*, *jpeg*, *jpg*, *png*, *tif*, *tiff*.                                                                                                                                                     |
| images.url      | string           | required | Defines an absolute URL where the source image is stored. Be sure to add a [token](../get-started/how-it-works/Security.md) when using local links.                                                                                                              |
| token           | string           | optional | Defines the encrypted signature added to the parameter in the form of a [token](../Additional%20API/signature/Browser.md#insertimage).                                                                                                                                 |
| url             | string           | required | Defines an absolute URL where the source image is stored. Be sure to add a [token](../get-started/how-it-works/Security.md) when using local links. Otherwise, an error will occur. Deprecated since version 7.0, please use the *images.url* parameter instead. |

  > Prior to version 7.0, this method allowed to insert only one image and had the following parameters:
  >
  > ``` ts
  > docEditor.insertImage({
  >   c: "add",
  >   fileType: "png",
  >   url: "https://example.com/url-to-example-image.png",
  > })
  >```
  >
  > Please note that this structure is deprecated and will not be supported by the next editors versions. Please use a new one.

## refreshFile

Updates the file version without reloading the editor. This method must be called after the [onRequestRefreshFile](./config/Events.md#onrequestrefreshfile) event.

This method must take the editor initialization configuration for the current file version. The configuration must contain all the parameters used for signing a request to [open a file](../Additional%20API/signature/Browser.md#opening-file) for editing. The following parameters cannot be changed in the config: [documentType](./config/config.md#documenttype), [type](./config/config.md#type), [events](./config/Events.md).

``` ts
refreshFile({
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
})
```

## refreshHistory

Show the document version history. This method must be called after the [onRequestHistory](./config/Events.md#onrequesthistory) events.

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
  ```

If after editing and saving the document the *history* with the object changes and server version is returned, send the object changes in the *changes* parameter and the server version in the *serverVersion* parameter.

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

Where **changes** is the *changes* from [the history object](./callback-handler.md#history) returned after saving the document.

Where **serverVersion** is the *serverVersion* from [the history object](./callback-handler.md#history) returned after saving the document.

Show an error message explaining why the version history cannot be displayed:

  ``` ts
  docEditor.refreshHistory({
    error: "Exception",
  })
  ```

| Parameter             | Type    | Presence | Description                                                                                                                                       |
| --------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| currentVersion        | integer | required | Defines the current document version number.                                                                                                      |
| error                 | string  | optional | Defines the error message text.                                                                                                                   |
| history               | array   | required | Defines the array with the document versions.                                                                                                     |
| history.changes       | object  | optional | Defines the *changes* from [the history object](./callback-handler.md#history) returned after saving the document.                       |
| history.created       | string  | required | Defines the document version creation date.                                                                                                       |
| history.key           | string  | required | Defines the unique document identifier used by the service to recognize the document.                                                             |
| history.serverVersion | integer | optional | Defines the current server version number. If the *changes* parameter is sent, then the *serverVersion* parameter is required to be sent as well. |
| history.user          | object  | optional | Defines the user who is the author of the document version.                                                                                       |
| history.user.id       | string  | optional | Defines the identifier of the user who is the author of the document version.                                                                     |
| history.user.name     | string  | optional | Defines the name of the user who is the author of the document version.                                                                           |
| history.version       | integer | required | Defines the document version number.                                                                                                              |

## requestClose

Request to close the editor. It is recommended to call this method before the [destroyEditor](#destroyeditor) method to check if there is some unsaved data in the editor or not. If the unsaved data exists, then the dialog box will be displayed to ask the user whether they want to continue editing or close the editor losing all the unsaved data. If the *Close* option will be chosen, then the [onRequestClose](./config/Events.md#onrequestclose) event will be called.

  ``` ts
  docEditor.requestClose()
  ```

## setActionLink

Set the link to the document which contains a bookmark. This method must be called after the [onMakeActionLink](./config/Events.md#onmakeactionlink) event. The software integrator must process the *ACTION\_DATA* received from the **document editing service** to set the link. The link is created by the software integrators who use ONLYOFFICE Docs in their **document manager**.

  ``` ts
  docEditor.setActionLink(link)
  ```

| Parameter | Type   | Presence | Description                                                                       |
| --------- | ------ | -------- | --------------------------------------------------------------------------------- |
| link      | string | required | Defines the link which allows scrolling to the bookmark position in the document. |

## setFavorite

Change the *Favorite* icon state. This method must be called after the [onMetaChange](./config/Events.md#onmetachange) event.

  ``` ts
  docEditor.setFavorite(favorite)
  ```

| Parameter | Type    | Presence | Description                                                                  |
| --------- | ------- | -------- | ---------------------------------------------------------------------------- |
| favorite  | boolean | true     | Defines if the *Favorite* icon is highlighted (**true**) or not (**false**). |

## setHistoryData

Send the link to the document for viewing the version history. This method must be called after the [onRequestHistoryData](./config/Events.md#onrequesthistorydata) events.

  ``` ts
  docEditor.setHistoryData({
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4IiwidmVyc2lvbiI6Mn0.iRcdHve235L5K1e29SmUBkuHcxb63WHRko51WMJlmS0",
    url: "https://example.com/url-to-example-document.docx",
    version: 2,
  })
  ```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

If after editing and saving the document the *changesurl* link to the file with changes data is returned, download the file by this link and send the file URL in the *changesUrl* parameter. The absolute URL address of the document previous version must be sent in the *previous.url* parameter.

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

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

Send an error message explaining why the document version cannot be displayed:

  ``` ts
  docEditor.setHistoryData({
    error: "Exception",
    version: 2,
  })
  ```

| Parameter         | Type    | Presence | Description                                                                                                                                                                                                                                                                                                                 |
| ----------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| changesUrl        | string  | optional | Defines the url address of the file with the document changes data, which can be downloaded by the *changesurl* link from [the JSON object](./callback-handler.md#changesurl) returned after saving the document. The request for file is signed with a token which is checked by the ONLYOFFICE Docs.             |
| error             | string  | optional | Defines the error message text.                                                                                                                                                                                                                                                                                             |
| fileType          | string  | optional | Defines an extension of the document specified with the *url* parameter.                                                                                                                                                                                                                                                    |
| key               | string  | required | Defines the document identifier used to unambiguously identify the document file.                                                                                                                                                                                                                                           |
| previous          | object  | optional | Defines the object of the previous version of the document if *changesUrl* address was returned after saving the document.                                                                                                                                                                                                  |
| previous.fileType | string  | optional | Defines an extension of the document specified with the *previous.url* parameter.                                                                                                                                                                                                                                           |
| previous.key      | string  | required | Defines the document identifier of the previous version of the document.                                                                                                                                                                                                                                                    |
| previous.url      | string  | required | Defines the url address of the previous version of the document.                                                                                                                                                                                                                                                            |
| token             | string  | optional | Defines the encrypted signature added to the parameter in the form of a [token](../Additional%20API/signature/Browser.md#sethistorydata).                                                                                                                                                                          |
| url               | string  | required | Defines the url address of the current document version. Can be downloaded by the *url* link from [the JSON object](./callback-handler.md#url) returned after saving the document. Be sure to add a [token](../get-started/how-it-works/how-it-works.md) when using local links. Otherwise, an error will occur. |
| version           | integer | required | Defines the document version number.                                                                                                                                                                                                                                                                                        |

## setMailMergeRecipients

Insert recipient data for mail merge into the file. This method must be called after the [onRequestMailMergeRecipients](./config/Events.md#onrequestmailmergerecipients) event. Deprecated since version 7.5, please use [setRequestedSpreadsheet](#setrequestedspreadsheet) instead.

  ``` ts
  docEditor.setMailMergeRecipients({
    fileType: "xlsx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXJlY2lwaWVudHMueGxzeCJ9.P3TjOyX1Tv3xAVRAc8qtNb-uFLD6FH_WErag_rbI6nQ",
    url: "https://example.com/url-to-example-recipients.xlsx",
  })
  ```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

| Parameter | Type   | Presence | Description                                                                                                                                                                                        |
| --------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileType  | string | required | Defines the type of spreadsheet for mail merge in the file. Can be: *csv*, *fods*, *ods*, *ots*, *xls*, *xlsm*, *xlsx*, *xlt*, *xltm*, *xltx*.                                                     |
| token     | string | optional | Defines the encrypted signature added to the parameter in the form of a [token](../Additional%20API/signature/Browser.md#setmailmergerecipients).                                         |
| url       | string | required | Defines the absolute URL where the source data is stored. Be sure to add a [token](../get-started/how-it-works/Security.md) when using local links. Otherwise, an error will occur. |

## setReferenceData

Refresh data by a link to a file which is specified with the *referenceData*, *path*, or *link* parameters. This method must be called after the [onRequestReferenceData](./config/Events.md#onrequestreferencedata) event.

  > This parameter is available for editing only for ONLYOFFICE Developer Edition.

  > Please note that this method is executed only when the user has permissions to the file from which the data is taken.

  ``` ts
  docEditor.setReferenceData({
    fileType: "xlsx",
    key: "Khirz6zTPdfd7",
    path: "sample.xlsx",
    referenceData: {
      fileKey: "BCFA2CED",
      instanceId: "https://example.com",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w",
    url: "https://example.com/url-to-example-document.xlsx",
  })
  ```

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

Show an error message explaining if any error occurred:

  ``` ts
  docEditor.setReferenceData({
    error: "Exception",
  })
  ```

| Parameter     | Type   | Presence | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error         | string | optional | Defines the error message text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| fileType      | string | optional | Defines an extension of the document specified with the *url* parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| key           | string | optional | Defines the unique document identifier used by the service to take the data from the co-editing session. In case the known key is sent, the document will be taken from the cache. Every time the document is edited and saved, the key must be generated anew. The document url can be used as the **key** but without the special characters and the length is limited to 128 symbol.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| path          | string | required | Defines the file name or relative path for the formula editor. It is used to identify a file when the [onRequestReferenceData](./config/Events.md#onrequestreferencedata) event is executed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| referenceData | object | optional | Defines an object that is generated by the integrator to uniquely identify a file in its system. This data must be the same as in the [document.referenceData](./config/Document/Document.md#referencedata) config parameter:<br/><br/>**fileKey** - the unique document identifier used by the service to get a link to the file. It must not be changed when the document is edited and saved (i.e. it is not equal to the [document.key](./config/Document/Document.md#key) parameter),<br/>**type**: string,<br/>**example**: "BCFA2CED";<br/><br/>**instanceId** - the unique system identifier. If the data was copied from a file on one system, and inserted into a file on another, then pasting by link will not be available and there will be no corresponding button in the context menu,<br/>**type**: string,<br/>**example**: `https://example.com`. |
| token         | string | optional | Defines the encrypted signature added to the parameter in the form of a [token](../Additional%20API/signature/Browser.md#setreferencedata).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| url           | string | required | Defines the URL address to download the current file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## setReferenceSource

Change a source of the external data. This method can be called after the [onRequestReferenceSource](./config/Events.md#onrequestreferencesource) event.

  > Please note that this method is executed only when the user has permissions to the file from which the data is taken.

  ``` ts
  docEditor.setReferenceSource({
    fileType: "xlsx",
    key: "Khirz6zTPdfd7",
    path: "sample.xlsx",
    referenceData: {
      fileKey: "BCFA2CED",
      instanceId: "https://example.com",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJwYXRoIjoic2FtcGxlLnhsc3giLCJyZWZlcmVuY2VEYXRhIjp7ImZpbGVLZXkiOiJCQ0ZBMkNFRCIsImluc3RhbmNlSWQiOiJodHRwczovL2V4YW1wbGUuY29tIn0sInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtZG9jdW1lbnQueGxzeCJ9.UXosmM-E_Cu9j9QGSlcj9FEoSu5m-zCS4b6FxO_2k7w",
    url: "https://example.com/url-to-example-document.xlsx",
  })
  ```

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

Show an error message explaining if any error occurred:

  ``` ts
  docEditor.setReferenceSource({
    error: "Exception",
  })
  ```

| Parameter     | Type   | Presence | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| error         | string | optional | Defines the error message text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| fileType      | string | optional | Defines an extension of the document specified with the *url* parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| key           | string | optional | Defines the unique document identifier used by the service to take the data from the co-editing session. In case the known key is sent, the document will be taken from the cache. Every time the document is edited and saved, the key must be generated anew. The document url can be used as the **key** but without the special characters and the length is limited to 128 symbol.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| path          | string | required | Defines the file name or relative path for the formula editor. It is used to identify a file when the [onRequestReferenceSource](./config/Events.md#onrequestreferencesource) event is executed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| referenceData | object | optional | Defines an object that is generated by the integrator to uniquely identify a file in its system. This data must be the same as in the [document.referenceData](./config/Document/Document.md#referencedata) config parameter:<br/><br/>**fileKey** - the unique document identifier used by the service to get a link to the file. It must not be changed when the document is edited and saved (i.e. it is not equal to the [document.key](./config/Document/Document.md#key) parameter),<br/>**type**: string,<br/>**example**: "BCFA2CED";<br/><br/>**instanceId** - the unique system identifier. If the data was copied from a file on one system, and inserted into a file on another, then pasting by link will not be available and there will be no corresponding button in the context menu,<br/>**type**: string,<br/>**example**: `https://example.com`. |
| token         | string | optional | Defines the encrypted signature added to the parameter in the form of a [token](../Additional%20API/signature/Browser.md#setreferencesource).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| url           | string | required | Defines the URL address to download the current file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## setRequestedDocument

Select a document for comparing, combining, or inserting text. This method must be called after the [onRequestSelectDocument](./config/Events.md#onrequestselectdocument) event.

> This parameter is available only for ONLYOFFICE Enterprise Edition and ONLYOFFICE Developer Edition.

  ``` ts
  docEditor.setRequestedDocument({
    c: "compare",
    fileType: "docx",
    url: "https://example.com/url-to-example-document.docx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
  })
  ```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

| Parameter | Type   | Presence | Description                                                                                                                                                                                            |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| c         | string | required | Defines a type of document selection from the event. Can be: *compare*, *combine*, or *insert-text*. The default value is "compare".                                                                   |
| fileType  | string | required | Defines a type of the document to be selected. Can be: *doc*, *docm*, *docx*, *dot*, *dotm*, *dotx*, *epub*, *fodt*, *odt*, *ott*, *rtf*, *wps*.                                                       |
| token     | string | optional | Defines the encrypted signature added to the parameter in the form of a [token](../Additional%20API/signature/Browser.md#setrequesteddocument).                                               |
| url       | string | required | Defines the absolute URL where the source document is stored. Be sure to add a [token](../get-started/how-it-works/Security.md) when using local links. Otherwise, an error will occur. |

## setRequestedSpreadsheet

Insert recipient data for mail merge into the file. This method must be called after the [onRequestSelectSpreadsheet](./config/Events.md#onrequestselectspreadsheet) event.

  ``` ts
  docEditor.setRequestedSpreadsheet({
    c: "mailmerge",
    fileType: "xlsx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXJlY2lwaWVudHMueGxzeCJ9.P3TjOyX1Tv3xAVRAc8qtNb-uFLD6FH_WErag_rbI6nQ",
    url: "https://example.com/url-to-example-recipients.xlsx",
  })
  ```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

| Parameter | Type   | Presence | Description                                                                                                                                                                                        |
| --------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| c         | string | required | Defines a type of spreadsheet selection from the event. Can be *mailmerge*.                                                                                                                        |
| fileType  | string | required | Defines the type of spreadsheet for mail merge in the file. Can be: *csv*, *fods*, *ods*, *ots*, *xls*, *xlsm*, *xlsx*, *xlt*, *xltm*, *xltx*.                                                     |
| token     | string | optional | Defines the encrypted signature added to the parameter in the form of a [token](../Additional%20API/signature/Browser.md#setrequestedspreadsheet).                                        |
| url       | string | required | Defines the absolute URL where the source data is stored. Be sure to add a [token](../get-started/how-it-works/Security.md) when using local links. Otherwise, an error will occur. |

## setRevisedFile

Select a document for comparing. This method must be called after the [onRequestCompareFile](./config/Events.md#onrequestcomparefile) events. Deprecated since version 7.5, please use [setRequestedDocument](#setrequesteddocument) instead.

> This parameter is available only for ONLYOFFICE Enterprise Edition and ONLYOFFICE Developer Edition.

  ``` ts
  docEditor.setRevisedFile({
    fileType: "docx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
    url: "https://example.com/url-to-example-document.docx",
  })
  ```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

| Parameter | Type   | Presence | Description                                                                                                                                                                                            |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fileType  | string | required | Defines the type of document for comparing. Can be: *doc*, *docm*, *docx*, *dot*, *dotm*, *dotx*, *epub*, *fodt*, *odt*, *ott*, *rtf*, *wps*.                                                          |
| token     | string | optional | Defines the encrypted signature added to the parameter in the form of a [token](../Additional%20API/signature/Browser.md#setrevisedfile).                                                     |
| url       | string | required | Defines the absolute URL where the source document is stored. Be sure to add a [token](../get-started/how-it-works/Security.md) when using local links. Otherwise, an error will occur. |

## setSharingSettings

Update the [information](./config/Document/Info.md#sharingsettings) about the settings which allow to share the document with other users. This method can be called after the [onRequestSharingSettings](./config/Events.md#onrequestsharingsettings) events.

  ``` ts
  docEditor.setSharingSettings({
    sharingSettings: [
      {
        permissions: "Full Access",
        user: "John Smith",
      },
      {
        isLink: true,
        permissions: "Read Only",
        user: "External link",
      },
    ],
  })
  ```

| Parameter                   | Type            | Presence | Description                                                             |
| --------------------------- | --------------- | -------- | ----------------------------------------------------------------------- |
| sharingSettings             | array of object | optional | Defines the settings which allow sharing the document with other users. |
| sharingSettings.permissions | string          | optional | Defines the access rights for the user with the name above.             |
| sharingSettings.user        | string          | optional | Defines the name of the user with whom the document will be shared.     |

## setUsers

Set a list of users to mention in the comments, grant the access rights to edit the specific sheet ranges, or set the user avatars. This method must be called after the [onRequestUsers](./config/Events.md#onrequestusers) events.

  ``` ts
  docEditor.setUsers({
    c: "protect",
    users: [
      {
        email: "john@example.com",
        id: "78e1e841",
        image: "https://example.com/url-to-user-avatar1.png",
        name: "John Smith",
      },
      {
        email: "kate@example.com",
        id: "F89d8069ba2b",
        image: "https://example.com/url-to-user-avatar2.png",
        name: "Kate Cage",
      },
    ],
  })
  ```

Where **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

| Parameter   | Type             | Presence | Description                                                                                                                                                                                                      |
| ----------- | ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| c           | string           | required | Defines the operation type from the [onRequestUsers](./config/Events.md#onrequestusers) event. It can take one of the following values - *mention*, *protect*, or *info*. The default value is *mention*. |
| users       | array of strings | optional | Defines the list of the users.                                                                                                                                                                                   |
| users.email | string           | optional | Defines the email address of the user. This field is required when the *c* parameter is *mention*.                                                                                                               |
| users.id    | string           | optional | Defines the identification of the user. This field is required when the *c* parameter is *protect*.                                                                                                              |
| users.image | string           | optional | Defines the path to the user's avatar. This field is required when the *c* parameter is *info*.                                                                                                                  |
| users.name  | string           | optional | Defines the full name of the user.                                                                                                                                                                               |

> Please note that the request to the user's avatar is sent without authorization because the avatar URL is inserted into the HTML of the editor frame. Moreover, the CORS problem may occur. In this case, use the avatar in the base64 format. For example, *"data:image/png,base64,\*\*\*\*\*"*.

> Please note that if you are subscribed to the *onRequestUsers* event and send an avatar using the *setUsers* method, the [user.image](./config/editor/editor.md#user) field in the initialization config is not required. We especially don't recommend to specify this parameter if the avatar is sent in the base64 format and the initialization config is signed with JWT. In this case, the token will be too long.

## showMessage

Display a tooltip with a message. This method can be called only after the [onAppReady](./config/Events.md#onappready) events.

  ``` ts
  docEditor.showMessage(message)
  ```

| Parameter | Type   | Presence | Description               |
| --------- | ------ | -------- | ------------------------- |
| message   | string | required | Defines the message text. |

> Please note that displaying a tooltip with a message is not supported in the embedded platform [type](./config/config.md#type).

## startFilling

Start filling out the ready forms and lock the pdf editing (only pdf viewing becomes available). This method can be called only after the [onRequestStartFilling](./config/Events.md#onrequeststartfilling) event.

  ``` ts
  docEditor.startFilling()
  ```
