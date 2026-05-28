# SetTableCellMarginLeft

Specifies an amount of space which will be left between the left extent of the cell contents and the left
border of all table cells within the parent table (or table row).

Inherited from [ApiTablePr.SetTableCellMarginLeft](../../ApiTablePr/Methods/SetTableCellMarginLeft.md).

## Example

Set the spacing between cell content and the left edge of every table cell in a document.

```javascript editor-docx
// How do I control how much space appears to the left of the text inside table cells in a document?

// Push cell content away from the left border of each table cell in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableCellMarginLeft(720);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the left cell margin is 36 points.");
doc.Push(table);
```
