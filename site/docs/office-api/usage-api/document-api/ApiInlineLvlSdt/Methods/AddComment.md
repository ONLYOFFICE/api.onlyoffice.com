# AddComment

Adds a comment to the current inline content control.

:::note
This inline content control must be in the document.
:::

## Syntax

```javascript
expression.AddComment(sText, sAuthor, sUserId);
```

`expression` - A variable that represents an [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text. |
| sAuthor | Optional | string |  | The author's name. |
| sUserId | Optional | string |  | The user ID of the comment author. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

Add a comment to an inline content control in a document.

```javascript editor-docx
// How do I attach a comment to an inline text control in a document?

// Annotate an inline control with a reviewer name and note in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.AddComment("comment", "John Smith");
```
