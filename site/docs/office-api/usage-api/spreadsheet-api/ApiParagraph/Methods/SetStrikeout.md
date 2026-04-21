# SetStrikeout

Specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line.

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean |  | Specifies that the contents of the current paragraph are displayed struck through. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Apply strikeout formatting to all text in a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How to set strikeout for a paragraph in a spreadsheet?

// Set strikeout and display the result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(130, 110, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text has a strikeout.');
paragraph.SetStrikeout(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has no strikeout.');
content.Push(paragraph2);
```
