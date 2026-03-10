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

How to return a number of cells from the row.

```javascript editor-pdf
// Create a table, count its cells and display the number in the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cellsCount = row.GetCellsCount();
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The number of cells in the row: " + cellsCount);
content.Push(paragraph);

page.AddObject(table);
```
