# MergeCells

合并当前行中的单元格。

## 语法

```javascript
expression.MergeCells();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## 示例

在文档中将表格行的所有单元格合并为单个单元格。

```javascript editor-docx
// How do I join every cell across a row so they become one in a document?

// Collapse a row's individual cells into one unified cell to span the full width in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
table.SetWidth("percent", 100);
row.MergeCells();
doc.Push(table);
```
