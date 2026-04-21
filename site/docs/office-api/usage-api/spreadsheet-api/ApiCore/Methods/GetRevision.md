# GetRevision

Returns the document revision.

## Syntax

```javascript
expression.GetRevision();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the revision of the current workbook in a spreadsheet.

```javascript editor-xlsx
// How to get the revision for a core properties in a spreadsheet?

// Get the revision and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetRevision("Rev. A");
const revision = core.GetRevision();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Revision: " + revision);
```
