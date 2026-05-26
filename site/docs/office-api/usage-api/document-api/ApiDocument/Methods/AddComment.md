# AddComment

Adds a comment to the current document selection, or to the current word if no text is selected.

## Syntax

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text. |
| sAuthor | Optional | string |  | The author's name. |
| sUserId | Optional | string |  | The user ID of the comment author. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

Add a comment with an author to a document.

```javascript editor-docx
// How do I add an authored comment to a document?

// Annotate a document with a reviewer's note tied to a specific author in a document.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
paragraph.AddLineBreak();
paragraph.AddText("The comment was added to this document.");
doc.AddComment("This is a comment to the document.", "Jane");
```
