# GetInternalId

Returns an internal id of the current content control.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the internal ID of a block-level container in a document.

```javascript editor-docx
// How to get the internal id for a block-level content control in a document?

// Get the internal id and display the result in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);

const internalId = blockLvlSdt.GetInternalId();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal ID: " + internalId);
doc.Push(paragraph);
```
