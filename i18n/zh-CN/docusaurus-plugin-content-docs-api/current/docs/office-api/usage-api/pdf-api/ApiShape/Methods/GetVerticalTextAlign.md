# GetVerticalTextAlign

获取可插入段落或文本块的形状内容的垂直对齐方式。

## 语法

```javascript
expression.GetVerticalTextAlign();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[VerticalTextAlign](../../Enumeration/VerticalTextAlign.md)

## 示例

读取 PDF 中形状的垂直文本对齐方式。

```javascript editor-pdf
// Useful for verifying vertical text placement before adjusting shape layout in a PDF.

// Retrieve the current vertical alignment of a shape's inner content in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

shape.SetVerticalTextAlign("center");
const verticalAlign = shape.GetVerticalTextAlign();
const docContent = shape.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("The shape vertical text alignment is: " + verticalAlign);
docContent.Push(paragraph);
page.AddObject(shape);
```
