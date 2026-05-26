# GetNext

返回下一个单元格（如果存在）。

## 语法

```javascript
expression.GetNext();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## 示例

导航到文档中给定表格单元格之后的单元格。

```javascript editor-docx
// How do I move to the next cell after a specific table cell in a document?

// Step forward from one table cell to the adjacent one in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
doc.Push(table);
let nextCell = table.GetCell(0, 0).GetNext();
nextCell.GetContent().GetElement(0).SetBold(true);
```
