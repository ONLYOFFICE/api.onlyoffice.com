# SetSize

设置对象（图像、形状、图表）边界框的大小。

继承自 [ApiDrawing.SetSize](../../ApiDrawing/Methods/SetSize.md)。

## 示例

在电子表格中设置形状边界框的大小。

```javascript editor-xlsx
// How to change the size of the drawing in a spreadsheet.

// Resize a drawing by setting its width and height in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
