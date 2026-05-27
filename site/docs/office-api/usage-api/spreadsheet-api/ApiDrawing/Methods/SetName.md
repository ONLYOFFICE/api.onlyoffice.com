# SetName

Sets the name of the current drawing.
If another drawing with the same name already exists, that drawing's name will be reset to a default auto-generated name.

## Syntax

```javascript
expression.SetName(name);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name which will be set to the current drawing. |

## Returns

boolean

## Example

Assign a custom name to a drawing so it can be identified by that name in a spreadsheet.

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
