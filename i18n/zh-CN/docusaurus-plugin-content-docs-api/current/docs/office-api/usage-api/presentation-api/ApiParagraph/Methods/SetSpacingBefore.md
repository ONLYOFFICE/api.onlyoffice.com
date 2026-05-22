# SetSpacingBefore

设置当前段落的段前间距。如果 isBeforeAuto 参数的值为 true，则
nBefore 的任何值都将被忽略。如果未指定 isBeforeAuto 参数，则
将其解释为 false。

继承自 [ApiParaPr.SetSpacingBefore](../../ApiParaPr/Methods/SetSpacingBefore.md)。

## 示例

在演示文稿中为段落上方添加空间。

```javascript editor-pptx
// How do I set the distance before a paragraph begins in a presentation?

// Configure the gap before a paragraph using paragraph settings in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const paraPr = paragraph.GetParaPr();
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");

const secondParagraph = Api.CreateParagraph();
const secondParaPr = secondParagraph.GetParaPr();
secondParaPr.SetSpacingBefore(1440);
secondParagraph.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
docContent.Push(secondParagraph);
slide.AddObject(shape);
```
