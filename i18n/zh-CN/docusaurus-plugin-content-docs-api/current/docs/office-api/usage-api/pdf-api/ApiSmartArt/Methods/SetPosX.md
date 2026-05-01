# SetPosX

设置绘图在页面上的 x 位置。

继承自 [ApiDrawing.SetPosX](../../ApiDrawing/Methods/SetPosX.md)。

## 示例

如何在 PDF 文档中更改绘图对象的 X 位置。

```javascript editor-pdf
// Get a shape object from a page and move by X axis.

// Set pos x using a drawing object object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosX(608400);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
page.AddObject(shape);
```
