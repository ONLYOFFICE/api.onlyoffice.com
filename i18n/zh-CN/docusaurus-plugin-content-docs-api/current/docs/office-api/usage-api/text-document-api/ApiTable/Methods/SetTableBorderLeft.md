# SetTableBorderLeft

设置将在当前表格左侧显示的边框。

继承自 [ApiTablePr.SetTableBorderLeft](../../ApiTablePr/Methods/SetTableBorderLeft.md)。

## 示例

在文档中设置表格左侧显示的边框。

```javascript editor-docx
// How to create a 3x3 table and add the left 4 point black border in a document.

// Add left border to the table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the left 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
