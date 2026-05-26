# GetScreenTipText

Returns the screen tip text of the hyperlink.

## Syntax

```javascript
expression.GetScreenTipText();
```

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the tooltip text that appears when hovering over a hyperlink in a spreadsheet.

```javascript editor-xlsx
// How do I find out what tooltip is set on a hyperlink in a spreadsheet?

// Retrieve the hover hint message attached to a hyperlink in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(160, 100, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const run = Api.CreateRun();
run.AddText('Visit ONLYOFFICE for developers');
paragraph.AddElement(run, 0);

const hyperlink = run.AddHyperlink('https://api.onlyoffice.com', 'ONLYOFFICE for developers');
worksheet.GetRange('A1').SetValue('Screen tip: ' + hyperlink.GetScreenTipText());
```
