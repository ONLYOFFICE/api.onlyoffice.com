# GetId

Returns the current comment ID. If the comment doesn't have an ID, null is returned.

## Syntax

```javascript
expression.GetId();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the unique identifier of a comment in a document.

```javascript editor-docx
// How do I get the ID assigned to a comment in a document?

// Use a comment's ID to look it up again and access its properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let comment = doc.GetCommentById(comments[0].GetId());
let authorName = comment.GetAutorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment author name: " + authorName);
doc.Push(paragraph);
```
