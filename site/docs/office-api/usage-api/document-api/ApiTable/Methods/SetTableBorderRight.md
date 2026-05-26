# SetTableBorderRight

Sets the border which will be displayed on the right of the current table.

Inherited from [ApiTablePr.SetTableBorderRight](../../ApiTablePr/Methods/SetTableBorderRight.md).

## Example

Apply a border to the right side of a table in a document.

```javascript editor-docx
// How do I add a border along the right edge of a table in a document?

// Outline the right side of a table with a visible border line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the right 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderRight("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
