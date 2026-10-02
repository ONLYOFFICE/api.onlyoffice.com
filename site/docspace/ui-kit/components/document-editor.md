---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/document-editor/DocumentEditor.mdx"
---

# Document Editor

DocumentEditor wraps the \`@onlyoffice/document-editor-react\` component, embedding an ONLYOFFICE Document Server editor into the UI.

### Document editor sample

This example opens a document in full edit mode, showing how the wrapper passes the config and callbacks to the embedded editor.

Mounting the editor with an ID, file ID, and fixed size. Editing is allowed by default.

```tsx
<DocumentEditor id="docx-editor" fileId={1} width="100%" height="600px"/>
```

### Document viewer sample

Demonstrates read-only viewing for a file with navigation controls enabled but editing disabled.

The same component in view-only mode via `isView`, with an explicit size and unique instance ID.

```tsx
<DocumentEditor id="pptx-viewer" fileId={4} isView width="100%" height="600px"/>
```

### Document editor with custom event

Demonstrates how to use custom events to interact with the editor.

```tsx
const onDocumentReady = () => {
  const documentEditor = window.DocEditor.instances["custom-event"];
  documentEditor.showMessage("Welcome to ONLYOFFICE Editor!");
};

<DocumentEditor 
    id="custom-event"
    fileId={3} 
    width="100%" 
    height="600px"
    isView
    events_onDocumentReady={onDocumentReady} 
/>
```

### Document editor with auto-fill sample

Shows how to open a spreadsheet, pick a sheet from the selector, then auto-fill it with a chosen dataset using the Document Editor connector API.

```tsx
const [fileId, setFileId] = useState<number | null>(null);
const [isReady, setIsReady] = useState(false);

const onDocumentReady = () => {
  setIsReady(true);
};

const fillSpreadsheetData = () => {
  const documentEditor = window.DocEditor?.instances?.["fill-spreadsheet"];
  
  if (!documentEditor) return;

  const connector = documentEditor.createConnector();
  
  const headers = ["Name", "Position", "Department"];
  const data = [
    ["Mia", "Engineer", "Development"],
    ["John", "Designer", "Marketing"],
    ["Sarah", "Manager", "Sales"]
  ];

  connector.callCommand(() => {
    const oWorksheet = Api.GetActiveSheet();
    
    for (let i = 0; i < headers.length; i++) {
      const headerCell = oWorksheet.GetRangeByNumber(0, i);
      headerCell.SetValue(headers[i]);
      headerCell.SetBold(true);
      headerCell.SetFillColor(Api.CreateColorFromRGB(200, 200, 200));
    }
    
    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        oWorksheet.GetRangeByNumber(row + 1, col).SetValue(data[row][col]);
      }
    }
    
    oWorksheet.SetColumnWidth(0, 15);
    oWorksheet.SetColumnWidth(1, 20);
    oWorksheet.SetColumnWidth(2, 15);
  });
};

<DocumentEditor
  id="fill-spreadsheet"
  fileId={fileId}
  width="100%"
  height="600px"
  events_onDocumentReady={onDocumentReady}
/>

<Button 
  onClick={fillSpreadsheetData} 
  label="Fill Spreadsheet"
  isDisabled={!isReady}
/>
```
