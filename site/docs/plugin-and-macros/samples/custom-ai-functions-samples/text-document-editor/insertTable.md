# insertTable

This function inserts a table at the current cursor position or at the start/end of the document. You can specify the number of rows and columns, and optionally add headers.

## Prompts

- Create a table with 3 rows and 4 columns
- Insert a table with headers at the start of the document with 5 rows and 3 columns
- Create a table with 2 rows and 2 columns at the current position

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "insertTable",
    description: "Use this function to insert a table at the current cursor position or at the start/end of the document. You can specify the number of rows and columns, and optionally add headers.",
    parameters: {
        type: "object",
        properties: {
            rows: { type: "number", description: "number of rows in the table" },
            columns: { type: "number", description: "number of columns in the table" },
            hasHeaders: { type: "boolean", description: "whether the first row should be formatted as headers" },
            tableStyle: { type: "string", description: "optional table style name (e.g., 'Table Grid', 'Light Grid')" },
            width: { type: "number", description: "table width percentage (default is 100)" },
            widthType: { type: "string", description: "width type - 'percent' or 'point' (default is 'percent')" },
            position: { type: "string", description: "where to insert the table - 'current', 'start', or 'end' (default is 'current')" }
        },
        required: ["rows", "columns"]
    }
});
```

### Parameters

| Name       | Type    | Example          | Description                                                                                      |
|------------|---------|------------------|--------------------------------------------------------------------------------------------------|
| rows       | number  | 3                | Number of rows in the table.                                                                     |
| columns    | number  | 4                | Number of columns in the table.                                                                  |
| hasHeaders | boolean | true             | Whether the first row should be formatted as headers.                                            |
| tableStyle | string  | "Table Grid"     | Optional table style name (e.g., 'Table Grid', 'Light Grid').                                    |
| width      | number  | 100              | Table width percentage (default is 100).                                                         |
| widthType  | string  | "percent"        | Width type - 'percent' or 'point' (default is 'percent').                                       |
| position   | string  | "current"        | Where to insert the table - 'current', 'start', or 'end' (default is 'current').               |

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.rows = params.rows || 3;
    Asc.scope.columns = params.columns || 3;
    Asc.scope.hasHeaders = params.hasHeaders || false;
    Asc.scope.tableStyle = params.tableStyle;
    Asc.scope.width = params.width || 100;
    Asc.scope.widthType = params.widthType || "percent";
    Asc.scope.position = params.position || "current";

    await Asc.Editor.callCommand(function() {
        let doc = Api.GetDocument();
        
        if (Asc.scope.position === "start") {
            doc.MoveCursorToStart();
        } else if (Asc.scope.position === "end") {
            doc.MoveCursorToEnd();
        }
        
        let table = Api.CreateTable(Asc.scope.rows, Asc.scope.columns);
        doc.InsertContent([table]);
    
        let unit = (Asc.scope.widthType === "point") ? "twips" : Asc.scope.widthType;
        let widthValue = (Asc.scope.widthType === "point") ? (Asc.scope.width * 20) : Asc.scope.width;
        table.SetWidth(unit, widthValue);
    
        if (Asc.scope.tableStyle) {
            table.SetStyle(Asc.scope.tableStyle);
        }
    
        if (Asc.scope.hasHeaders) {
            for (let col = 0; col < Asc.scope.columns; col++) {
                let cell = table.GetCell(0, col);
                if (cell) {
                    let para = cell.GetContent().GetElement(0);
                    if (para) {
                        let textPr = para.GetTextPr();
                        textPr.SetBold(true);
                        para.SetTextPr(textPr);
                    }
                }
            }
        }
    });
};

return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [MoveCursorToStart](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/MoveCursorToStart.md), [MoveCursorToEnd](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/MoveCursorToEnd.md), [CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md), [InsertContent](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md), [SetWidth](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetWidth.md), [SetStyle](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetStyle.md), [GetCell](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md), [GetContent](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md), [GetElement](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElement.md), [GetTextPr](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetTextPr.md), [SetBold](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetBold.md), [SetTextPr](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetTextPr.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/insertTable.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/insertTable.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
