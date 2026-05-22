# SetTableLayout

指定将用于在文档中布局当前表格内容的算法。

继承自 [ApiTablePr.SetTableLayout](../../ApiTablePr/Methods/SetTableLayout.md)。

## 示例

选择文档中的表格是自动调整列大小还是保持固定宽度。

```javascript editor-docx
// How do I prevent table columns from changing size when content is added in a document?

// Lock column widths so the table structure stays consistent regardless of content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetTableLayout("fixed");
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Fixed layout");
doc.Push(table);
```
