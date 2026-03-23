# GetIconCriteria

Returns a collection of icon criteria that represent the threshold values and icons for the icon set conditional formatting rule.

## Syntax

```javascript
expression.GetIconCriteria();
```

`expression` - A variable that represents a [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiIconCriterion](../../ApiIconCriterion/ApiIconCriterion.md)[] \| null

## Example

This example shows how to get icon criteria collection.

```javascript editor-xlsx
// How to retrieve icon criteria for conditional formatting.

// Get the collection of icon criteria from the formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
worksheet.GetRange("B1").SetValue("Number of criteria: " + criteria.length);

```
