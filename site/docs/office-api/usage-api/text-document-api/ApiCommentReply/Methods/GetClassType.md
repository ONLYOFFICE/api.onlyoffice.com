# GetClassType

Returns a type of the ApiCommentReply class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCommentReply](../ApiCommentReply.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"commentReply"

## Example

Find out the class type of a comment reply object in a document.

```javascript editor-docx
// How can I get the class type of a comment reply in a document?

// Get the class type of a comment reply and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
let commentReply = comments[0].GetReply(0);
let type = commentReply.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + type);
doc.Push(paragraph);
```
