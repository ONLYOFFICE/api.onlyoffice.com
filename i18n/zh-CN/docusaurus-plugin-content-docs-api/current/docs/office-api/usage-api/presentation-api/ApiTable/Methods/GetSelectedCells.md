# GetSelectedCells

返回当前表格中选定的单元格。

## 语法

```javascript
expression.GetSelectedCells();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)[]

## 示例

在演示文稿中从表格获取所选单元格。

```javascript editor-pptx
// Useful for retrieving currently selected cells in a table.

// Create a table and get the list of selected cells (returns empty when no selection).

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.GetCell(0, 0).Select();
presentation.MoveCursorRight(3, true, false);
const selectedCells = table.GetSelectedCells();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Selected cells count: " + selectedCells.length);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
