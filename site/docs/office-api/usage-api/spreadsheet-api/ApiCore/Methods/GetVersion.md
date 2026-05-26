# GetVersion

Returns the document version.

## Syntax

```javascript
expression.GetVersion();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the version number saved in the workbook document properties in a spreadsheet.

```javascript editor-xlsx
// How do I find out which version is recorded for a workbook in a spreadsheet?

// Display the version string stored in the metadata of the file in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetVersion("v9.0");
const version = core.GetVersion();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Version: " + version);
```
