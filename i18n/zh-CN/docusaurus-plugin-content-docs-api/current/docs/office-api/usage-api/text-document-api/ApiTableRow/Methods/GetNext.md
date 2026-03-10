# GetNext

返回下一行（如果存在）。

## 语法

```javascript
expression.GetNext();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## 示例

此示例展示如何获取下一行。

```javascript editor-docx
// Get the next row of the current row.

// Display the first and the second row.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("First row");
row.GetNext().GetCell(0).GetContent().GetElement(0).AddText("Second row");
doc.Push(table);
```
