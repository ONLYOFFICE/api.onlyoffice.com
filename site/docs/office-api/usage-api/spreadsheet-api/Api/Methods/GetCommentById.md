# GetCommentById

Returns a comment from the current document by its ID.

## Syntax

```javascript
expression.GetCommentById(sId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sId | Required | string |  | The comment ID. |

## Returns

[ApiComment](../../ApiComment/ApiComment.md)

## Example

Look up a specific comment using its unique identifier in a spreadsheet.

```javascript editor-xlsx
// How do I find a particular comment by its ID in a spreadsheet?

// Locate and read a single comment by referencing its identifier in a spreadsheet.

let comment = Api.AddComment("Comment", "Bob");
let id = comment.GetId();
comment = Api.GetCommentById(id);
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: " + comment.GetText());
worksheet.GetRange("B1").SetValue("Comment Author: " + comment.GetAuthorName());
```
