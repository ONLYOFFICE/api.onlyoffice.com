# GetColumnsCount

返回当前表格的列数。

## 语法

```javascript
expression.GetColumnsCount();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

在演示文稿中获取表格的列数。

```javascript editor-pptx
// Useful for counting the number of columns in a table.

// Create a table, add a column, and display the column count in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const countBefore = table.GetColumnsCount();
table.AddColumn();
const countAfter = table.GetColumnsCount();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Columns before: " + countBefore + ", after adding: " + countAfter);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
