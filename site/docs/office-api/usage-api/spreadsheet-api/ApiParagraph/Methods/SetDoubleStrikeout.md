# SetDoubleStrikeout

Specifies that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line.

## Syntax

```javascript
expression.SetDoubleStrikeout(isDoubleStrikeout);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | Required | boolean |  | Specifies that the contents of the current paragraph are displayed double struck through. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example shows how to apply double strikeout formatting to a paragraph inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(150, 110, 90));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text has double strikeout.');
paragraph.SetDoubleStrikeout(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has no strikeout.');
content.Push(paragraph2);

```
