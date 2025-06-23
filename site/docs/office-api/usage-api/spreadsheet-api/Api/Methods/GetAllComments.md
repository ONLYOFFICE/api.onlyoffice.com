# GetAllComments

Returns all comments from the current workbook including comments from all worksheets.

## Syntax

```javascript
expression.GetAllComments();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiComment](../../ApiComment/ApiComment.md)[]

## Example

This example shows how to get all comments from the worksheet.

```javascript editor-xlsx
// How to get all comments from the worksheet.

// Get all cell comments.

let worksheet = Api.GetActiveSheet();Api.AddComment("Comment 1", "John Smith");
worksheet.GetRange("A4").AddComment("Comment 2", "Mark Potato");
let arrComments = Api.GetAllComments();
worksheet.GetRange("A1").SetValue("Comment text: " + arrComments[1].GetText());
worksheet.GetRange("A2").SetValue("Comment author: " + arrComments[1].GetAuthorName());
```
