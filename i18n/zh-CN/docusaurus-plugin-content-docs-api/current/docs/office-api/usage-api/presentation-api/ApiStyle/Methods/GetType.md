# GetType

返回当前样式的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[StyleType](../../Enumeration/StyleType.md)

## 示例

在演示文稿中获取当前表格样式的类型。

```javascript editor-pptx
// Helps when reading the type of a table style.

// Get a table style and display its type in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Style type: " + style.GetType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
