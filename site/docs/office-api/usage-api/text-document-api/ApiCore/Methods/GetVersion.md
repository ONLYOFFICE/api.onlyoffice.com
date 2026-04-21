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

Get the version of the current document in a document.

```javascript editor-docx
// How to get the version for a core properties in a document?

// Get the version and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = doc.GetElement(0);
paragraph.AddText("Version: " + version);
```
