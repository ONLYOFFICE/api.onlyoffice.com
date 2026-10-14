# GetRowsCount

返回当前表格中的行数。

## 语法

```javascript
expression.GetRowsCount();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在演示文稿中获取表格的行数。

```javascript editor-pptx
// Useful for counting the number of rows in a table.

// Create a table, add a row, and display the row count in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const countBefore = table.GetRowsCount();
table.AddRow(null, true);
const countAfter = table.GetRowsCount();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Rows before: " + countBefore + ", after adding: " + countAfter);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
