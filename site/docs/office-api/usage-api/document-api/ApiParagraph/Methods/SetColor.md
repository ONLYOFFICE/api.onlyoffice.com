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
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The text color. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Change the text color of a paragraph in a document.

```javascript editor-docx
// How do I apply a specific color to the text of a paragraph in a document?

// Give paragraph text a custom color to make it visually distinct in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('This is a paragraph with the font color set to orange.');
firstParagraph.SetColor(Api.HexColor('#FF6F3D'));

const color = Api.HexColor('ff6f3d');
const secondParagraph = Api.CreateParagraph();
secondParagraph.AddText('This text is in same orange color, but created using HexColor method.');
secondParagraph.SetColor(color);
doc.Push(secondParagraph);
```
