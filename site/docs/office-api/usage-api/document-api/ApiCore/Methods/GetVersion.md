# GetVersion

Returns the document version.

## Syntax

```javascript
expression.GetVersion();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Extract the version string from the document's core properties in a document.

```javascript editor-docx
// How do I retrieve the version recorded in a document's metadata in a document?

// Confirm the stored version value is accessible by writing it into the document body in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = doc.GetElement(0);
paragraph.AddText("Version: " + version);
```
