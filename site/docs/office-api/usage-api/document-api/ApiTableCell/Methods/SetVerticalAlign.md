# SetVerticalAlign

Specifies the vertical alignment for the text contents within the current table cell.

Inherited from [ApiTableCellPr.SetVerticalAlign](../../ApiTableCellPr/Methods/SetVerticalAlign.md).

## Example

Control where text is positioned vertically inside a table cell in a document.

```javascript editor-docx
// How do I align text to the top, middle, or bottom of a table cell in a document?

// Anchor cell content to a specific vertical position within a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetVerticalAlign("bottom");
let cell = table.GetRow(0).GetCell(0);
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
doc.Push(table);
```
