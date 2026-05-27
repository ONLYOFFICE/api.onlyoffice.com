# SetTableCellMarginRight

Specifies an amount of space which will be left between the right extent of the cell contents and the right
border of all table cells within the parent table (or table row).

Inherited from [ApiTablePr.SetTableCellMarginRight](../../ApiTablePr/Methods/SetTableCellMarginRight.md).

## Example

Set the spacing between cell content and the right edge of every table cell in a document.

```javascript editor-docx
// How do I control how much space appears to the right of the text inside table cells in a document?

// Push cell content away from the right border of each table cell in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableCellMarginRight(720);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the right cell margin is 36 points.");
doc.Push(table);
```
