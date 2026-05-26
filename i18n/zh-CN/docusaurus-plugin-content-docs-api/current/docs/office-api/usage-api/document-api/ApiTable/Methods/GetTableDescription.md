# GetTableDescription

返回表格说明。

继承自 [ApiTablePr.GetTableDescription](../../ApiTablePr/Methods/GetTableDescription.md)。

## 示例

读取分配给文档中表格的描述性文本。

```javascript editor-docx
// How do I retrieve the written description stored with a table in a document?

// Display the accessibility description associated with a table in a document.

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
