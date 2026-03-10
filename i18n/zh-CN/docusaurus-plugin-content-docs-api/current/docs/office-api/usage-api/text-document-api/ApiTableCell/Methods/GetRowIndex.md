# GetRowIndex

返回父行的索引。

## 语法

```javascript
expression.GetRowIndex();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例展示如何获取行的索引。

```javascript editor-docx
// How to get row index of the table cell.

// Retrieve the cell from the table and add a text showing its row index.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Row index: " + table.GetCell(0, 0).GetRowIndex());
```
