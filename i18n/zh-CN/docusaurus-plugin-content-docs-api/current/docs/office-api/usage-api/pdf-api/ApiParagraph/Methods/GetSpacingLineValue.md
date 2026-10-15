# GetSpacingLineValue

返回段落行距值。

继承自 [ApiParaPr.GetSpacingLineValue](../../ApiParaPr/Methods/GetSpacingLineValue.md)。

## 语法

```javascript
expression.GetSpacingLineValue();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) \| undefined

## 示例

在 PDF 中查找段落中各行之间的距离。

```javascript editor-pdf
// How do I check the line spacing measurement for a paragraph in a PDF?

// Extract the line spacing value used within a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddLineBreak();

const spacingLineValue = paragraph.GetSpacingLineValue();
paragraph.AddText("Spacing line value: " + spacingLineValue);
```
