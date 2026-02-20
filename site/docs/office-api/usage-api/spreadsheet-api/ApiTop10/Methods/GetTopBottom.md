# GetTopBottom

Returns the "XlTopBottom" constant indicating whether the ranking is evaluated from the top or bottom.

## Syntax

```javascript
expression.GetTopBottom();
```

`expression` - A variable that represents a [ApiTop10](../ApiTop10.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlTopBottom](../../Enumeration/XlTopBottom.md)

## Example

This example shows how to get the top/bottom setting for top 10 condition.

```javascript editor-xlsx playground
// How to determine if the condition evaluates top or bottom values.

// Get the top/bottom direction setting from the top 10 rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(88);
worksheet.GetRange("A3").SetValue(76);
worksheet.GetRange("A4").SetValue(94);
worksheet.GetRange("A5").SetValue(82);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let top10Condition = formatConditions.AddTop10();

let topBottom = top10Condition.GetTopBottom();
worksheet.GetRange("B1").SetValue("Direction: " + topBottom);

```
