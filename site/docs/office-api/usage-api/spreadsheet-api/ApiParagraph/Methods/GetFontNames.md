# GetFontNames

Returns all font names from all elements inside the current paragraph.

## Syntax

```javascript
expression.GetFontNames();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string[]

## Example

List every font used across a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I find out which fonts a paragraph is using in a spreadsheet?

// Collect the font names from a styled paragraph and write them into a cell in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(140, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Sample text.');
paragraph.SetFontFamily('Consolas');

const fontNames = paragraph.GetFontNames();
worksheet.GetRange('A1').SetValue('Fonts used: ' + fontNames.join(', '));
```
