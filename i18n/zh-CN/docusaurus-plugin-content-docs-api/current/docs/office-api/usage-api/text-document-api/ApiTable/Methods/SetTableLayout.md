# SetTableLayout

指定将用于在文档中布局当前表格内容的算法。

继承自 [ApiTablePr.SetTableLayout](../../ApiTablePr/Methods/SetTableLayout.md)。

## 示例

指定在文档中用于布局表格内容的算法。

```javascript editor-docx
// How to set the table layout in a document.

// Create a table and make its layout fixed in a document.

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
