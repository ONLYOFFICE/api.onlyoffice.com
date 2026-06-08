# SetNoWrap

指定在文档中显示父表格时当前表格单元格的布局方式。此设置
仅在表格的 [ApiTablePr#SetTableLayout](../../ApiTablePr/Methods/SetTableLayout.md) 表格布局设置为使用 `"autofit"` 算法时影响单元格的行为。

继承自 [ApiTableCellPr.SetNoWrap](../../ApiTableCellPr/Methods/SetNoWrap.md)。

## 示例

防止文本在文档中的表格单元格内换行。

```javascript editor-docx
// How do I stop text from breaking onto multiple lines inside a table cell in a document?

// Keep table cell content on a single line regardless of column width in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetTableLayout("autofit");
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is a table with the autofit type of the table layout.");
doc.Push(table);
let copyTable1 = table.Copy();
copyTable1.SetWidth("percent", 10);
cell = copyTable1.GetRow(0).GetCell(0);
cell.Clear();
cell.GetContent().GetElement(0).AddText("This is a table cell where text is wrapped when we try to change table width.");
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetNoWrap(false);
doc.Push(copyTable1);
let copyTable2 = table.Copy();
copyTable2.SetWidth("percent", 10);
cell = copyTable2.GetRow(0).GetCell(0);
cell.Clear();
cell.GetContent().GetElement(0).AddText("This is a table cell where text is not wrapped when we try to change table width.");
tableCellPr.SetNoWrap(true);
copyTable2.SetStyle(tableStyle);
doc.Push(copyTable2);
```
