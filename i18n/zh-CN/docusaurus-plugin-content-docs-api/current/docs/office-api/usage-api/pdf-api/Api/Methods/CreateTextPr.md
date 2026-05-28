# CreateTextPr

创建空的文本属性。

## 语法

```javascript
expression.CreateTextPr();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在 PDF 中使用自定义字体大小和粗体样式格式化文本。

```javascript editor-pdf
// How do I change text style and size in a PDF?

// Set bold formatting and increase font size for text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const textPr = Api.CreateTextPr();
textPr.SetFontSize(50);
textPr.SetBold(true);
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
const run = Api.CreateRun();
run.AddText("This is a sample text with the font size set to 25 points and the font weight set to bold.");
run.SetTextPr(textPr);
paragraph.AddElement(run);
docContent.Push(paragraph);
page.AddObject(shape);
```
