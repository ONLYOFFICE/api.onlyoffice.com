# Delete

Deletes all the contents from the current range.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a selected portion of text entirely from a document.

```javascript editor-docx
// How do I erase a specific stretch of words from the body of a document?

// Wipe out a passage so it no longer appears anywhere in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE delete text Document Builder");
let range = doc.GetRange(10, 21);
range.Delete();
```
