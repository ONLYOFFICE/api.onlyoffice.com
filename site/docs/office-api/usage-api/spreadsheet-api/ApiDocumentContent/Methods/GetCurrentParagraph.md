# GetCurrentParagraph

Returns the current paragraph where the cursor is located.

## Syntax

```javascript
expression.GetCurrentParagraph();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example shows how to get the current paragraph from the document content of a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 1, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Current paragraph text.');

const currentParagraph = content.GetCurrentParagraph();
const result = currentParagraph ? currentParagraph.GetText() : 'null';
worksheet.GetRange('A1').SetValue('Current paragraph: ' + result);

```
