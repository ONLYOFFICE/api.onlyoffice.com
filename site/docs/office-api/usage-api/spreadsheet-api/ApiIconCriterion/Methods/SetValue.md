# SetValue

Sets the threshold value for the icon criterion.

## Syntax

```javascript
expression.SetValue(value);
```

`expression` - A variable that represents a [ApiIconCriterion](../ApiIconCriterion.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string \| number |  | The threshold value to set. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set the value of an icon criterion.

```javascript editor-xlsx playground
// How to modify the threshold value for an icon set criterion.

// Set the value used for criterion threshold comparison.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(78);
worksheet.GetRange("A4").SetValue(62);
worksheet.GetRange("A5").SetValue(45);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
worksheet.GetRange("B1").SetValue("Before: Default threshold values");

criteria[1].SetValue("80");
worksheet.GetRange("B2").SetValue("After: Second threshold set to 80");

```
