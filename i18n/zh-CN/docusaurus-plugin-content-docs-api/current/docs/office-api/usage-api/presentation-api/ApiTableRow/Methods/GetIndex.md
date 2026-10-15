# GetIndex

返回当前行的索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

在演示文稿中获取行索引。

```javascript editor-pptx
// Useful for getting the index of a table row.

// Get the index of the second row and display it in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(1);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Row index: " + row.GetIndex());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
