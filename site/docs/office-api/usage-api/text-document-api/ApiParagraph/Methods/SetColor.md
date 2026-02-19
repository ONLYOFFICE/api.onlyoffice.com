# SetColor

Sets the text color to the current paragraph.

## Syntax

```javascript
expression.SetColor(color);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | No description provided. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example sets the text color to the current paragraph.

```javascript editor-docx
// Color the paragraph text with orange.

// Get the first paragraph and make its font color orange.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('This is a paragraph with the font color set to orange.');
firstParagraph.SetColor(255, 111, 61);

const color = Api.HexColor('ff6f3d');
const secondParagraph = Api.CreateParagraph();
secondParagraph.AddText('This text is in same orange color, but created using HexColor method.');
secondParagraph.SetColor(color);
doc.Push(secondParagraph);

```
