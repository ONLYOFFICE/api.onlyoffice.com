# GetText

Returns the comment reply text.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the text content of a comment reply in a document.

```javascript editor-docx
// How do I extract the written text from a comment reply in a document?

// Retrieve a reply's message to display or process the reviewer's feedback programmatically.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
let text = commentReply.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment reply text: " + text);
doc.Push(paragraph);
```
