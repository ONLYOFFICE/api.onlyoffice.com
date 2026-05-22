# GetAllTables

从当前文档内容返回所有表格的数组。

## 语法

```javascript
expression.GetAllTables();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)[]

## 示例

从文档中的内容容器检索所有表格。

```javascript editor-docx
// How do I get every table inside a shape or content area in a document?

// Write text into the first cell of the first table found inside a shape in a document.

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
