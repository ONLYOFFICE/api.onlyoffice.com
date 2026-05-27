# SetSmallCaps

Specifies that all the small letter characters in this paragraph are formatted for display only as their capital
letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | boolean |  | Specifies if the contents of the current paragraph are displayed capitalized two points smaller or not. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Display all text in a paragraph using small capital letters inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I make lowercase letters appear as small capitals in a paragraph in a spreadsheet?

// Transform the capitalization style of a paragraph so every letter renders as a small cap in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(110, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is displayed in small caps.');
paragraph.SetSmallCaps(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has normal capitalization.');
content.Push(paragraph2);
```
