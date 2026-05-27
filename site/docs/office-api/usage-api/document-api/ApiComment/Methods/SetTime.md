# SetTime

Sets the timestamp of the comment creation in the current time zone format.

## Syntax

```javascript
expression.SetTime(nTimeStamp);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nTimeStamp | Required | Number \| String |  | The timestamp of the comment creation in the current time zone format. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

Set the creation timestamp of a comment using the local time zone in a document.

```javascript editor-docx
// How do I assign a specific creation time to a comment in a document?

// Correct or backdate a comment's recorded time when importing or migrating annotations.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].SetTime("1672247153658");
let time = comments[0].GetTime();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment creation timestamp: " + time);
doc.Push(paragraph);
```
