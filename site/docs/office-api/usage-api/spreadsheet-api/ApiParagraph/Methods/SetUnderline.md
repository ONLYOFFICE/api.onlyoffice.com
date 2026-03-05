# SetUnderline

Specifies that the contents of this paragraph are displayed along with a line appearing directly below the character
(less than all the spacing above and below the characters on the line).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies that the contents of the current paragraph are displayed underlined. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example shows how to apply underline formatting to all text in a paragraph inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(100, 140, 140));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is underlined.');
paragraph.SetUnderline(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text is not underlined.');
content.Push(paragraph2);

```
