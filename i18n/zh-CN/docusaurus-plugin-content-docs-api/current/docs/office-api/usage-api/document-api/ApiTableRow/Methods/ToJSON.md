# ToJSON

将 ApiTableRowPr 对象转换为 JSON 对象。

继承自 [ApiTableRowPr.ToJSON](../../ApiTableRowPr/Methods/ToJSON.md)。

## 示例

将表格行格式设置导出为文档中的 JSON 表示。

```javascript editor-docx
// How do I save the formatting settings of a table row as reusable data in a document?

// Preserve row formatting by converting its properties to a JSON string in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);
let json = tableRowPr.ToJSON();
let tableRowPrFromJSON = Api.FromJSON(json);
let classType = tableRowPrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + classType);
```
