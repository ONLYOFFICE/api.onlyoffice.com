# GetAllParagraphs

Returns an array of all paragraphs from the current document content.

## Syntax

```javascript
expression.GetAllParagraphs();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

Collect every paragraph stored inside a shape's text area in a spreadsheet.

```javascript editor-xlsx
// How do I retrieve the full list of paragraphs from the content of a shape in a spreadsheet?

// Count or iterate all text paragraphs held within a drawing's content block in a spreadsheet.

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
const p1 = content.GetElement(0);
p1.AddText('First paragraph.');
content.Push(p1);

const p2 = Api.CreateParagraph();
p2.AddText('Second paragraph.');
content.Push(p2);

const paragraphs = content.GetAllParagraphs();
worksheet.GetRange('A1').SetValue('Paragraph count: ' + paragraphs.length);
```
