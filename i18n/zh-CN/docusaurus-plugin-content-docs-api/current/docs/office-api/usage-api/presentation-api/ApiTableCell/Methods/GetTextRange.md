# GetTextRange

返回涵盖表格单元格完整文本内容的 ApiTextRange。

## 语法

```javascript
expression.GetTextRange();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

获取表格单元格的完整文本范围以读取或修改其内容。

```javascript editor-pptx
// Returns an ApiTextRange spanning all text in the cell, or null if the cell has no content.

// Create a table, set text in a cell, then retrieve and bold it via GetTextRange.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(2, 2);
slide.AddObject(table);
const cell = table.GetCell(0, 0);
cell.SetText("Hello");
const range = cell.GetTextRange();
range.SetBold(true);
```
