# GetWidth

返回当前绘图的宽度。

继承自 [ApiDrawing.GetWidth](../../ApiDrawing/Methods/GetWidth.md)。

## 示例

检索电子表格中绘图对象的宽度。

```javascript editor-xlsx
// How do I find out how wide a drawing is in a spreadsheet?

// Measure the horizontal size of a shape and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
let width = drawing.GetWidth();
worksheet.GetRange("A1").SetValue("Drawing width = " + width);
```
