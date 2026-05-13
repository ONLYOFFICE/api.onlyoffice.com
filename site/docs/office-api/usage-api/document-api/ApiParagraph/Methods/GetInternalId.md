# GetInternalId

Returns an internal ID of the current content paragraph.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the internal ID of a paragraph in a document.

```javascript editor-docx
// How to get the internal id for a paragraph in a document?

// Get the internal id and display the result in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is a sample paragraph.');

const internalId = paragraph.GetInternalId();
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('First paragraph internal ID: ' + internalId);
doc.Push(paragraph2);
```
