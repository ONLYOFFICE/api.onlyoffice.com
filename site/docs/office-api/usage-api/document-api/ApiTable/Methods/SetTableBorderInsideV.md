# SetTableBorderInsideV

Specifies the border which will be displayed on all vertical table cell borders which are not on the outmost edge
of the parent table (all vertical borders which are not the leftmost or rightmost borders).

Inherited from [ApiTablePr.SetTableBorderInsideV](../../ApiTablePr/Methods/SetTableBorderInsideV.md).

## Example

Add borders between columns inside a table in a document.

```javascript editor-docx
// How do I draw vertical dividing lines between the inner columns of a table in a document?

// Separate table columns from each other with interior vertical borders in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the inside vertical 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderInsideV("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
