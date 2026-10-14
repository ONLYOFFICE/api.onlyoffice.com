# HasTextContent

检查当前绘图对象是否具有文本主体。

继承自 [ApiDrawing.HasTextContent](../../ApiDrawing/Methods/HasTextContent.md)。

## 语法

```javascript
expression.HasTextContent();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在操作之前检查 PDF 页面上的图形对象是否可以包含文本。

```javascript editor-pdf
// Images and tables have no text body, so the check tells a text drawing from the others.

// Show the answer in a second drawing before and after the text body is created.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 150 * 36000, 65 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);

const reportParagraph = report.GetContent().GetElement(0);
reportParagraph.AddText("before: " + shape.HasTextContent());

shape.GetTextRange().SetText("Sample");

reportParagraph.AddText(" after: " + shape.HasTextContent());
```
