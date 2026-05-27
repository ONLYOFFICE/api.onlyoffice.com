# ToJSON

将 ApiTableCellPr 对象转换为 JSON 对象。

继承自 [ApiTableCellPr.ToJSON](../../ApiTableCellPr/Methods/ToJSON.md)。

## 示例

将表格单元格格式导出为文档中的可移植数据快照。

```javascript editor-docx
// How do I save and reuse the formatting of a table cell in a document?

// Preserve cell styling by converting its properties to a transferable format in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetCellBorderBottom("single", 32, 0, 51, 51, 51);
table.SetStyle(tableStyle);
doc.Push(table);
let json = tableCellPr.ToJSON();
let tableCellPrFromJSON = Api.FromJSON(json);
let type = tableCellPrFromJSON.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class type = " + type);
```
