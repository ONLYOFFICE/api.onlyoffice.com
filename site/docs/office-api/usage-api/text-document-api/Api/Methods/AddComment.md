# AddComment

Adds a comment to the specifed document element or array of Runs.

## Syntax

```javascript
expression.AddComment(element, text, author, userId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | Required | [ApiRun](../../ApiRun/ApiRun.md)[] \| [DocumentElement](../../Enumeration/DocumentElement.md) |  | The element where the comment will be added. It may be applied to any element which has the *AddComment* method. |
| text | Required | string |  | The comment text. |
| author | Optional | string |  | The author's name. |
| userId | Optional | string |  | The user ID of the comment author. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

Add text and comment to the first paragraph in a document.

```javascript editor-docx
// The comment is attached to the paragraph with the specified author name.

// Add a paragraph to the document and comment on it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.AddComment(paragraph, "ONLYOFFICE for developers", "Jane");
```
