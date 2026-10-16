# GetType

返回当前表格条件样式的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[TableStyleOverrideType](../../Enumeration/TableStyleOverrideType.md)

## 示例

在演示文稿中获取条件格式区域的类型。

```javascript editor-pptx
// Useful for getting the type of a table style part.

// Get the table style part and display its type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
const stylepr = style.GetConditionalTableStyle("wholeTable");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Type: " + stylepr.GetType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
