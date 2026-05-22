# SetSize

设置对象（图像、形状、图表）边界框的大小。

继承自 [ApiDrawing.SetSize](../../ApiDrawing/Methods/SetSize.md)。

## 示例

通过指定宽度和高度在电子表格中将绘图调整为精确尺寸。

```javascript editor-xlsx
// How do I make a drawing larger or smaller in a spreadsheet?

// Scale a shape to fit a particular area by defining its bounding box dimensions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
