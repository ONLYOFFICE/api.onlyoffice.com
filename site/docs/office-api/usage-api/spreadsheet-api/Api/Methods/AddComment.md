# AddComment

Returns an array of ApiComment objects.

## Syntax

```javascript
expression.AddComment(sText, sAuthor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The comment text. |
| sAuthor | Required | string |  | The author's name (optional). |

## Returns

[ApiComment](../../ApiComment/ApiComment.md) \| null

## Example

Attach a comment with an author name to a cell in a spreadsheet.

```javascript editor-xlsx
// How do I add a comment to a cell in a spreadsheet?

// Annotate a cell with reviewer notes and display the comment text in a spreadsheet.

Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2");
let comments = Api.GetComments();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: " + comments[0].GetText());
worksheet.GetRange("B1").SetValue("Comment Author: " + comments[0].GetAuthorName());
```
