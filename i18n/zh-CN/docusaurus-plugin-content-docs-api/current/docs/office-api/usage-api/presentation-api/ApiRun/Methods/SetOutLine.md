# SetOutLine

设置当前文本块的文本轮廓。

继承自 [ApiTextPr.SetOutLine](../../ApiTextPr/Methods/SetOutLine.md)。

## 示例

在演示文稿中为文本添加边框轮廓。

```javascript editor-pptx
// Can I add a stroke or border to text in a presentation?

// Apply a stroke outline effect to the text characters in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
textPr.SetOutLine(stroke);
paragraph.SetJc("left");
run.AddText("This is a text run with the black text outline set using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
