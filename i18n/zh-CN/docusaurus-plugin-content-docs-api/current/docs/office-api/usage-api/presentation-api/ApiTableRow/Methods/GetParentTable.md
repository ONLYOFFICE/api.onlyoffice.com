# GetParentTable

返回当前行的父表格。

## 语法

```javascript
expression.GetParentTable();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

在演示文稿中获取行的父表格。

```javascript editor-pptx
// Useful for getting the table that contains the row.

// Get the parent table from a row and set the width of its first column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const parentTable = row.GetParentTable();
parentTable.SetColumnWidth(0, 2160000);
slide.RemoveAllObjects();
slide.AddObject(table);
```
