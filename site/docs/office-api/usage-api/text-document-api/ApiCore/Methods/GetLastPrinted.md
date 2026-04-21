# GetLastPrinted

Returns the date when the document was last printed.

## Syntax

```javascript
expression.GetLastPrinted();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Date

## Example

Get the date when the current document was last printed in a document.

```javascript editor-docx
// How can I get last printed using a core properties in a document?

// Get last printed for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastPrinted(new Date());

const lastPrintedDate = core.GetLastPrinted().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);
```
