# SetOutLine

设置指定图形对象的轮廓属性。

继承自 [ApiDrawing.SetOutLine](../../ApiDrawing/Methods/SetOutLine.md)。

## 示例

在电子表格中为绘图添加可见边框以定义其边缘。

```javascript editor-xlsx
// How do I add a colored outline to a shape in a spreadsheet?

// Style a drawing by giving it a solid border with a chosen color and thickness in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing1 = worksheet.AddShape("cube", 90 * 36000, 27 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
drawing1.SetOutLine(stroke);
```
