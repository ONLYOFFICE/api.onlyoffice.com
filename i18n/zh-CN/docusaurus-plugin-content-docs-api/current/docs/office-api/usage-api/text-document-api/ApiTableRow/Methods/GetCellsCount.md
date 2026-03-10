# GetCellsCount

返回当前行中的单元格数量。

## 语法

```javascript
expression.GetCellsCount();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例展示如何获取行中的单元格数量。

```javascript editor-docx
// How to count the cells of the row.

// Display the number of row cells.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
let cellsCount = tableRow.GetCellsCount();
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of cells in the first row = " + cellsCount);
```
