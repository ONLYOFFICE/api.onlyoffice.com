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

This example shows how to get all font names used in a paragraph inside a shape.

```javascript editor-xlsx
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
