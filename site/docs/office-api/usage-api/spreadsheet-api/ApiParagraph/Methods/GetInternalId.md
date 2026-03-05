# GetInternalId

Returns an internal ID of the current content paragraph.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the internal identifier of a paragraph inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
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

worksheet.GetRange('A1').SetValue('Paragraph ID: ' + paragraph.GetInternalId());

```
