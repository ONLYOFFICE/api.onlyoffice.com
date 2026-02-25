# SetPercent

Sets whether the top 10 ranking is percentage-based.

## Syntax

```javascript
expression.SetPercent(percent);
```

`expression` - A variable that represents a [ApiTop10](../ApiTop10.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| percent | Required | boolean |  | True if the ranking is percentage-based, false if count-based. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set the percentage mode for top 10 condition.

```javascript editor-xlsx playground
// How to configure if the condition uses percentage values instead of count values.

// Set the percentage mode for the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Grades");
worksheet.GetRange("A2").SetValue(78);
worksheet.GetRange("A3").SetValue(85);
worksheet.GetRange("A4").SetValue(92);
worksheet.GetRange("A5").SetValue(69);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

worksheet.GetRange("B1").SetValue("Before: Count mode");
top10Condition.SetPercent(true);
worksheet.GetRange("B2").SetValue("After: Percentage mode");

```
