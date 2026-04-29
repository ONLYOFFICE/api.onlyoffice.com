---
sidebar_position: -6
---

# Inserting external data

The figure and steps below explain how data from one spreadsheet is inserted into another via an external link in ONLYOFFICE Docs.

![Inserting external data](/assets/images/editor/insert-external-data.svg)

1. The user copies a cell value to the clipboard from the **document editor** of the source spreadsheet. Along with the visible content, special metadata is also copied.
2. The user pastes the copied data into the **document editor** of the destination spreadsheet.
3. The **document editor** sends the metadata to the **document manager** to request a link to the source file.
4. The **document manager** returns the source spreadsheet link to the **document editor**.
5. The **document editor** sends a download request to the **document editing service**.
6. The **document editing service** downloads the source spreadsheet from the **document storage service**.
7. The **document editing service** sends the necessary data back to the **document editor** of the destination spreadsheet for display.

## How this can be done in practice

1. Create the source spreadsheet from which data will be copied.

2. Specify the [`document.referenceData`](../../usage-api/config/document/document.md#referencedata) parameter in the initialization config of the source spreadsheet:

   ``` ts
   const config = {
     document: {
       referenceData: {
         fileKey: "BCFA2CED",
         instanceId: "https://example.com",
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

3. When the user copies data from the source spreadsheet, the clipboard receives:

   - the sheet name and cell range — used later to refresh the copied data;
   - the [`document.referenceData`](../../usage-api/config/document/document.md#referencedata) object — used to verify that external-link insertion is available in the destination spreadsheet;
   - the file name — used to display the formula in the editor.

4. Create the destination spreadsheet where the external data will be inserted.

5. Specify the [`onRequestReferenceData`](../../usage-api/config/events.md#onrequestreferencedata) event handler in the initialization config of the destination spreadsheet. This enables the *Paste link* and *Update values* buttons:

   ``` ts
   const config = {
     events: {
       onRequestReferenceData,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

6. If the clipboard contains the source spreadsheet metadata from step 3, and the destination spreadsheet config includes the `onRequestReferenceData` handler, the *Paste link* button appears in the paste dialog.

   <img alt="Paste link" src="/assets/images/editor/paste-link.png" width="550px" />

7. When the user clicks *Paste link*, a formula is inserted into the current cell and the `referenceData` object is saved to the destination file. The formula has the following format:

   ``` txt
   ='[fileName]sheetName'!cell
   ```

   | Parameter | Type   | Example   | Description                                     |
   | --------- | ------ | --------- | ----------------------------------------------- |
   | cell      | string | E5        | The cell from which the data was copied.        |
   | fileName  | string | new\.xlsx | The file name from which the data was copied.   |
   | sheetName | string | Sheet1    | The sheet name from which the data was copied.  |

   The data update request is sent to the source file URL.

   :::note
   You can also type a formula in this format manually — the external data will be inserted the same way. However, in that case the `onRequestReferenceData` event fires with only the `path` parameter.
   :::

8. When the user clicks the *Update values* button in the *External links* dialog (on the *Data* tab) to refresh data from the source file, the [`onRequestReferenceData`](../../usage-api/config/events.md#onrequestreferencedata) event fires. The `data` parameter contains an object with the unique file data from the source file, the file path or name, and the file URL.

   :::note
   To send data to the [`setReferenceData`](../../usage-api/methods.md#setreferencedata) method, search for the file by `referenceData` first. If that field is missing or the file cannot be found, fall back to the `path` or `link` parameters.
   :::

   ``` ts
   function onRequestReferenceData(event) {
     const link = event.data.link;
     const referenceData = event.data.referenceData;
     const path = event.data.path;
   }
   ```

   <img alt="Update values" src="/assets/images/editor/update-values.png" width="700px" />

9. To refresh the data, call the [`setReferenceData`](../../usage-api/methods.md#setreferencedata) method. The call must include a [`token`](./security.md) to validate the parameters.

   :::note
   This method only executes when the user has permissions to the source file.
   :::

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
   });
   ```


## Working with external links

1. Specify the [`onRequestOpen`](../../usage-api/config/events.md#onrequestopen) event handler in the initialization config for the *Open source* button to appear. When the user clicks *Open source* to open an external link, this event fires.

   The `data` parameter contains an object with the unique file data, the file path, and a new browser tab name. To open the referenced external file in a new tab, call [`window.open`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) with the source URL and `windowName`.

   <img alt="Open source" src="/assets/images/editor/open-source.png" width="498px" />

   Example:

   ``` ts
   function onRequestOpen(event) {
     const path = event.data.path;
     const referenceData = event.data.referenceData;
     const windowName = event.data.windowName;
     window.open("https://example.com/external-url.docx", windowName);
   }

   const config = {
     events: {
       onRequestOpen,
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```


2. Specify the [`onRequestReferenceSource`](../../usage-api/config/events.md#onrequestreferencesource) event handler in the initialization config for the *Change source* button to appear. When the user clicks *Change source* to change an external link, this event fires. If the event is not declared, the *Change source* button will not appear.

   The `data` parameter contains an object with the unique file data and the file path or name. When the button is clicked, call the [`setReferenceSource`](../../usage-api/methods.md#setreferencesource) method to change the source of the external data. The call must include a [`token`](./security.md) to validate the parameters.

   :::note
   To send data to the `setReferenceSource` method, search for the file by `referenceData` first. If that field is missing or the file cannot be found, fall back to the `path` parameter.
   :::

   <img alt="Change source" src="/assets/images/editor/change-source.png" width="498px" />

   Example:

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
