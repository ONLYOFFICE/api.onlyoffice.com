# GetComments

Returns all comments from the current worksheet.

## Syntax

```javascript
expression.GetComments();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiComment](../../ApiComment/ApiComment.md)[]

## Example

Get an array of comment objects in a spreadsheet.

```javascript editor-xlsx
// How to get all comments in a spreadsheet.

// Get all comments from the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comments = worksheet.GetComments();
worksheet.GetRange("A4").SetValue("Comment: " + comments[0].GetText());
```
