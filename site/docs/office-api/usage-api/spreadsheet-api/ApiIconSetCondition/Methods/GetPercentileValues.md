# GetPercentileValues

Returns whether the thresholds for the icon set conditional format are determined by using percentiles.

## Syntax

```javascript
expression.GetPercentileValues();
```

`expression` - A variable that represents a [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to check if icon set uses percentile values.

```javascript editor-xlsx playground
// How to determine if percentile values are used for icon set thresholds.

// Check if the icon set rule uses percentile values for criteria.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(25);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetPercentileValues(true);

let usesPercentiles = iconCondition.GetPercentileValues();
worksheet.GetRange("B1").SetValue("Uses percentiles: " + usesPercentiles);

```
