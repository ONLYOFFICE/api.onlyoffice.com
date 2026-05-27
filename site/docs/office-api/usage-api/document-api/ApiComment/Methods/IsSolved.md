# IsSolved

Checks if a comment is solved or not.

## Syntax

```javascript
expression.IsSolved();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether a comment is marked as resolved in a document.

```javascript editor-docx
// How do I check if a comment has been resolved in a document?

// Filter out already-resolved comments before processing open review threads.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetSolved(true);
let solved = comments[0].IsSolved();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment is solved: " + solved);
doc.Push(paragraph);
```
