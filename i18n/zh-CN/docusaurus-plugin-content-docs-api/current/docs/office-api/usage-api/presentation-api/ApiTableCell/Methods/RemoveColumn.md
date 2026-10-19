# RemoveColumn

删除包含当前单元格的列。

## 语法

```javascript
expression.RemoveColumn();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在演示文稿中删除包含该单元格的列。

```javascript editor-pptx
// Useful for deleting a column by its cell.

// Get the first cell and remove its entire column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText("This column will be removed.")
cell.GetContent().Push(para);
cell.RemoveColumn();
slide.RemoveAllObjects();
slide.AddObject(table);
```
