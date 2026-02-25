# GetFillColor

Returns the background color for the format condition. Returns 'No Fill' when the background color of the format condition is null.

## Syntax

```javascript
expression.GetFillColor();
```

`expression` - A variable that represents a [ApiColorScale](../ApiColorScale.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| 'No Fill'

## Example

This example gets the background color from a conditional formatting rule.

```javascript editor-xlsx playground
// How to retrieve background colors from conditional formatting rules.

// Get conditional formatting rule background color.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
let fillColor = Api.CreateColorFromRGB(255, 255, 0);
condition1.SetFillColor(fillColor);

let currentColor = condition1.GetFillColor();

worksheet.GetRange("C1").SetValue("Background color:");
worksheet.GetRange("C2").SetValue(currentColor === "No Fill" ? "No Fill" : "Color applied");

```
