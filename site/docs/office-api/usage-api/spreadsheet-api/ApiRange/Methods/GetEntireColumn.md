# GetEntireColumn

Returns a Range object that represents the entire column(s) containing the specified range.

## Syntax

```javascript
expression.GetEntireColumn();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example shows how to get the entire columns containing a range.

```javascript editor-xlsx playground
// How to select entire columns from a range.

// Get a range, get its entire columns and fill them with color.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C3:E5");
range.SetValue("Range");
range.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let entireColumns = range.EntireColumn;
entireColumns.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

worksheet.GetRange("A1").SetValue("Entire columns of C3:E5 are highlighted");
worksheet.GetRange("A1").AutoFit(false, true);

```
