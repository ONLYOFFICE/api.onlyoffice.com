# GetNext

返回下一行（如果存在）。

## 语法

```javascript
expression.GetNext();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| null

## 示例

在演示文稿中获取下一行。

```javascript editor-pptx
// Useful for getting the next row from a table row.

// Display text in the first and second rows using GetNext.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const firstRow = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("First row");
const para2 = Api.CreateParagraph();
para2.AddText("Second row");
firstRow.GetCell(0).GetContent().Push(para);
firstRow.GetNext().GetCell(0).GetContent().Push(para2);
slide.RemoveAllObjects();
slide.AddObject(table);
```
