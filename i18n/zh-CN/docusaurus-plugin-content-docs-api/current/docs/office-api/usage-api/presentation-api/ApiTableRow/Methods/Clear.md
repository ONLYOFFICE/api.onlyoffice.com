# Clear

清除当前行的内容。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在演示文稿中清除表格行中的内容。

```javascript editor-pptx
// Useful for removing all content from a row.

// Add text to the first row and then clear it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("This text will be cleared")
row.GetCell(0).GetContent().Push(para);
row.Clear();
const para2 = Api.CreateParagraph();
para2.AddText("First row was cleared")
table.GetRow(1).GetCell(0).GetContent().Push(para2);
slide.RemoveAllObjects();
slide.AddObject(table);
```
