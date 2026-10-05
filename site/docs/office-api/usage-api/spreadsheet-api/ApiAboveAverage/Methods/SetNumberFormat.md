# SetNumberFormat

Sets the number format applied to a cell when the conditional formatting rule evaluates to true.

Inherited from [ApiFormatCondition.SetNumberFormat](../../ApiFormatCondition/Methods/SetNumberFormat.md).

## Syntax

```javascript
expression.SetNumberFormat(NumberFormat);
```

`expression` - A variable that represents an [ApiAboveAverage](../ApiAboveAverage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| NumberFormat | Required | string |  | The number format code (e.g., "General", "#,##0.00", etc.) |

## Returns

This method doesn't return any data.

## Example

Apply a display format to cells that match an above-average highlight rule in a spreadsheet.

```javascript editor-xlsx
// How do I control how numbers appear in cells highlighted by an above-average rule in a spreadsheet?

// Change the visual presentation of flagged values without altering the underlying data in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Percentage Scores");
worksheet.GetRange("A2").SetValue(0.75);
worksheet.GetRange("A3").SetValue(0.88);
worksheet.GetRange("A4").SetValue(0.65);
worksheet.GetRange("A5").SetValue(0.92);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();

worksheet.GetRange("C1").SetValue("Before: General format");
aboveAverageCondition.SetNumberFormat("0.00%");
worksheet.GetRange("C2").SetValue("After: Percentage format");
```
