# AddReply

Adds a reply to a comment.

## Syntax

```javascript
expression.AddReply(sText, sAuthorName, sUserId, nPos);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | String |  | The comment reply text. |
| sAuthorName | Optional | String |  | The name of the comment reply author. |
| sUserId | Optional | String |  | The user ID of the comment reply author. |
| nPos | Optional | Number | -1 | The comment reply position. If nPos=-1 add to the end. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example adds a comment and makes a reply for it.

```javascript editor-docx playground
// How to reply to the comment.

// Create a comment from a paragraph and add a reply to its first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
```
