# GetJc

返回段落内容对齐方式。

继承自 [ApiParaPr.GetJc](../../ApiParaPr/Methods/GetJc.md)。

## 示例

检查演示文稿中段落的文本对齐方式。

```javascript editor-pptx
// How do I read the alignment setting of a paragraph in a presentation?

// Retrieve whether text is left-aligned, centered, right-aligned, or justified in a presentation.

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
paraPr.SetJc("center");
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");

const jc = paraPr.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + jc);
docContent.Push(paragraph);
```
