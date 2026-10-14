# Clear

Removes the drop cap, merging the drop cap letter back into the paragraph text.

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents an [ApiDropCap](../ApiDropCap.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a drop cap and merge its letter back into the paragraph in a document.

```javascript editor-docx
// Remove the drop cap of a paragraph and restore its original text in a document.

// Delete the drop cap of a paragraph and merge the decorative letter back into the text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.Clear();
```
