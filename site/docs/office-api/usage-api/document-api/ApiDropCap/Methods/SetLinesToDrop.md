# SetLinesToDrop

Sets the number of lines that the drop cap occupies. The drop cap letter is resized accordingly.

## Syntax

```javascript
expression.SetLinesToDrop(lines);
```

`expression` - A variable that represents an [ApiDropCap](../ApiDropCap.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lines | Required | number |  | The number of lines that the drop cap occupies. Must be a number greater than 0. |

## Returns

[ApiDropCap](../../ApiDropCap/ApiDropCap.md)

## Example

Set the number of lines a drop cap spans in a document.

```javascript editor-docx
// Control how many lines the drop cap of a paragraph drops down in a document.

// Resize the decorative initial letter so that it occupies the specified number of text lines in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetLinesToDrop(4);
```
