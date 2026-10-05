# SetFirstPriority

Sets the priority value for the current conditional formatting rule to "1" so that it will be evaluated before all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetFirstPriority](../../ApiFormatCondition/Methods/SetFirstPriority.md).

## Syntax

```javascript
expression.SetFirstPriority();
```

`expression` - A variable that represents an [ApiAboveAverage](../ApiAboveAverage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Promote an above-average highlight rule so it takes precedence over all other rules in a spreadsheet.

```javascript editor-xlsx
// How do I make an above-average rule the highest-priority formatting condition in a spreadsheet?

// Ensure a particular highlight rule wins when multiple rules compete for the same cells in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(200);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(150);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();

let cellValueCondition = formatConditions.Add("xlCellValue", "xlGreater", "120");
let aboveAverageCondition = formatConditions.AddAboveAverage();

worksheet.GetRange("C1").SetValue("Before priority: " + aboveAverageCondition.GetPriority());
aboveAverageCondition.SetFirstPriority();
worksheet.GetRange("C2").SetValue("After priority: " + aboveAverageCondition.GetPriority());
```
