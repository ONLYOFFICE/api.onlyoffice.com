# SetTableBorderInsideH

Specifies the border which will be displayed on all horizontal table cell borders which are not on the outmost edge
of the parent table (all horizontal borders which are not the topmost or bottommost borders).

Inherited from [ApiTablePr.SetTableBorderInsideH](../../ApiTablePr/Methods/SetTableBorderInsideH.md).

## Example

Add borders between rows inside a table in a document.

```javascript editor-docx
// How do I draw horizontal dividing lines between the inner rows of a table in a document?

// Separate table rows from each other with interior horizontal borders in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the inside horizontal 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderInsideH("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
