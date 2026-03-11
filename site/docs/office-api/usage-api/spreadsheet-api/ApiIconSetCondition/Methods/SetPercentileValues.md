# SetPercentileValues

Specifies whether the thresholds for the icon set conditional format are determined by using percentiles.

## Syntax

```javascript
expression.SetPercentileValues(percentileValues);
```

`expression` - A variable that represents a [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| percentileValues | Required | boolean |  | True to set all thresholds to percentile, false otherwise. |

## Returns

boolean

## Example

This example shows how to enable percentile values for icon set thresholds.

```javascript editor-xlsx
// How to configure icon set to use percentile values instead of actual values.

// Enable percentile values for icon set threshold calculation.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Scores");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(80);
worksheet.GetRange("A4").SetValue(65);
worksheet.GetRange("A5").SetValue(50);
worksheet.GetRange("A6").SetValue(35);

let range = worksheet.GetRange("A2:A6");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Before: Using number values");
iconCondition.SetPercentileValues(true);
worksheet.GetRange("B2").SetValue("After: Using percentile values");

```
