# SetCellMarginLeft

指定表格中特定表格单元格的内容左边与
单元格边框之间的间距。

继承自 [ApiTableCellPr.SetCellMarginLeft](../../ApiTableCellPr/Methods/SetCellMarginLeft.md)。

## 示例

设置文档中表格单元格内容与左边缘之间的间距。

```javascript editor-docx
// How do I control the gap between text and the left border of a table cell in a document?

// Push cell content away from the left boundary of a table cell in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the left margin for all the table cells is 36 points.");
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellMarginLeft(720);
table.SetStyle(tableStyle);
doc.Push(table);
```
