# GetInternalId

Returns an internal ID of the current document content.

Inherited from [ApiDocumentContent.GetInternalId](../../ApiDocumentContent/Methods/GetInternalId.md).

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the unique internal identifier of a document.

```javascript editor-docx
// How do I read the internal ID assigned to a document?

// Display the document ID as text to confirm it is accessible in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const internalId = doc.GetInternalId();
paragraph.AddText('Document internal ID: ' + internalId);
```
