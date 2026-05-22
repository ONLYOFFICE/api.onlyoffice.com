# GetRightMargin

Returns the right margin of the sheet.

## Syntax

```javascript
expression.GetRightMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Check the right margin size of your page layout in a spreadsheet.

```javascript editor-xlsx
// Measure the empty space on the right edge of a printed page in a spreadsheet?

// Show margin values in cells to understand your document boundaries in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let rightMargin = worksheet.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + rightMargin + " mm");
```
