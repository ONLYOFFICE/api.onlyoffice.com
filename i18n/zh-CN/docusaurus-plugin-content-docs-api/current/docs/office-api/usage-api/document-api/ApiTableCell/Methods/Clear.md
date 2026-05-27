# Clear

清除当前单元格的内容。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除文档中表格单元格的所有内容。

```javascript editor-docx
// How do I remove everything inside a table cell in a document?

// Empty a cell so it is ready to receive fresh content in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
doc.Push(table);
table.GetCell(0, 0).Clear();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content of the table cell was cleared.");
doc.Push(paragraph);
```
