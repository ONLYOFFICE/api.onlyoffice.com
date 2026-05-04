# SetCellMarginRight

指定表格中特定表格单元格的内容右边与单元格边框之间的间距。

继承自 [ApiTableCellPr.SetCellMarginRight](../../ApiTableCellPr/Methods/SetCellMarginRight.md)。

## 示例

指定表格中特定表格单元格的单元格内容右侧边缘与边框之间的间距。

```javascript editor-docx
// How to add margin to the right of the cell.

// Create a 3x3 table and add the right cell margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the right margin for all the table cells is 36 points.");
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellMarginRight(720);
table.SetStyle(tableStyle);
doc.Push(table);
```
