# GetTablePr

返回将应用于表格中符合条件格式类型的所有区域的表格属性集。

## 语法

```javascript
expression.GetTablePr();
```

`expression` - 表示 [ApiTableStylePr](../ApiTableStylePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTablePr](../../ApiTablePr/ApiTablePr.md)

## 示例

在演示文稿中从表格样式部分获取表格属性。

```javascript editor-pptx
// Useful for getting table properties from a conditional table style.

// Get the wholeTable style part and set a border using its table properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
const stylepr = style.GetConditionalTableStyle("wholeTable");
const tablePr = stylepr.GetTablePr();
const paragraph = Api.CreateParagraph();
paragraph.AddText("GetTablePr class type: " + tablePr.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
