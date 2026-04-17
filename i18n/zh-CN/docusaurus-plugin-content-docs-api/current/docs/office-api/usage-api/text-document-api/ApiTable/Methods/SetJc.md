# SetJc

指定当前表格相对于当前节中文本边距的对齐方式。

Inherited from [ApiTablePr.SetJc](../../ApiTablePr/Methods/SetJc.md).

## 示例

此示例指定表格相对于当前节中文本边距的对齐方式。

```javascript editor-docx
// How to set justification of the paragraph content.

// Change the justification of the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The table is aligned at the center of the page horizontally:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
tablePr.SetJc("center");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```

