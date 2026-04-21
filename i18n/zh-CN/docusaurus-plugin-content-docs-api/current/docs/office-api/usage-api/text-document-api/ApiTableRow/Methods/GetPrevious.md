# GetPrevious

返回上一行（如果存在）。

## 语法

```javascript
expression.GetPrevious();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## 示例

获取文档中的上一行。

```javascript editor-docx
// Get the previous row from the current row in a document.

// Display the second and the first row in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(1);
row.GetCell(1).GetContent().GetElement(0).AddText("Second row");
row.GetPrevious().GetCell(1).GetContent().GetElement(0).AddText("First row");
doc.Push(table);
```
