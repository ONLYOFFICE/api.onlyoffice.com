# SetFlipV

设置当前绘图的垂直翻转。

Inherited from [ApiDrawing.SetFlipV](../../ApiDrawing/Methods/SetFlipV.md).

## 示例

此示例展示如何为绘图设置垂直翻转。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(90, 140, 120));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('upArrow', Api.MillimetersToEmus(40), Api.MillimetersToEmus(80), fill, stroke);
paragraph.AddDrawing(drawing);

const flippedDrawing = drawing.Copy();
flippedDrawing.SetFlipV(true);
paragraph.AddDrawing(flippedDrawing);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('The right arrow shape above is flipped vertically.');
doc.Push(paragraph2);
```

