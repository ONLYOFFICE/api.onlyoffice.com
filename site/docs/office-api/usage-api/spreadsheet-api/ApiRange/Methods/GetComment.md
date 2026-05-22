# GetComment

Returns the ApiComment object of the current range.

## Syntax

```javascript
expression.GetComment();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiComment](../../ApiComment/ApiComment.md) \| null

## Example

Read the comment attached to a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I retrieve the text of a comment on a cell in a spreadsheet?

// Display a cell's comment text in another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: " + range.GetComment().GetText());
```
