# AddComment

Adds a comment to the current run.
💡 Please note that this run must be in the document.

## Syntax

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text. |
| sAuthor | Optional | string |  | The author's name. |
| sUserId | Optional | string |  | The user ID of the comment author. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

Attach a reviewer note with an author name to a piece of text in a document.

```javascript editor-docx
// How do I leave a named comment on a specific section of text in a document?

// Annotate a text passage so collaborators can see feedback and who wrote it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
run.AddComment("comment", "John Smith");
```
