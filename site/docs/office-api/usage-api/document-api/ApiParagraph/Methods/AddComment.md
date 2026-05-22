# AddComment

Adds a comment to the current paragraph.
💡 Please note that this paragraph must be in the document.

## Syntax

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text. |
| sAuthor | Optional | string |  | The author's name. |
| sUserId | Optional | string |  | The user ID of the comment author. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

Attach a reviewer comment to a paragraph in a document.

```javascript editor-docx
// How do I add an author-attributed comment to a paragraph in a document?

// Annotate a paragraph with feedback that identifies the commenter by name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.AddLineBreak();
paragraph.AddText("The comment was added to this document.");
paragraph.AddComment("comment", "Jane");
```
