# Events

The events section allows you to change all the functions pertaining to the events.

## onAppReady

The function called when the application is loaded into the browser.

**Example**:

``` ts
function onAppReady() {
  console.log("ONLYOFFICE Document Editor is ready");
}

const config = {
  events: {
    onAppReady,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onCollaborativeChanges

The function called when the document is co-edited by another user in the *strict* co-editing mode.

**Example**:

``` ts
function onCollaborativeChanges() {
  console.log("The document changed by collaborative user");
}

const config = {
  events: {
    onCollaborativeChanges,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onDocumentReady

The function called when the document is loaded into the document editor.

**Example**:

``` ts
function onDocumentReady() {
  console.log("Document is loaded");
}

const config = {
  events: {
    onDocumentReady,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onDocumentStateChange

The function called when the document is modified. It is called with the parameter: *\{"data": true\}* when the current user is editing the document and with the parameter: *\{"data": false\}* when the current user's changes are sent to the **document editing service**.

**Example**:

``` ts
function onDocumentStateChange(event) {
  if (event.data) {
    console.log("The document changed");
  } else {
    console.log("Changes are collected on document editing service");
  }
}

const config = {
  events: {
    onDocumentStateChange,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onDownloadAs

The function called with the absolute URL to the edited file when the [downloadAs](../methods.md#downloadas) method is being called. The absolute URL to the document to be downloaded and its type are sent in the *data* parameter.

**Example**:

``` ts
function onDownloadAs(event) {
  const fileType = event.data.fileType;
  const url = event.data.url;
  console.log(`ONLYOFFICE Document Editor create file: ${url}`);
}

const config = {
  events: {
    onDownloadAs,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onError

The function called when an error or some other specific event occurs. The error message is sent in the *data* parameter. A list of error codes can be found [here](https://github.com/ONLYOFFICE/sdkjs/blob/master/common/errorCodes.js).

**Example**:

``` ts
function onError(event) {
  console.log(`ONLYOFFICE Document Editor reports an error: code ${event.data.errorCode}, description ${event.data.errorDescription}`);
}

const config = {
  events: {
    onError,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onInfo

The function called when the application opened the file. The mode is sent in the *data.mode* parameter. Can be **view** or **edit**.

**Example**:

``` ts
function onInfo(event) {
  console.log(`ONLYOFFICE Document Editor is opened in mode ${event.data.mode}`);
}

const config = {
  events: {
    onInfo,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onMakeActionLink

The function called when the user is trying to get link for opening the document which contains a bookmark, scrolling to the bookmark position.

To set the bookmark link, you must call the [setActionLink](../methods.md#setactionlink) method. The bookmark data is received in the *data* parameter and must be then used in the configuration as the value for the [editorConfig.actionLink](./editor/editor.md#actionlink) parameter. If the method is not declared the *Get Link* button will not be displayed.

![onMakeActionLink](/assets/images/editor/onMakeActionLink.png)

**Example**:

``` ts
function onMakeActionLink(event) {
  const ACTION_DATA = event.data;
  const link = GENERATE_LINK(ACTION_DATA);
  docEditor.setActionLink(link);
}

const config = {
  events: {
    onMakeActionLink,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onMetaChange

The function called when the meta information of the document is changed via the [meta](../../additional-api/command-service/meta.md) command.

The name of the document is sent in the *data.title* parameter. The *Favorite* icon highlighting state is sent in the *data.favorite* parameter.

When the user clicks the *Favorite* icon, the [setFavorite](../methods.md#setfavorite) method is called to update the [information](./document/info.md#favorite) about the *Favorite* icon highlighting state. If the method is not declared, the *Favorite* icon will not be changed.

**Example**:

``` ts
function onMetaChange(event) {
  const title = event.data.title;
  const favorite = event.data.favorite;
}

const config = {
  events: {
    onMetaChange,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onOutdatedVersion

The function called after the [error](../../more-information/troubleshooting.md#the-file-version-has-been-changed) is shown, when the document is opened for editing with the old [document.key](./document/document.md#key) value, which was used to edit the previous document version and was successfully saved. When this event is called the editor must be reinitialized with a new *document.key*.

:::danger[Deprecated]
Starting from version 8.3, please use [onRequestRefreshFile](#onrequestrefreshfile) instead.
:::

**Example**:

``` ts
function onOutdatedVersion() {
  location.reload(true);
}

const config = {
  events: {
    onOutdatedVersion,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onPluginsReady

The function called when all plugins are loaded and can be used.

**Example**:

``` ts
function onPluginsReady() {}

const config = {
  events: {
    onPluginsReady,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onReady

The function called when the application is loaded into the browser.

:::danger[Deprecated]
Starting from version 5.0, please use [onAppReady](#onappready) instead.
:::

## onRequestClose

The function called when the user is trying to end the work with the editor and close it by clicking the cross button. If the method is not declared, the [editorConfig.customization.close](./editor/customization/customization-standard-branding.md#close) parameter will not be available, and the cross button will not be displayed.

**Example**:

``` ts
function onRequestClose() {
  if (window.opener) {
    window.close();
    return;
  }
  docEditor.destroyEditor();
}

const config = {
  events: {
    onRequestClose,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestCompareFile

The function called when the user is trying to select document for comparing by clicking the *Document from Storage* button.

:::note
This event is available only for ONLYOFFICE Docs Enterprise and ONLYOFFICE Docs Developer.
:::
:::danger[Deprecated]
Starting from version 7.5, please use [onRequestSelectDocument](#onrequestselectdocument) instead.
:::

## onRequestCreateNew

The function called when the user is trying to create document by clicking the *Create New* button. This method is used instead of the [createUrl](./editor/editor.md#createurl) field. If the method is not declared and the *createUrl* is not specified the *Create New* button will not be displayed.

**Example**:

``` ts
function onRequestCreateNew() {}

const config = {
  events: {
    onRequestCreateNew,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestEditRights

The function called when the user is trying to switch the document from the viewing into the editing mode by clicking the *Edit current file* button. This event also fires when the user clicks the *Edit PDF* button in the forms that are open in the *view* or *fillForms* mode. When the function is called, the editor must be initialized again, in editing mode. If the method is not declared the *Edit current file* and *Edit PDF* buttons will not be displayed.

:::note
**onRequestEditRights** parameter is obligatory when the [editorConfig](./editor/editor.md#mode) *mode* parameter is set to **view** and the *permission* to *edit* the document ([document permissions](./document/permissions.md#edit)) is set to **true** so that the user could switch to the editing mode.
:::

![onRequestEditRights](/assets/images/editor/onRequestEditRights.png)
![Edit PDF button](/assets/images/editor/edit-pdf.png)

**Example**:

``` ts
function onRequestEditRights() {
  console.log("ONLYOFFICE Document Editor requests editing rights");
  document.location.reload();
}

const config = {
  events: {
    onRequestEditRights,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestHistory

The function called when the user is trying to show the document version history by clicking the *Version History* button.

To show the document version history you must call the [refreshHistory](../methods.md#refreshhistory) method. If the method and the [onRequestHistoryData](#onrequesthistorydata) method are not declared the *Version History* button will not be displayed.

<img alt="onRequestHistory" src="/assets/images/editor/onRequestHistory.png" width="282px" />

**Example**:

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
  });
}

const config = {
  events: {
    onRequestHistory,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Where the **changes** is the *changes* from [the history object](../callback-handler.md#history) returned after saving the document.

Where the **serverVersion** is the *serverVersion* from [the history object](../callback-handler.md#history) returned after saving the document.

## onRequestHistoryClose

The function called when the user is trying to go back to the document from viewing the document version history by clicking the *Close History* button. When the function is called, the editor must be initialized again, in editing mode. If the method is not declared the *Close History* button will not be displayed.

![onRequestHistoryClose](/assets/images/editor/onRequestHistoryClose.png)

**Example**:

``` ts
function onRequestHistoryClose() {
  document.location.reload();
}

const config = {
  events: {
    onRequestHistoryClose,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestHistoryData

The function called when the user is trying to click the specific document version in the document version history.

The document version number is sent in the *data* parameter.

To show the changes corresponding to the specific document version you must call the [setHistoryData](../methods.md#sethistorydata) method. When calling this method, the token must be added to validate the parameters. If the method and the [onRequestHistory](#onrequesthistory) method are not declared the *Version History* button will not be displayed.

![onRequestHistoryData](/assets/images/editor/onRequestHistoryData.png)

**Example**:

``` ts
function onRequestHistoryData(event) {
  const version = event.data;
  docEditor.setHistoryData({
    changesUrl: "https://example.com/url-to-changes.zip",
    fileType: "docx",
    key: "Khirz6zTPdfd7",
    previous: {
      fileType: "docx",
      key: "af86C7e71Ca8",
      url: "https://example.com/url-to-the-previous-version-of-the-document.docx",
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFuZ2VzVXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tY2hhbmdlcy56aXAiLCJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwicHJldmlvdXMiOnsiZmlsZVR5cGUiOiJkb2N4Iiwia2V5IjoiYWY4NkM3ZTcxQ2E4IiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tdGhlLXByZXZpb3VzLXZlcnNpb24tb2YtdGhlLWRvY3VtZW50LmRvY3gifSwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1kb2N1bWVudC5kb2N4In0.pfPJs9XvCmAnPiUnZYRm0rZGPYHzqfEP7AFRjKg1af4",
    url: "https://example.com/url-to-example-document.docx",
    version,
  });
}

const config = {
  events: {
    onRequestHistoryData,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Where the **changesUrl** is the *changesUrl* from [the JSON object](../callback-handler.md#changesurl) returned after saving the document.

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

## onRequestInsertImage

The function called when the user is trying to insert an image by clicking the *Image from Storage* button.

The type of image insertion is specified in parameter *data.c*.

To insert an image into the file you must call the [insertImage](../methods.md#insertimage) method with the specified command. When calling this method, the token must be added to validate the parameters. If the method is not declared the *Image from Storage* button will not be displayed.

![onRequestInsertImage](/assets/images/editor/onRequestInsertImage.png)

**Example**:

``` ts
function onRequestInsertImage(event) {
  docEditor.insertImage({
    c: event.data.c,
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
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZXMiOlt7ImZpbGVUeXBlIjoicG5nIiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLmNvbS91cmwtdG8tZXhhbXBsZS1pbWFnZTEucG5nIn0seyJmaWxlVHlwZSI6InBuZyIsInVybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWV4YW1wbGUtaW1hZ2UyLnBuZyJ9XX0.ly1O8-6u4Y7WJlgp9O-bJMeffHe0GtaXzyvY2UUFJTg",
  });
}

const config = {
  events: {
    onRequestInsertImage,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

## onRequestMailMergeRecipients

The function called when the user is trying to select recipients data by clicking the *Mail merge* button.

:::danger[Deprecated]
Starting from version 7.5, please use [onRequestSelectSpreadsheet](#onrequestselectspreadsheet) instead.
:::

## onRequestOpen

The function called when the user is trying to open an external link by clicking the *Open source* button. If the method is not declared, this button will not be displayed.

To open the editor with the external file referenced by the *path* or *referenceData* parameters in a new tab, you must pass a link to this tab by calling the [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) method with the *path* and *windowName* parameters.

An object with the unique file data, the file path, and a new browser tab name are sent in the *data* parameter.

<img alt="Open source" src="/assets/images/editor/open-source.png" width="498px" />

**Example**:

``` ts
function onRequestOpen(event) {
  const path = event.data.path;
  const referenceData = event.data.referenceData;
  const windowName = event.data.windowName;
  window.open("https://example.com/external-url.docx", event.data.windowName);
}

const config = {
  events: {
    onRequestOpen,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

## onRequestReferenceData

The function called when the user is trying to refresh data inserted from the external file by clicking the *Update values* button in the *External links* dialog box of the *Data* tab.

An object with the unique file data from the source file, the file path or name, and the file URL are sent in the *data* parameter.

To refresh data by a link to a file which is specified with the event parameters, you must call the [setReferenceData](../methods.md#setreferencedata) method. When calling this method, the token must be added to validate the parameters. If the event is not declared, the *Paste link* and *Update values* buttons will not be displayed.

:::note
To send the data to the *setReferenceData* method, it is recommended to search for the file by the *referenceData* parameter first. If there is no such a field or a file cannot be found, then the *path* or *link* parameters are used.
:::

<img alt="Paste link" src="/assets/images/editor/paste-link.png" width="400px" />

<img alt="Update values" src="/assets/images/editor/update-values.png" width="400px" />

This event also fires when the user runs the [IMPORTRANGE](https://helpcenter.onlyoffice.com/onlyoffice-editors/onlyoffice-spreadsheet-editor/Functions/importrange.aspx?from=api) function. The URL of the source spreadsheet which is used in the *IMPORTRANGE* parameters is passed to the *onRequestReferenceData* event in the *event.data.link* parameter.

**Example**:

``` ts
function onRequestReferenceData(event) {
  const link = event.data.link;
  const referenceData = event.data.referenceData;
  const path = event.data.path;

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
  });
}

const config = {
  events: {
    onRequestReferenceData,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestReferenceSource

The function called when the user is trying to change a source of the external data by clicking the *Change source* button.

An object with the unique file data and the file path or name are sent in the *data* parameter.

When the button is clicked, you must call the [setReferenceSource](../methods.md#setreferencesource) method to change a source of the external data. When calling this method, the token must be added to validate the parameters. If the event is not declared, the *Change source* button will not be displayed.

:::note
To send the data to the *setReferenceSource* method, it is recommended to search for the file by the *referenceData* parameter first. If there is no such a field or a file cannot be found, then the *path* parameter is used.
:::

<img alt="Change source" src="/assets/images/editor/change-source.png" width="498px" />

**Example**:

``` ts
function onRequestReferenceSource(event) {
  const referenceData = event.data.referenceData;
  const path = event.data.path;

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
  });
}

const config = {
  events: {
    onRequestReferenceSource,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestRefreshFile

The function called instead of the [onOutdatedVersion](#onoutdatedversion) event in the following cases:

- when the editor is opened with [key](./document/document.md#key) that was already used to successfully save a file;
- when the editor reconnects to the server after losing the connection and interrupting the editing session.

In these cases, the [refreshFile](../methods.md#refreshfile) method is called and the file version is updated without reloading the editor.

**Example**:

``` ts
function onRequestRefreshFile() {
  docEditor.refreshFile({
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
  });
}

const config = {
  events: {
    onRequestRefreshFile,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestRename

The function called when the user is trying to rename the file by clicking the *Rename...* button.

:::note
Until version 6.0 the *Rename...* button is only available if the [document.permissions.rename](./document/permissions.md#rename) is set to **true**.
:::

<img alt="onRequestRename" src="/assets/images/editor/onRequestRename.png" width="282px" />

**Example**:

``` ts
function onRequestRename(event) {
  const title = event.data;
}

const config = {
  events: {
    onRequestRename,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestRestore

The function called when the user is trying to restore the file version by clicking the *Restore* button in the version history.

The document version number is sent in the *data.version* parameter if it is called for the document version from the history. Additionally, the document link is sent in the *data.url* parameter if it is called for the document changes from the [history object](../callback-handler.md#history). The type of the document which is specified with this link is sent in the *data.fileType* parameter.

When the function is called, you must call the [refreshHistory](../methods.md#refreshhistory) method to initialize version history again. If the method is not declared the *Restore* button will not be displayed.

:::note
The *Restore* button is displayed for the previous document versions only and hidden for the current one. Until version 5.5 the *Restore* button is only available if the [document.permissions.changeHistory](./document/permissions.md#changehistory) is set to **true**.
:::

![onRequestRestore](/assets/images/editor/onRequestRestore.png)

**Example**:

``` ts
function onRequestRestore(event) {
  const fileType = event.data.fileType;
  const url = event.data.url;
  const version = event.data.version;

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
  });
}

const config = {
  events: {
    onRequestRestore,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Where the **changes** is the *changes* from [the history object](../callback-handler.md#history) returned after saving the document.

Where the **serverVersion** is the *serverVersion* from [the history object](../callback-handler.md#history) returned after saving the document.

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

## onRequestSaveAs

The function called when the user is trying to save file by clicking *Save Copy as...* button. The title of the document, its type and the absolute URL to the document to be downloaded are sent in the *data* parameter. If the method is not declared the *Save Copy as...* button will not be displayed.

![onRequestSaveAs](/assets/images/editor/onRequestSaveAs.png)

**Example**:

``` ts
function onRequestSaveAs(event) {
  const fileType = event.data.fileType;
  const title = event.data.title;
  const url = event.data.url;
}

const config = {
  events: {
    onRequestSaveAs,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestSelectDocument

The function called when the user is trying to select a document for comparing, combining, or inserting text.

The type of document selection is specified in the *data.c* parameter.

To select a document for comparing, combining, or inserting text, you must call the [setRequestedDocument](../methods.md#setrequesteddocument) method.

![onRequestSelectDocument](/assets/images/editor/onRequestSelectDocument.png)

![Insert text](/assets/images/editor/insert-text.png#gh-light-mode-only)![Insert text](/assets/images/editor/insert-text.dark.png#gh-dark-mode-only)

**Example**:

``` ts
function onRequestSelectDocument(event) {
  docEditor.setRequestedDocument({
    c: event.data.c,
    fileType: "docx",
    url: "https://example.com/url-to-example-document.docx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6ImRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifQ.t8660n_GmxJIppxcwkr_mUxmXYtE8cg-jF2cTLMtuk8",
  });
}

const config = {
  events: {
    onRequestSelectDocument,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

## onRequestSelectSpreadsheet

The function called when the user is trying to select recipients data by clicking the *Mail merge* button.

The type of spreadsheet selection is specified in the *data.c* parameter.

To select recipient data, you must call the [setRequestedSpreadsheet](../methods.md#setrequestedspreadsheet) method. When calling this method, the token must be added to validate the parameters. If the method is not declared, the *Mail merge* button will become faded and unclickable.

![onRequestSelectSpreadsheet](/assets/images/editor/onRequestMailMergeRecipients.png)

**Example**:

``` ts
function onRequestSelectSpreadsheet(event) {
  docEditor.setRequestedSpreadsheet({
    c: event.data.c,
    fileType: "xlsx",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlVHlwZSI6Inhsc3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLXJlY2lwaWVudHMueGxzeCJ9.P3TjOyX1Tv3xAVRAc8qtNb-uFLD6FH_WErag_rbI6nQ",
    url: "https://example.com/url-to-example-recipients.xlsx",
  });
}

const config = {
  events: {
    onRequestSelectSpreadsheet,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

Where the **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.

## onRequestSendNotify

The function called when the user is mentioned in a comment.

The message and the list of emails is sent in the *data* parameter. The comment data is received in the *data.actionLink* parameter and must be then used in the configuration as the value for the [editorConfig.actionLink](./editor/editor.md#actionlink) parameter.

The list of users to be mentioned should be completed by the [setUsers](../methods.md#setusers) method.

:::note
In version 5.4, **onRequestSendNotify** event can only be used if [onRequestUsers](#onrequestusers) event is set. Starting from version 5.5, there is no such dependency between **onRequestSendNotify** and **onRequestUsers** - both can be set independently.
:::

**Example**:

``` ts
function onRequestSendNotify(event) {
  const ACTION_DATA = event.data.actionLink;
  const comment = event.data.message;
  const emails = event.data.emails;
}

const config = {
  events: {
    onRequestSendNotify,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestSharingSettings

The function called when the user is trying to manage document access rights by clicking *Change access rights* button.

When the access rights is changed, you must call the [setSharingSettings](../methods.md#setsharingsettings) method to update the [information](./document/info.md#sharingsettings) about the settings which allow to share the document with other users. If the method is not declared the *Change access rights* button will not be displayed.

![onRequestSharingSettings](/assets/images/editor/onRequestSharingSettings.png)

**Example**:

``` ts
function onRequestSharingSettings() {
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
  });
}

const config = {
  events: {
    onRequestSharingSettings,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestStartFilling

The function called when the user is trying to start filling out the ready forms by clicking the *Start filling* button in the pdf editing mode. If the event is not declared, this button will not be displayed.

When the user clicks the *Start filling* button, the [startFilling](../methods.md#startfilling) method is called to lock the pdf editing (only pdf viewing becomes available).

**Example**:

``` ts
function onRequestStartFilling() {
  docEditor.startFilling();
}

const config = {
  events: {
    onRequestStartFilling,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onRequestUsers

The function called when the user can select other users to mention in the comments, grant the access rights to edit the specific sheet ranges, or set the user avatars.

Starting from version 7.4, the operation type can be specified in the *data.c* parameter. It can take two values - *mention* or *protect*. Prior to version 7.4, only the mention operation was available with this event.

Starting from version 8.0, the *info* operation type is added to set the avatars for the users with the ids specified in the *data.id* parameter.

To set a list of users, you must call the [setUsers](../methods.md#setusers) method which can take different lists of users depending on the specified operation type. The *onRequestUsers* event is called once for each *c* type when the corresponding operation is performed. If the *setUsers* is called with an empty list, then the *onRequestUsers* event will fire again.

<img alt="onRequestUsers" src="/assets/images/editor/onRequestUsers.png" width="309px" />

<img alt="Protect range" src="/assets/images/editor/protect-range.png" width="292px" />

**Example**:

``` ts
function onRequestUsers(event) {
  const c = event.data.c;
  const id = event.data.id;

  docEditor.setUsers({
    c: event.data.c,
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
  });
}

const config = {
  events: {
    onRequestUsers,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onSubmit

The function called when the force saving request of the *3* [forcesavetype](../callback-handler.md#forcesavetype) is successfully performed, i.e. when the **Complete & Submit** button is clicked and the form is submitted.

**Example**:

``` ts
function onSubmit(event) {
  console.log("The form was submitted.");
}

const config = {
  events: {
    onSubmit,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onUserActionRequired

The function called when a user action is required to open a document in the following cases:

- when the user needs to enter a password to open the protected document;
- when the user needs to select an encoding for the *txt* file;
- when the user needs to select an encoding and a delimiter for the *csv* file.

**Example**:

``` ts
function onUserActionRequired() {
  console.log("Enter a password");
}

const config = {
  events: {
    onUserActionRequired,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## onWarning

The function called when a warning occurs. The warning message is sent in the *data* parameter. A list of error codes can be found [here](https://github.com/ONLYOFFICE/sdkjs/blob/master/common/errorCodes.js).

**Example**:

``` ts
function onWarning(event) {
  console.log(`ONLYOFFICE Document Editor reports a warning: code ${event.data.warningCode}, description ${event.data.warningDescription}`);
}

const config = {
  events: {
    onWarning,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
