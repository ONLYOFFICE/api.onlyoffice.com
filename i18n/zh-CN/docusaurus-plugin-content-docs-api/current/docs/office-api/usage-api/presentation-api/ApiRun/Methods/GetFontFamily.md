# GetFontFamily

从当前文本属性返回字体系列。
如果字体是通过主题设置的，此方法会自动从主题计算字体。

继承自 [ApiTextPr.GetFontFamily](../../ApiTextPr/Methods/GetFontFamily.md)。

## 示例

从文本运行属性检索字体系列。

```javascript editor-pptx
// Create a shape with a text run and set a specific font family.

// Get and display the font name used in the text.

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
textPr.SetFontFamily("Arial");
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const fontFamily = textPr.GetFontFamily();
paragraph.AddText("Font family: " + fontFamily);
docContent.Push(paragraph);
```
