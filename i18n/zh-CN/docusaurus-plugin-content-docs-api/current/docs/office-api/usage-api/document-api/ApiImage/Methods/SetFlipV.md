# SetFlipV

设置当前绘图的垂直翻转。

继承自 [ApiDrawing.SetFlipV](../../ApiDrawing/Methods/SetFlipV.md)。

## 示例

在文档中垂直翻转绘图。

```javascript editor-docx
// How do I invert a shape upside down in a document?

// Place an original arrow and its vertically mirrored copy side by side in a document.

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
