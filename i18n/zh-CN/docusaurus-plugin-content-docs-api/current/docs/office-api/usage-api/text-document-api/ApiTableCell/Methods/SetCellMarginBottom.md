# SetCellMarginBottom

指定表格中特定表格单元格的内容底边与
单元格边框之间的间距。

Inherited from [ApiTableCellPr.SetCellMarginBottom](../../ApiTableCellPr/Methods/SetCellMarginBottom.md).

## 示例

此示例指定表格中特定表格单元格的内容底边与单元格边框之间的间距。

```javascript editor-docx
// How to add margin to the bottom of the cell.

// Create a 3x3 table and add the bottom cell margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the bottom margin for all the table cells is 36 points.");
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellMarginBottom(720);
table.SetStyle(tableStyle);
doc.Push(table);
```

