# GetAxisColor

Returns the axis color of the data bar conditional formatting rule.

## Syntax

```javascript
expression.GetAxisColor();
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null

## Example

Read the color set for the midpoint axis line of a bar rule in a spreadsheet.

```javascript editor-xlsx
// How do I find out what color the axis line has in a data bar rule in a spreadsheet?

// Inspect the axis line color to verify or copy bar formatting settings in a spreadsheet.

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

let axisColor = dataBar.GetAxisColor();

worksheet.GetRange("C1").SetValue("Has Axis Color:");
worksheet.GetRange("C2").SetValue(axisColor ? "Yes" : "No");
```
