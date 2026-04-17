# SetHorFlip

水平翻转当前绘图。

Inherited from [ApiDrawing.SetHorFlip](../../ApiDrawing/Methods/SetHorFlip.md).

## 示例

此示例水平翻转绘图。

```javascript editor-docx
// How to set the horizontal flip property of the shape.

// Create a drawing, add text to it and flip it horizontally.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetHorFlip(true);
```

