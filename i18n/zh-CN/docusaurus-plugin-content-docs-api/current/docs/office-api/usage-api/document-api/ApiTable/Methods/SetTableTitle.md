# SetTableTitle

设置表格标题（题注）。

继承自 [ApiTablePr.SetTableTitle](../../ApiTablePr/Methods/SetTableTitle.md)。

## 示例

为文档中的表格分配描述性标题。

```javascript editor-docx
// How do I give a table a named title so it can be identified in a document?

// Label a table with a title string to make it easier to reference in a document.

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
