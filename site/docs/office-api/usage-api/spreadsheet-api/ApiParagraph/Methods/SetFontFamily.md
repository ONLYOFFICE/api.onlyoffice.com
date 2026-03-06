# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

```javascript
expression.SetFontFamily(sFontFamily);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | string |  | The font family or families used for the current paragraph. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example shows how to set the font family for all text in a paragraph inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(100, 150, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text uses the Georgia font family.');
paragraph.SetFontFamily('Georgia');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text uses the default font family.');
content.Push(paragraph2);

```
