# GetComments

Returns all comments related to the whole workbook.

## Syntax

```javascript
expression.GetComments();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiComment](../../ApiComment/ApiComment.md)[]

## Example

Get an array of comment objects in a spreadsheet.

```javascript editor-xlsx
// How to get an array of comments in a spreadsheet.

// Get all comments as an array in a spreadsheet.

Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2", "Bob");
let arrComments = Api.GetComments();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: " + arrComments[0].GetText());
worksheet.GetRange("B1").SetValue("Comment Author: " + arrComments[0].GetAuthorName());
```
