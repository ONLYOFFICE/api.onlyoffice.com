# SetLanguage

Specifies the language which will be used to check spelling and grammar (if requested) when processing the contents of the current paragraph.

## Syntax

```javascript
expression.SetLanguage(langId);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| langId | Required | string \| null |  | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". Pass *null* to remove the language. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## Example

Set the spell-check language for a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I tell the editor which language to use when checking the text of a shape in a spreadsheet?

// Set the language of the paragraph and print it in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(160, 100, 110));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(90), Api.MillimetersToEmus(40),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This is a paragraph with the spell-check language set.');
paragraph.SetLanguage('en-CA');

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Paragraph language: ' + shape.GetTextRange().GetTextPr().GetLanguage());
content.Push(resultParagraph);
```
