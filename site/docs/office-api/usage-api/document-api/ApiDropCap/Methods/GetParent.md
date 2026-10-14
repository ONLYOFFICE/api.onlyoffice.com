# GetParent

Returns the paragraph this drop cap was requested from: either the framed drop cap paragraph itself, or the paragraph that continues its text.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents an [ApiDropCap](../ApiDropCap.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Access the parent paragraph from which the drop cap was created in a document.

```javascript editor-docx
// Format the parent paragraph, such as its text color, in a document.

// Get the parent paragraph and set its text color to red in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
const parent = dropCap.GetParent();
parent.SetColor(Api.RGB(255, 0, 0));
```
