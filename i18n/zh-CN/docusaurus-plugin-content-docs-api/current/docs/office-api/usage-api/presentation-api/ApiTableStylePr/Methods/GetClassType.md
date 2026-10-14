# GetClassType

返回 ApiTableStylePr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableStylePr"

## 示例

在演示文稿中获取 ApiTableStylePr 对象的类类型。

```javascript editor-pptx
// Helps when checking the class type of a table style part.

// Get the table style part from the presentation and display its class type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
const stylepr = style.GetConditionalTableStyle("wholeTable");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + stylepr.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
