# GetName

Returns the name of the workbook.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiWorkbook](../ApiWorkbook.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the name of the current workbook (filename)

```javascript editor-xlsx playground
const workbook = Api.GetActiveWorkbook();
const workbookName = workbook.GetName();
const worksheet = workbook.GetActiveSheet();

const lightGreen = Api.CreateRGBColor(16, 121, 63);
const darkGreen = Api.CreateRGBColor(24, 92, 55);
const fill = Api.CreateSolidFill(lightGreen);
const stroke = Api.CreateStroke(2, Api.CreateSolidFill(darkGreen));
let shape = worksheet.AddShape(
	'rect',
	100 * 36000, 70 * 36000,
	fill, stroke,
	0, 2 * 36000,
	0, 3 * 36000
);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Filename: ' + workbookName);

```
