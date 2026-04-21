# GetText

Returns the comment text.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the comment text in a spreadsheet.

```javascript editor-xlsx
// How to get a comment raw text in a spreadsheet.

// Add a comment text to a range of the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: ");
worksheet.GetRange("B3").SetValue(range.GetComment().GetText());
```
