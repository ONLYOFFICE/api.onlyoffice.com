# SetTableInd

Specifies the indentation which will be added before the leading edge of the current table in the document
(the left edge in the left-to-right table, and the right edge in the right-to-left table).

Inherited from [ApiTablePr.SetTableInd](../../ApiTablePr/Methods/SetTableInd.md).

## Example

This example specifies the indentation which will be added before the leading edge of the table in the document.

```javascript editor-docx
// How to display the table description in the document.

// Get the table description from the table properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the indent of 1 inch for the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableInd(1440);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```

