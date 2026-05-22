# GetTitle

Returns the document title.

## Syntax

```javascript
expression.GetTitle();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the title stored in the workbook document properties in a spreadsheet.

```javascript editor-xlsx
// How do I retrieve the title that has been saved for a workbook in a spreadsheet?

// Fetch the document title from the metadata fields of the file in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetTitle("My Workbook Title");
const title = core.GetTitle();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Title: " + title);
```
