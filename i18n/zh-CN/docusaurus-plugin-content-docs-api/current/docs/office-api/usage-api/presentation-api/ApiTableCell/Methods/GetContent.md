# GetContent

返回当前单元格的内容。

## 语法

```javascript
expression.GetContent();
```

`expression` - 表示 [ApiTableCell](../ApiTableCell.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

此示例展示如何获取当前单元格的内容。

```javascript editor-pptx
// How to get a content of the ApiTableCell object.

// Return the ApiDocumentContent object from the table cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the cell.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);

```
