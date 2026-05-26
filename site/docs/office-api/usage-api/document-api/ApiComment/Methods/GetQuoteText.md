# GetQuoteText

Returns the quote text of the current comment.

## Syntax

```javascript
expression.GetQuoteText();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Retrieve the quoted text associated with a comment in a document.

```javascript editor-docx
// How do I get the text passage that a comment refers to in a document?

// Extract the exact excerpt a reviewer highlighted when leaving a comment.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let quoteText = comments[0].GetQuoteText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment quote text: " + quoteText);
doc.Push(paragraph);
```
