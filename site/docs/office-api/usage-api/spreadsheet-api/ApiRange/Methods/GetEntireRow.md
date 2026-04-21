# GetEntireRow

Returns a Range object that represents the entire row(s) containing the specified range.

## Syntax

```javascript
expression.GetEntireRow();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Get the entire rows containing a range in a spreadsheet.

```javascript editor-xlsx
// How to select entire rows from a range in a spreadsheet.

// Get a range, get its entire rows and fill them with color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C3:E5");
range.SetValue("Range");
range.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let entireRows = range.EntireRow;
entireRows.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

worksheet.GetRange("A1").SetValue("Entire rows of C3:E5 are highlighted");
worksheet.GetRange("A1").AutoFit(false, true);
```
