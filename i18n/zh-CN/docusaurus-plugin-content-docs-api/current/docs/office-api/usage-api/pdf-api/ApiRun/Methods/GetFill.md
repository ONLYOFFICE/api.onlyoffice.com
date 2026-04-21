# GetFill

从当前文本属性获取文本颜色。

继承自 [ApiTextPr.GetFill](../../ApiTextPr/Methods/GetFill.md)。

## 示例

获取 PDF 文档中的文本颜色。

```javascript editor-pdf
// How to know with which color a text is filled in a PDF document.

// Get the text properties of the run and get its font color in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);

const textPr = run.GetTextPr();
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
textPr.SetFill(fill);
page.AddObject(shape);
paragraph = Api.CreateParagraph();

fill = textPr.GetFill();
const type = fill.GetClassType();
paragraph.AddText("Text color type: " + type);
docContent.Push(paragraph);
```
