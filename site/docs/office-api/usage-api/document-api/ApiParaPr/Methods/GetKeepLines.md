# GetKeepLines

Returns the keep lines value of the current paragraph.

## Syntax

```javascript
expression.GetKeepLines();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| undefined

## Example

Read whether all lines of a paragraph are kept together on one page in a document.

```javascript editor-docx
// How do I check if a paragraph is set to keep all its lines on the same page in a document?

// Verify the keep-lines setting before modifying pagination rules for multi-line paragraphs.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetKeepLines(true);
paragraph.AddText("This is a paragraph with all lines kept on the same page.");
let keepLines = paraPr.GetKeepLines();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Keep lines: " + keepLines);
doc.Push(paragraph2);
```
