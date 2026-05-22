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

Fetch a specific comment by its unique ID in a document.

```javascript editor-docx
// How do I look up a comment using its ID in a document?

// Read the author name of a known comment by retrieving it with its ID in a document.

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
