# GetFlipV

获取当前绘图的垂直翻转状态。

继承自 [ApiDrawing.GetFlipV](../../ApiDrawing/Methods/GetFlipV.md)。

## 示例

检查电子表格中的绘图对象是否垂直翻转。

```javascript editor-xlsx
// How to get the vertical flip property of the shape in a spreadsheet.

// Create a drawing, flip it vertically, and read its vertical flip value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetFlipV(true);
let flip = drawing.GetFlipV();
worksheet.SetColumnWidth(0, 25);
worksheet.GetRange("A1").SetValue("Drawing is flipped vertically: " + flip);
```
