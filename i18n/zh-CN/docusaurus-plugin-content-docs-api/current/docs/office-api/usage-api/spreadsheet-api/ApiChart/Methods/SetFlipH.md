# SetFlipH

设置当前绘图的水平翻转。

继承自 [ApiDrawing.SetFlipH](../../ApiDrawing/Methods/SetFlipH.md)。

## 示例

在电子表格中水平翻转绘图对象。

```javascript editor-xlsx
// How to set the horizontal flip property of the shape in a spreadsheet.

// Create a drawing and flip it horizontally in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetFlipH(true);
let flip = drawing.GetFlipH();
worksheet.SetColumnWidth(0, 30);
worksheet.GetRange("A1").SetValue("Drawing is flipped horizontally: " + flip);
```
