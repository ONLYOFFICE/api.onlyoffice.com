# GetHighlight

从当前文本属性获取高亮属性。

继承自 [ApiTextPr.GetHighlight](../../ApiTextPr/Methods/GetHighlight.md)。

## 示例

检查演示文稿中的文本是否应用了高亮颜色。

```javascript editor-pptx
// How do I find out if text is highlighted in a presentation?

// Read the highlight property of text to determine its highlighting status in a presentation.

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
textPr.SetHighlight("lightGray");
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const highlight = textPr.GetHighlight();
paragraph.AddText("Highlight property: " + highlight);
docContent.Push(paragraph);
```
