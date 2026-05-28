# SetName

设置当前绘图的名称。
如果已存在同名的另一个绘图，该绘图的名称将重置为默认的自动生成名称。

继承自 [ApiDrawing.SetName](../../ApiDrawing/Methods/SetName.md)。

## 示例

为文档中的绘图分配自定义名称。

```javascript editor-docx
// How do I label a shape so it can be identified by name in a document?

// Retrieve and display the assigned name inside the shape itself in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(80, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('ellipse', Api.MillimetersToEmus(60), Api.MillimetersToEmus(50), fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetName('BlueEllipse');

const content = drawing.GetContent();
const shapeParagraph = content.GetElement(0);
shapeParagraph.AddText('The name of this drawing:');
shapeParagraph.AddLineBreak();
const nameRun = Api.CreateRun();
nameRun.AddText(drawing.GetName());
nameRun.SetBold(true);
shapeParagraph.AddElement(nameRun);
```
