# GetName

Returns the name of the current drawing.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the name of a drawing object in a spreadsheet.

```javascript editor-xlsx
// How can I get the name using a drawing object in a spreadsheet?

// Get the name for a drawing object in a spreadsheet.

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
