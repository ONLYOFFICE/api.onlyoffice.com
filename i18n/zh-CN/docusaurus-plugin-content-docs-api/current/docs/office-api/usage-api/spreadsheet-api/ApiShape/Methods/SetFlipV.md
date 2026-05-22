# SetFlipV

设置当前绘图的垂直翻转。

继承自 [ApiDrawing.SetFlipV](../../ApiDrawing/Methods/SetFlipV.md)。

## 示例

在电子表格中将绘图从上到下镜像。

```javascript editor-xlsx
// How do I flip a drawing so it faces the opposite vertical direction in a spreadsheet?

// Reverse a shape along its horizontal axis to produce a vertical mirror image in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetFlipV(true);
let flip = drawing.GetFlipV();
worksheet.SetColumnWidth(0, 28);
worksheet.GetRange("A1").SetValue("Drawing is flipped vertically: " + flip);
```
