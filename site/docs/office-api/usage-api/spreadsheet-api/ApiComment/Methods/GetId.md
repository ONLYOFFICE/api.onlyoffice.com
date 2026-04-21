# GetId

Returns the current comment ID.

## Syntax

```javascript
expression.GetId();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the comment ID in a spreadsheet.

```javascript editor-xlsx
// How to get a comment ID in a spreadsheet.

// Find a comment by its ID and display its ID in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: ");
worksheet.GetRange("B3").SetValue(range.GetComment().GetId());
```
