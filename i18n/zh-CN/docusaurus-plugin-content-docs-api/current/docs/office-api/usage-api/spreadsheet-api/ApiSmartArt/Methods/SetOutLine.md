# SetOutLine

设置指定图形对象的轮廓属性。

继承自 [ApiDrawing.SetOutLine](../../ApiDrawing/Methods/SetOutLine.md)。

## 示例

在电子表格中为指定的图形对象设置轮廓属性。

```javascript editor-xlsx
// How to outline the drawing with the stroke in a spreadsheet.

// Set the borders of the shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = worksheet.AddShape("cube", 90 * 36000, 27 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
drawing1.SetOutLine(stroke);
```
