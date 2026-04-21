# GetInternalId

Returns an internal ID of the current content control.

## Syntax

```javascript
expression.GetInternalId();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the internal ID of an inline-level content control in a document.

```javascript editor-docx
// How to get the internal id for an inline content control in a document?

// Get the internal id and display the result in a document.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);

const run = Api.CreateRun();
run.AddText("This is an inline text content control.");

const inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddElement(run, 0);
firstParagraph.AddInlineLvlSdt(inlineLvlSdt);

let internalId = inlineLvlSdt.GetInternalId();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal Id: " + internalId);
doc.Push(paragraph);
```
