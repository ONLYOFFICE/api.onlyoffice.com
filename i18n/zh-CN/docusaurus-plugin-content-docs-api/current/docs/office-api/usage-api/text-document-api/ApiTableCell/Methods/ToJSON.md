# ToJSON

将 ApiTableCellPr 对象转换为 JSON 对象。

继承自 [ApiTableCellPr.ToJSON](../../ApiTableCellPr/Methods/ToJSON.md)。

## 示例

将表格单元格属性对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the table cell object.

// Convert the cell to json and add it to the document.

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
