# Fill

设置当前图形对象的填充格式属性。

Inherited from [ApiDrawing.Fill](../../ApiDrawing/Methods/Fill.md).

## 示例

此示例设置当前图形对象的填充格式属性。

```javascript editor-docx
// How to color a drawing with a radiant fill.

// Change the background color of the shape.

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

