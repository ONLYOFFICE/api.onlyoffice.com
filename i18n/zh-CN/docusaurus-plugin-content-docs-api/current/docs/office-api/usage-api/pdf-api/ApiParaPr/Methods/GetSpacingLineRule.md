# GetSpacingLineRule

返回段落行距规则。

## 语法

```javascript
expression.GetSpacingLineRule();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"auto" \| "atLeast" \| "exact" \| undefined

## 示例

了解 PDF 中行距的测量方式。

```javascript editor-pdf
// How do I check the line spacing rule for a paragraph in a PDF?

// Identify the line spacing rule applied to a paragraph in a PDF.

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
let paragraph = docContent.GetElement(0);
const paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");

const spacingLineRule = paraPr.GetSpacingLineRule();
paragraph = Api.CreateParagraph();
paragraph.AddText("Spacing line rule : " + spacingLineRule);
docContent.Push(paragraph);
```
