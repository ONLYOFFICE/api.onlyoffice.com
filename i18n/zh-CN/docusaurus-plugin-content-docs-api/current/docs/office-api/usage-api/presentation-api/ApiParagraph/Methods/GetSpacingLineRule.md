# GetSpacingLineRule

返回段落行距规则。

继承自 [ApiParaPr.GetSpacingLineRule](../../ApiParaPr/Methods/GetSpacingLineRule.md)。

## 示例

检查演示文稿中段落的行距模式。

```javascript editor-pptx
// How do I read the line spacing rule from a paragraph in a presentation?

// Retrieve whether line spacing is automatic, fixed, or measured in multiples in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
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
