# Fill

设置当前图形对象的填充格式属性。

继承自 [ApiDrawing.Fill](../../ApiDrawing/Methods/Fill.md)。

## 示例

为当前图形对象设置填充格式属性。

```javascript editor-xlsx
// How to color a drawing with a radiant fill in a spreadsheet.

// Change the background color of the shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 90 * 36000, 27 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
fill = Api.CreateRadialGradientFill([gs1, gs2]);
drawing.Fill(fill);
```
