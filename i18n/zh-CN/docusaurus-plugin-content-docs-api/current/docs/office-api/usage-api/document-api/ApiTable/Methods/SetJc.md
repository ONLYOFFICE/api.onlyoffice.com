# SetJc

指定当前表格相对于当前节中文本边距的对齐方式。

继承自 [ApiTablePr.SetJc](../../ApiTablePr/Methods/SetJc.md)。

## 示例

在文档中将表格水平定位在页面边距内。

```javascript editor-docx
// How do I align a table to the center or sides of the page in a document?

// Place a table at a specific horizontal position relative to the surrounding text in a document.

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
