# SetSolved

Marks a comment as solved.

## Syntax

```javascript
expression.SetSolved(bSolved);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bSolved | Required | boolean |  | Specifies if a comment is solved or not. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

Mark a comment as resolved in a document.

```javascript editor-docx
// How do I set a comment's status to solved in a document?

// Close out a review thread by flagging the comment as no longer needing attention.

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
