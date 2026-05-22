# GetUsedRange

Returns the ApiRange object that represents the used range on the specified worksheet.

## Syntax

```javascript
expression.GetUsedRange();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Find which cells actually contain data on a sheet in a spreadsheet.

```javascript editor-xlsx
// Detect the exact boundaries of content without empty rows or columns in a spreadsheet?

// Shade all populated cells with a background color to visualize data extent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let usedRange = worksheet.GetUsedRange();
usedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
