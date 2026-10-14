# GetParentRow

返回当前单元格的父行。

## 语法

```javascript
expression.GetParentRow();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## 示例

在演示文稿中获取表格单元格的父行。

```javascript editor-pptx
// Useful for getting the row that contains the cell.

// Get the parent row and set its height.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText("Cell 1");
cell.GetContent().Push(para);
const parentRow = cell.GetParentRow();
parentRow.SetHeight(50 * 36000);
slide.RemoveAllObjects();
slide.AddObject(table);
```
