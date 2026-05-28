# GetPercentMax

Returns the percent maximum value of the data bar.

## Syntax

```javascript
expression.GetPercentMax();
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the maximum bar-length percentage from a data bar rule in a spreadsheet.

```javascript editor-xlsx
// How do I find out the upper percentage limit that controls data bar length in a spreadsheet?

// Inspect how wide the longest data bar can grow relative to the cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let percentMax = dataBar.GetPercentMax();

worksheet.GetRange("C1").SetValue("Max Percent:");
worksheet.GetRange("C2").SetValue(percentMax + "%");
```
