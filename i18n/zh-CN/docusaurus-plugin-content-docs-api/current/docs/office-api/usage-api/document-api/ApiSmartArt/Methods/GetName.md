# GetName

返回当前绘图的名称。

继承自 [ApiDrawing.GetName](../../ApiDrawing/Methods/GetName.md)。

## 示例

获取文档中绘图对象的名称。

```javascript editor-docx
// How to get the name for a drawing object in a document?

// Get the name and display the result in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rect', Api.MillimetersToEmus(80), Api.MillimetersToEmus(40), fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetName('MyRectangle');

const shapeName = drawing.GetName();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('Drawing name: ' + shapeName);
doc.Push(paragraph2);
```
