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

此示例展示如何获取行的父表格。

```javascript editor-docx
// Get the parent table of the table row.

// Display the first and the second row.

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
