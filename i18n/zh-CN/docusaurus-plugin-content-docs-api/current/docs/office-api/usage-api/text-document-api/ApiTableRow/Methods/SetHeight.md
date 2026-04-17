# SetHeight

设置当前表格中当前表格行的高度。

Inherited from [ApiTableRowPr.SetHeight](../../ApiTableRowPr/Methods/SetHeight.md).

## 示例

此示例设置表格中当前表格行的高度。

```javascript editor-docx
// Resize the height of the row.

// How to set a minimum row height of the table.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableLook(true, true, true, true, false, false);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);
```

