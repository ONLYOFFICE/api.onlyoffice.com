# GetBackgroundColor

返回当前表格单元格的背景颜色。

## 语法

```javascript
expression.GetBackgroundColor();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

在演示文稿中获取表格单元格的背景颜色。

```javascript editor-pptx
// Needed when reading the background color of a cell.

// Set a background color and read it back.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.RGB(255, 111, 61));
const color = cell.GetBackgroundColor();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Background color: " + (color ? color.GetHex() : "none"));
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
