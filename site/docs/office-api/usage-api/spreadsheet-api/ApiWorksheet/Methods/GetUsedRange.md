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

Get the cell range object that represents the used range on the specified worksheet in a spreadsheet.

```javascript editor-xlsx
// How to get used ranges from the worksheet.

// Get used ranges and fill it with color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let usedRange = worksheet.GetUsedRange();
usedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
