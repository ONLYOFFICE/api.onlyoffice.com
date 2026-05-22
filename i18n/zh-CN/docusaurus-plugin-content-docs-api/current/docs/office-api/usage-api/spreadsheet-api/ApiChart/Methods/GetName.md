# GetName

返回当前绘图的名称。

继承自 [ApiDrawing.GetName](../../ApiDrawing/Methods/GetName.md)。

## 示例

检索分配给电子表格中绘图对象的名称。

```javascript editor-xlsx
// How do I read the label that identifies a drawing in a spreadsheet?

// Look up the title given to a shape so it can be referenced later in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.HexColor('#5B9BD5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(80), Api.MillimetersToEmus(40),
	fill, stroke,
	0, 0, 1, 0
);

drawing.SetName('MyRectangle');
const drawingName = drawing.GetName();
worksheet.GetRange('A1').SetValue('Drawing name: ' + drawingName);
```
