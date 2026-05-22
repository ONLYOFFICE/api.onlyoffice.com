# SetTableCellMarginTop

指定在父表格（或表格行）中所有表格单元格的单元格内容顶部范围与顶边框之间
保留的空间量。

继承自 [ApiTablePr.SetTableCellMarginTop](../../ApiTablePr/Methods/SetTableCellMarginTop.md)。

## 示例

设置文档中每个表格单元格内容与顶部边缘之间的间距。

```javascript editor-docx
// How do I control how much space appears above the text inside table cells in a document?

// Push cell content away from the top border of each table cell in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableCellMarginTop(720);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the top cell margin is 36 points.");
doc.Push(table);
```
