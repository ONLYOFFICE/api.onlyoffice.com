# GetParentTable

返回当前单元格的父表格。

## 语法

```javascript
expression.GetParentTable();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

在演示文稿中获取表格单元格的父表格。

```javascript editor-pptx
// Useful for getting the table that contains the cell.

// Get the parent table and set its background color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const parentTable = cell.GetParentTable();
parentTable.SetBackgroundColor(Api.RGB(255, 213, 79));
slide.RemoveAllObjects();
slide.AddObject(table);
```
