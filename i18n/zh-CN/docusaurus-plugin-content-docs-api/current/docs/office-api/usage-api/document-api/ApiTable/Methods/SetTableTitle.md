# SetTableTitle

设置表格标题（题注）。

继承自 [ApiTablePr.SetTableTitle](../../ApiTablePr/Methods/SetTableTitle.md)。

## 示例

在文档中设置表格标题。

```javascript editor-docx
// How to rename the table title in a document.

// Create a table and indicate its title in a document.

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
