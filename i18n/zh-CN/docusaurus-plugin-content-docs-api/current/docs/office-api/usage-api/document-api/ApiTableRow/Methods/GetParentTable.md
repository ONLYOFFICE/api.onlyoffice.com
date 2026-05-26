# GetParentTable

返回当前行的父表格。

## 语法

```javascript
expression.GetParentTable();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

检索文档中包含特定行的表格。

```javascript editor-docx
// How do I get a reference to the whole table from one of its rows in a document?

// Reach back from a row to its containing table to apply changes at the table level in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let row = table.GetRow(0);
let parentTable = row.GetParentTable();
parentTable.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
doc.Push(parentTable);
```
