# GetCreated

Returns the document creation date.

## Syntax

```javascript
expression.GetCreated();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Date

## Example

Get the creation date of the current document in a document.

```javascript editor-docx
// How can I get the created using a core properties in a document?

// Get the created for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreated(new Date('20 January 2000'));

const createdDate = core.GetCreated().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Created: " + createdDate);
```
