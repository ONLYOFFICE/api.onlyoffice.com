# GetAllTables

从当前文档内容返回所有表格的数组。

继承自 [ApiDocumentContent.GetAllTables](../../ApiDocumentContent/Methods/GetAllTables.md)。

## 示例

从文档内容中获取所有表格的数组。

```javascript editor-docx
// Get all tables added to the document.

// How to retrieve all tables and add a text to its first cell.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let docContent = shape.GetDocContent();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
docContent.Push(table);
let tables = docContent.GetAllTables();
paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text in the first cell.");
let cell = tables[0].GetCell(0, 0);
tables[0].AddElement(cell, 0, paragraph);
```
