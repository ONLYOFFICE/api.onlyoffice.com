# GetCommentById

Returns a comment from the current document by its ID.

## Syntax

```javascript
expression.GetCommentById(sId);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | Required | string |  | The comment ID. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example shows how to get a comment from the document by its ID.

```javascript editor-docx
// Search the comment by its ID.

// Get comment author knowing its ID.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let comment = doc.GetCommentById(comments[0].GetId());
let author = comment.GetAutorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment author name: " + author);
doc.Push(paragraph);
```
