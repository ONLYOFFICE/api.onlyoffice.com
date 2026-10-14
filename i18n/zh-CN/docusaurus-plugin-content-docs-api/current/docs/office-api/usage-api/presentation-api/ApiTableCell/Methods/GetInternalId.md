# GetInternalId

返回当前表格单元格的内部 ID。

## 语法

```javascript
expression.GetInternalId();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在演示文稿中获取表格单元格的内部标识符。

```javascript editor-pptx
// Useful for getting a unique identifier of a cell.

// Retrieve the internal id and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + cell.GetInternalId());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
