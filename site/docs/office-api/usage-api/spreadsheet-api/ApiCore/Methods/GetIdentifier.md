# GetIdentifier

Returns the document identifier.

## Syntax

```javascript
expression.GetIdentifier();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the unique identifier stored in the workbook properties in a spreadsheet.

```javascript editor-xlsx
// How do I look up the identifier assigned to a workbook in a spreadsheet?

// Extract and display the workbook's unique ID from the document properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetIdentifier("#ID42");
const identifier = core.GetIdentifier();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Identifier: " + identifier);
```
