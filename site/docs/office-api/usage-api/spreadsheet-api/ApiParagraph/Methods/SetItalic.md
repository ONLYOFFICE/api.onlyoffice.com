# SetItalic

Sets the italic property to the text character.

## Syntax

```javascript
expression.SetItalic(isItalic);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies that the contents of the current paragraph are displayed italicized. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Set italic formatting for all text in a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How can I set italic using a paragraph in a spreadsheet?

// Set italic for a paragraph in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(170, 110, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is italic.');
paragraph.SetItalic(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text is not italic.');
content.Push(paragraph2);
```
