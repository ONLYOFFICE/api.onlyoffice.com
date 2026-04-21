# GetLastRunWithText

Returns the last Run with text in the current paragraph.

## Syntax

```javascript
expression.GetLastRunWithText();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Get the last run with text from a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How can I get last run with text using a paragraph in a spreadsheet?

// Get last run with text for a paragraph in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(100, 140, 120));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);

const run1 = Api.CreateRun();
run1.AddText('First run. ');
paragraph.AddElement(run1);

const run2 = Api.CreateRun();
run2.AddText('Last run.');
paragraph.AddElement(run2);

const lastRun = paragraph.GetLastRunWithText();
worksheet.GetRange('A1').SetValue('Last run text: ' + lastRun.GetText());
```
