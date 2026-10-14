# GetDistanceFromText

Returns the distance between the drop cap and the paragraph text measured in twentieths of a point (1/1440 of an inch).

## Syntax

```javascript
expression.GetDistanceFromText();
```

`expression` - A variable that represents an [ApiDropCap](../ApiDropCap.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

Read the distance between a drop cap and the paragraph text in a document.

```javascript editor-docx
// Find out the gap between a drop cap and the paragraph text in a document.

// Retrieve the horizontal distance between the drop cap and the paragraph text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetDistanceFromText(72);
const distance = dropCap.GetDistanceFromText();
const result = Api.CreateParagraph();
result.AddText('The distance between the drop cap and the text: ' + distance + ' twips');
doc.Push(result);
```
