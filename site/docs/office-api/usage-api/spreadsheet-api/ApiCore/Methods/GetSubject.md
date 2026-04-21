# GetSubject

Returns the document subject.

## Syntax

```javascript
expression.GetSubject();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the subject of the current workbook in a spreadsheet.

```javascript editor-xlsx
// How can I get the subject using a core properties in a spreadsheet?

// Get the subject for a core properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetSubject("ApiCore Method Showcase");
const subject = core.GetSubject();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Subject: " + subject);
```
