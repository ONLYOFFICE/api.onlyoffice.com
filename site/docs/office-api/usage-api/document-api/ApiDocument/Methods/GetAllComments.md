# GetAllComments

Returns all comments from the current document.

## Syntax

```javascript
expression.GetAllComments();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiComment](../../ApiComment/ApiComment.md)[]

## Example

Retrieve all comments from a document and read the class type of the first one in a document.

```javascript editor-docx
// How do I get every comment in a document so I can inspect or process them in a document?

// Confirm the type of a comment object after collecting the full set of reviewer annotations in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let type = comments[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
doc.Push(paragraph);
```
