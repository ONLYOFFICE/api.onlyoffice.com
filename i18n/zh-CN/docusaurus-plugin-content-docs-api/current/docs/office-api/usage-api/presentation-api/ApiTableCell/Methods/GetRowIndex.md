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

number \| null

## 示例

在演示文稿中获取表格单元格的行索引。

```javascript editor-pptx
// Useful for getting the row index of the cell.

// Retrieve the row index and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(1).GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Row index: " + cell.GetRowIndex());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
