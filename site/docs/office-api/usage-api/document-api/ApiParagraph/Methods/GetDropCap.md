# GetDropCap

Returns the drop cap related to the current paragraph, if any.

## Syntax

```javascript
expression.GetDropCap();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDropCap](../../ApiDropCap/ApiDropCap.md) \| null \| undefined

## Example

Get the drop cap of a paragraph to adjust its settings in a document.

```javascript editor-docx
// How do I access an existing drop cap of a paragraph to change its settings in a document?

// Retrieve the drop cap object of a paragraph and change the number of lines it spans in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
paragraph.SetDropCap('drop');
const dropCap = paragraph.GetDropCap();
dropCap.SetLinesToDrop(2);
```
