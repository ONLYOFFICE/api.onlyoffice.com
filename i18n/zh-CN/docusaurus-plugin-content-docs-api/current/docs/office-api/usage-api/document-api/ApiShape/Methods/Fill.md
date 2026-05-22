# Fill

设置当前图形对象的填充格式属性。

继承自 [ApiDrawing.Fill](../../ApiDrawing/Methods/Fill.md)。

## 示例

在文档中为复制的形状应用径向渐变填充。

```javascript editor-docx
// How do I set a gradient fill on a drawing object in a document?

// Differentiate two identical shapes by filling the duplicate with a radial gradient while leaving the original solid.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let copyDrawing = drawing.Copy();
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
fill = Api.CreateRadialGradientFill([gs1, gs2]);
copyDrawing.Fill(fill);
paragraph.AddDrawing(copyDrawing);
```
