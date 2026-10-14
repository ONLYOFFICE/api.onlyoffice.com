# Clear

清除表格中的内容。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在演示文稿中清除表格中的内容。

```javascript editor-pptx
// Useful for clearing all content from a table.

// Create a table with text in a cell, then clear the table content.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const paragraph = Api.CreateParagraph();
paragraph.AddText("This text will be cleared.");
table.GetCell(0, 0).GetContent().Push(paragraph);
table.Clear();
slide.RemoveAllObjects();
slide.AddObject(table);
```
