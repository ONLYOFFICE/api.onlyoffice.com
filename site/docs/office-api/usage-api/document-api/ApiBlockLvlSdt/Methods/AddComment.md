# AddComment

Adds a comment to the current block content control.
💡 Please note that the current block content control must be in the document.

## Syntax

```javascript
expression.AddComment(text, author, userId);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The comment text. |
| author | Optional | string |  | The author's name. |
| userId | Optional | string |  | The user ID of the comment author. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

Attach a reviewer comment to a content control in a document.

```javascript editor-docx
// How do I add a comment with an author name to a content control in a document?

// Let a named reviewer leave a comment on a content control for collaborative review in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddComment("comment", "John Smith");
```
