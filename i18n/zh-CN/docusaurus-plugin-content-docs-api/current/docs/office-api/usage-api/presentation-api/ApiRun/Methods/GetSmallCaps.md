# GetSmallCaps

返回具有当前文本属性的文本是否显示为比实际字体大小小两磅的大写字母。

继承自 [ApiTextPr.GetSmallCaps](../../ApiTextPr/Methods/GetSmallCaps.md)。

## 示例

检查演示文稿中的文本是否为小型大写字母。

```javascript editor-pptx
// How to know whether the text letters are lowercase or not in a presentation.

// Get the text properties of the run and find whether it is uncapitalized or not in a presentation.

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
textPr.SetSmallCaps(true);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const smallCaps = textPr.GetSmallCaps();
paragraph.AddText("Property of the small capitalized letters: " + smallCaps);
docContent.Push(paragraph);
```
