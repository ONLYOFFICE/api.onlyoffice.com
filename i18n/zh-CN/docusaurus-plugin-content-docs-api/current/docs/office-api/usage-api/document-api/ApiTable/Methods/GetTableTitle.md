# GetTableTitle

返回表格标题（题注）。

继承自 [ApiTablePr.GetTableTitle](../../ApiTablePr/Methods/GetTableTitle.md)。

## 示例

读取分配给文档中表格的标题标签。

```javascript editor-docx
// How do I retrieve the title stored with a table in a document?

// Output the named heading attached to a table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableTitle("Table 1");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table title: " + tablePr.GetTableTitle());
doc.Push(table);
```
