# SetRank

Sets the rank value for the top 10 condition.

## Syntax

```javascript
expression.SetRank(rank);
```

`expression` - A variable that represents a [ApiTop10](../ApiTop10.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rank | Required | number |  | The rank value. |

## Returns

This method doesn't return any data.

## Example

This example shows how to change the rank value for top 10 condition.

```javascript editor-xlsx playground
// How to set the number of top or bottom values to highlight in the condition.

// Change the rank value for the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(88);
worksheet.GetRange("A3").SetValue(92);
worksheet.GetRange("A4").SetValue(76);
worksheet.GetRange("A5").SetValue(94);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

worksheet.GetRange("B1").SetValue("Before: Top 10 values");
top10Condition.SetRank(2);
worksheet.GetRange("B2").SetValue("After: Top 2 values");

```
