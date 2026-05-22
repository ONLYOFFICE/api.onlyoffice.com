# SetTableDescription

设置表格说明。

继承自 [ApiTablePr.SetTableDescription](../../ApiTablePr/Methods/SetTableDescription.md)。

## 示例

为文档中的表格分配描述性文本标签。

```javascript editor-docx
// How do I attach a written description to a table in a document?

// Give a table a readable summary that can be retrieved later in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableDescription("Empty table");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table description: " + tablePr.GetTableDescription());
doc.Push(table);
```
