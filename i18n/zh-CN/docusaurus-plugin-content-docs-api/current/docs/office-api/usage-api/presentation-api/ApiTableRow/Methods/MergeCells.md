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

在演示文稿中合并表格行中的所有单元格。

```javascript editor-pptx
// Useful for merging cells of a row into one.

// Merge all cells of the first row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("Merged row");
row.MergeCells();
row.GetCell(0).GetContent().Push(para);
slide.RemoveAllObjects();
slide.AddObject(table);
```
