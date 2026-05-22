# GetSpacing

从当前文本属性获取文本间距，以磅的二十分之一为单位。

继承自 [ApiTextPr.GetSpacing](../../ApiTextPr/Methods/GetSpacing.md)。

## 示例

读取演示文稿中文本的字符间距值。

```javascript editor-pptx
// How do I check the spacing between characters in text in a presentation?

// Get the spacing property of text to see the current character spacing in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
const textPr = run.GetTextPr();
textPr.SetSpacing(80);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const spacing = textPr.GetSpacing();
paragraph.AddText("Text spacing: " + spacing);
docContent.Push(paragraph);
```
