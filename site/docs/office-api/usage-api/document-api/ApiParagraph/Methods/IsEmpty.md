# IsEmpty

Returns true if the paragraph has no content elements (only the paragraph end mark).

## Syntax

```javascript
expression.IsEmpty();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether the current paragraph has no content elements.

```javascript editor-docx
// Verify that a newly created paragraph reports as empty.

// Confirm the empty state changes once text is added.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let emptyBefore = paragraph.IsEmpty();
paragraph.AddText("This is a sample text.");
let emptyAfter = paragraph.IsEmpty();
doc.Push(paragraph);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("The paragraph was empty before adding text: " + emptyBefore + ". After adding text: " + emptyAfter + ".");
doc.Push(resultParagraph);
```
