# GetPrevious

返回上一个单元格（如果存在）。

## 语法

```javascript
expression.GetPrevious();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## 示例

在演示文稿中获取行中的上一个单元格。

```javascript editor-pptx
// Useful for getting the cell preceding the current one.

// Add text to the second cell and bold the previous one.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(1);
const para = Api.CreateParagraph();
para.AddText("Cell 2");
cell.GetContent().Push(Api.CreateParagraph());
const prevCell = cell.GetPrevious();
const para2 = Api.CreateParagraph();
const run = Api.CreateRun();
run.AddText("Cell 1");
para2.AddElement(run);
prevCell.GetContent().Push(para2);
slide.RemoveAllObjects();
slide.AddObject(table);
```
