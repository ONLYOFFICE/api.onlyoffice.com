# GetCreator

Returns the document author.

## Syntax

```javascript
expression.GetCreator();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the author name recorded in the workbook properties in a spreadsheet.

```javascript editor-xlsx
// How do I find out who created a workbook in a spreadsheet?

// Retrieve and display the name of the person who originally authored the workbook in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetCreator("John Smith");
const creator = core.GetCreator();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Creator: " + creator);
```
