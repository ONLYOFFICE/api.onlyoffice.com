# SetTableCellMarginLeft

指定在父表格（或表格行）中所有表格单元格的单元格内容左侧范围与左边框之间
保留的空间量。

继承自 [ApiTablePr.SetTableCellMarginLeft](../../ApiTablePr/Methods/SetTableCellMarginLeft.md)。

## 示例

指定单元格内容左侧边缘与父表格中所有表格单元格左边框之间保留的间距。

```javascript editor-docx
// How to add margin to the left of the cell.

// Create a 3x3 table and add the left cell margin.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableCellMarginLeft(720);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text to show that the left cell margin is 36 points.");
doc.Push(table);
```
