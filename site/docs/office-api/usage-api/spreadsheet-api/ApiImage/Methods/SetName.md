# SetName

Sets the name of the current drawing.
If another drawing with the same name already exists, that drawing's name will be reset to a default auto-generated name.

Inherited from [ApiDrawing.SetName](../../ApiDrawing/Methods/SetName.md).

## Example

Set the name for a drawing object in a spreadsheet.

```javascript editor-xlsx
// How to set name for a drawing object in a spreadsheet?

// Set name and display the result in a spreadsheet.

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
