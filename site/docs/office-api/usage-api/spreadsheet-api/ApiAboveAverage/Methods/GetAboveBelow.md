# GetAboveBelow

Returns whether the rule is configured to detect values above or below the average.

## Syntax

```javascript
expression.GetAboveBelow();
```

`expression` - A variable that represents a [ApiAboveAverage](../ApiAboveAverage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example demonstrates getting the above/below setting from an above average conditional formatting rule.

```javascript editor-xlsx playground
// How to check if the rule is looking for above or below average values.

// Get whether the rule is checking for above or below average values.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition = formatConditions.AddAboveAverage();
condition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let aboveBelow = condition.GetAboveBelow();

worksheet.GetRange("C1").SetValue("Above Average:");
worksheet.GetRange("C2").SetValue(aboveBelow ? "Yes" : "No");

```
