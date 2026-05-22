# GetTopMargin

Returns the top margin of the sheet.

## Syntax

```javascript
expression.GetTopMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Check the top margin distance on your page setup in a spreadsheet.

```javascript editor-xlsx
// Measure the blank space above your printed content in a spreadsheet?

// Show margin dimensions in cells for layout verification in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let topMargin = worksheet.GetTopMargin();
worksheet.GetRange("A1").SetValue("Top margin: " + topMargin + " mm");
```
