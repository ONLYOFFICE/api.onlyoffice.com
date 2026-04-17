# SetTextDirection

指定此表格单元格的文本流方向。

Inherited from [ApiTableCellPr.SetTextDirection](../../ApiTableCellPr/Methods/SetTextDirection.md).

## 示例

此示例指定此表格单元格的文本流方向。

```javascript editor-docx
// Set the direction of the cell text.

// Get the cell from the table and set its direction.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetTextDirection("btlr");
let cell = table.GetRow(0).GetCell(0);
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("btlr");
table.SetStyle(tableStyle);
doc.Push(table);
```

