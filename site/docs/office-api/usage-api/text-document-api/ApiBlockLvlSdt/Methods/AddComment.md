# AddComment

Adds a comment to the current block content control.\
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

This example adds a comment to the block content control.

```javascript editor-docx
// Creates a block content control in the ApiDocument class, adds a paragraph with a text to it, and adds a comment to the content control.

// How to add a comment written by John Smith to the ApiBlockLvlSdt object.

// John Smith comments on the block content control in the current document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddComment("comment", "John Smith");
```
