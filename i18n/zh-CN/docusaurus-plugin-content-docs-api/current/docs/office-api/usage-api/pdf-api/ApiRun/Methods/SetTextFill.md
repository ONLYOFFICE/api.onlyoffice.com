# SetTextFill

设置当前文本块的文本填充。

继承自 [ApiTextPr.SetTextFill](../../ApiTextPr/Methods/SetTextFill.md)。

## 示例

更改 PDF 中文本的颜色。

```javascript editor-pdf
// How do I set the text color in a PDF?

// Apply a color to font characters in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
textPr.SetTextFill(fill);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the black text fill set using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);
```
