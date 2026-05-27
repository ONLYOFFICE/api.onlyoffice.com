# SetCellBorderBottom

设置将显示在当前表格单元格底部的边框。

继承自 [ApiTableCellPr.SetCellBorderBottom](../../ApiTableCellPr/Methods/SetCellBorderBottom.md)。

## 示例

在文档中为表格单元格的底部边缘添加边框。

```javascript editor-docx
// How do I draw a line at the bottom of a table cell in a document?

// Define the style and thickness of the lower border for a table cell in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the bottom 4 point black border to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellBorderBottom("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);
```
