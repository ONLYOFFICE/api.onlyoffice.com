# GetAllTables

从当前文档内容返回所有表格的数组。

继承自 [ApiDocumentContent.GetAllTables](../../ApiDocumentContent/Methods/GetAllTables.md)。

## 语法

```javascript
expression.GetAllTables();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)[]

## 示例

获取文档中的所有表格。

```javascript editor-docx
// How do I collect every table present in a document?

// Insert text into the first cell of the first table to populate it with initial content.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let tables = doc.GetAllTables();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text in the first cell.");
let cell = tables[0].GetCell(0, 0);
tables[0].AddElement(cell, 0, paragraph);
```
