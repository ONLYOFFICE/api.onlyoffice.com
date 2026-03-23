# GetNegativeBarColor

Returns the negative bar color of the data bar.

## Syntax

```javascript
expression.GetNegativeBarColor();
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null

## Example

This example demonstrates getting the negative bar color from a data bar conditional formatting rule.

```javascript editor-xlsx
// How to retrieve the color of negative value bars.

// Get the negative bar color of a data bar conditional formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(-50);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(-25);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let negativeColor = dataBar.GetNegativeBarColor();

worksheet.GetRange("C1").SetValue("Negative Color:");
worksheet.GetRange("C2").SetValue(negativeColor ? "Set" : "None");

```
