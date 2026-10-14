# GetIndex

返回当前单元格的索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

在演示文稿中获取表格单元格的列索引。

```javascript editor-pptx
// Useful for getting the position index of the cell.

// Retrieve the cell index and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(1);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Cell index: " + cell.GetIndex());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
