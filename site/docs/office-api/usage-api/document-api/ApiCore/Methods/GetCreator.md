# GetCreator

Returns the document author.

## Syntax

```javascript
expression.GetCreator();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the name of the author stored in the core properties of a document.

```javascript editor-docx
// How do I get the creator's name from the core properties in a document?

// Identify who originally authored a document without opening its file dialog in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreator("John Smith");

const creator = core.GetCreator();
const paragraph = doc.GetElement(0);
paragraph.AddText("Creator: " + creator);
```
