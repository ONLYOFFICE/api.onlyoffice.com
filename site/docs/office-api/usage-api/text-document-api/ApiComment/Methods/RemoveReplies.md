# RemoveReplies

Removes the specified comment replies.

## Syntax

```javascript
expression.RemoveReplies(nPos, nCount, bRemoveAll);
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | 0 | The position of the first comment reply to remove. |
| nCount | Optional | Number | 1 | A number of comment replies to remove. |
| bRemoveAll | Optional | boolean | false | Specifies whether to remove all comment replies or not. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

This example removes the specified comment replies.

```javascript editor-docx
// How to delete specified comment reply.

// Get all comments from the presentation and remove a reply from the first one's.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
comments[0].AddReply("reply1", "Mark Potato", "uid-2", 0);
comments[0].RemoveReplies();
paragraph = Api.CreateParagraph();
paragraph.AddText("The comment replies were removed");
doc.Push(paragraph);
```
