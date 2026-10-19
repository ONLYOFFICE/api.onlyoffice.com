# GetClassType

Returns the type of the ApiDropCap class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiDropCap](../ApiDropCap.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"dropCap"

## Example

Get the class type of a drop cap object in a document.

```javascript editor-docx
// Determine the class type of a drop cap object in a document.

// Read the "dropCap" class type from a drop cap created for a paragraph in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
const classType = dropCap.GetClassType();
const result = Api.CreateParagraph();
result.AddText('The ApiDropCap class type: ' + classType);
doc.Push(result);
```
