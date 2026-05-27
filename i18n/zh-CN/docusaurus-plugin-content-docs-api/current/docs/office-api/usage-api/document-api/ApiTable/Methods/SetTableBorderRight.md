# SetTableBorderRight

设置将在当前表格右侧显示的边框。

继承自 [ApiTablePr.SetTableBorderRight](../../ApiTablePr/Methods/SetTableBorderRight.md)。

## 示例

在文档中为表格的右侧应用边框。

```javascript editor-docx
// How do I add a border along the right edge of a table in a document?

// Outline the right side of a table with a visible border line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the right 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderRight("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
