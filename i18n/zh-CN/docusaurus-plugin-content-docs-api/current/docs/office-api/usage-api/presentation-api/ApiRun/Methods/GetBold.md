# GetBold

从当前文本属性获取粗体属性。

继承自 [ApiTextPr.GetBold](../../ApiTextPr/Methods/GetBold.md)。

## 示例

从文本运行属性检索粗体属性。

```javascript editor-pptx
// Create a shape with a text run and set bold formatting.

// Get and display whether the text is bold.

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
textPr.SetBold(true);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const bold = textPr.GetBold();
paragraph.AddText("Bold property: " + bold);
docContent.Push(paragraph);
```
