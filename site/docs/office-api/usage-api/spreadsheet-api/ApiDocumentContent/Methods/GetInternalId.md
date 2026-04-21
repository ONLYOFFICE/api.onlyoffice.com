# GetInternalId

Returns an internal ID of the current document content.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the internal identifier of a document content element inside a shape in a spreadsheet.

```javascript editor-xlsx
// How can I get the internal id using a document content in a spreadsheet?

// Get the internal id for a document content in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(89, 130, 190));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'rect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(25),
	fill, stroke,
	0, 0, 3, 0
);
const content = shape.GetContent();
const internalId = content.GetInternalId();
worksheet.GetRange('A1').SetValue('Internal ID: ' + internalId);
```
