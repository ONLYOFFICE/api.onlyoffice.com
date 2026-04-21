# GetLastModifiedBy

Returns the name of the user who last modified the document.

## Syntax

```javascript
expression.GetLastModifiedBy();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the name of the last user who modified the current document in a document.

```javascript editor-docx
// How can I get last modified by using a core properties in a document?

// Get last modified by for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);
```
