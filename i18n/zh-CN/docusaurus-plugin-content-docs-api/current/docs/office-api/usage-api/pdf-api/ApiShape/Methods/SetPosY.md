# SetPosY

设置绘图在页面上的 y 位置。

Inherited from [ApiDrawing.SetPosY](../../ApiDrawing/Methods/SetPosY.md).

## 示例

如何更改绘图的 Y 坐标位置。

```javascript editor-pdf
// Get a shape object from a page and move by Y axis.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosY(808400);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
page.AddObject(shape);
```

