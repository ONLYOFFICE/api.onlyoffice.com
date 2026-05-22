# GetParentTable

返回当前单元格的父表格。

## 语法

```javascript
expression.GetParentTable();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

访问文档中包含特定单元格的表格。

```javascript editor-docx
// How do I get the table that a particular cell belongs to in a document?

// Reach the surrounding table from a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
let parentTable = table.GetCell(0, 0).GetParentTable();
parentTable.SetTableBorderTop("single", 32, 0, 51, 51, 51);
```
