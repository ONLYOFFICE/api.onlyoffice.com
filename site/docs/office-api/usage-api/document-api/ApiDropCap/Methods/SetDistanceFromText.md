# SetDistanceFromText

Sets the distance between the drop cap and the paragraph text measured in twentieths of a point (1/1440 of an inch).

## Syntax

```javascript
expression.SetDistanceFromText(distance);
```

`expression` - A variable that represents an [ApiDropCap](../ApiDropCap.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| distance | Required | [twips](../../Enumeration/twips.md) |  | The distance between the drop cap and the paragraph text. Must be a non-negative number. |

## Returns

[ApiDropCap](../../ApiDropCap/ApiDropCap.md)

## Example

Set the distance between a drop cap and the paragraph text in a document.

```javascript editor-docx
// Add spacing between a drop cap and the surrounding paragraph text in a document.

// Increase the horizontal gap between the decorative initial letter and the paragraph text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetDistanceFromText(72);
```
