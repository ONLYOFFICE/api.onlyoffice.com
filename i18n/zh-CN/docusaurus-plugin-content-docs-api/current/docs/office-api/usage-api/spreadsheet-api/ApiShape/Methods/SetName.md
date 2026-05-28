# SetName

设置当前绘图的名称。
如果已存在同名的另一个绘图，该绘图的名称将重置为默认的自动生成名称。

继承自 [ApiDrawing.SetName](../../ApiDrawing/Methods/SetName.md)。

## 示例

为绘图分配自定义名称以便在电子表格中通过该名称识别。

```javascript editor-xlsx
// How do I give a drawing a recognizable label in a spreadsheet?

// Label a shape with a specific name to make it easier to reference later in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(80, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape(
	'ellipse',
	Api.MillimetersToEmus(60), Api.MillimetersToEmus(40),
	fill, stroke,
	0, Api.MillimetersToEmus(20),
	0, Api.MillimetersToEmus(30)
);

drawing.SetName('BlueEllipse');
const content = drawing.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Name: ' + drawing.GetName());

worksheet.GetRange('A1').SetValue('Drawing name was set to: ' + drawing.GetName());
```
