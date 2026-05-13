# SetWidth

Sets the preferred width to the current table.
💡 Tables are created with the [ApiTable#SetWidth](../../ApiTable/Methods/SetWidth.md) method properties set by default, which always override the [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) method properties. That is why there is no use to try and apply [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md). We recommend you to use the  [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) method instead.

Inherited from [ApiTablePr.SetWidth](../../ApiTablePr/Methods/SetWidth.md).

## Example

Set the preferred width to the table in a document.

```javascript editor-docx
// How to change the width of the table in a document.

// Set the table width in percentage in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
