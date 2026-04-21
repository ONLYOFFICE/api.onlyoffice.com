# GetTableDescription

返回表格说明。

继承自 [ApiTablePr.GetTableDescription](../../ApiTablePr/Methods/GetTableDescription.md)。

## 示例

获取文档中的表格描述。

```javascript editor-docx
// How to get the table description and display it in the document.

// Add text showing the description of the table in a document.

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
