# SetTableBorderRight

设置将在当前表格右侧显示的边框。

Inherited from [ApiTablePr.SetTableBorderRight](../../ApiTablePr/Methods/SetTableBorderRight.md).

## 示例

此示例设置将在表格右侧显示的边框。

```javascript editor-docx
// How to create a 3x3 table and add the right 4 point black border.

// Add right border to the table.

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

