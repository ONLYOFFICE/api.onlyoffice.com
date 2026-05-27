# GetRevision

Returns the document revision.

## Syntax

```javascript
expression.GetRevision();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the revision label stored in the document properties in a document.

```javascript editor-docx
// How do I read the revision value from a document's metadata in a document?

// Display the current revision string in the document body to confirm it was saved correctly in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = doc.GetElement(0);
paragraph.AddText("Revision: " + revision);
```
