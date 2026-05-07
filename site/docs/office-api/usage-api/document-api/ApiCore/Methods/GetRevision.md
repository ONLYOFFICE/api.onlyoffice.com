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

Get the revision of the current document in a document.

```javascript editor-docx
// How do I get the revision in a document?

// Get the revision using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = doc.GetElement(0);
paragraph.AddText("Revision: " + revision);
```
