# SetLastPriority

Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md).

## Syntax

```javascript
expression.SetLastPriority();
```

`expression` - A variable that represents an [ApiAboveAverage](../ApiAboveAverage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Demote an above-average highlight rule so it is evaluated after all other rules in a spreadsheet.

```javascript editor-xlsx
// How do I give an above-average formatting rule the lowest priority among all conditions in a spreadsheet?

// Push a highlight rule to the back of the evaluation order so other rules override it in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(60);
worksheet.GetRange("A3").SetValue(80);
worksheet.GetRange("A4").SetValue(90);
worksheet.GetRange("A5").SetValue(70);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();

let aboveAverageCondition = formatConditions.AddAboveAverage();
let cellValueCondition = formatConditions.Add("xlCellValue", "xlLess", "75");

worksheet.GetRange("C1").SetValue("Before priority: " + aboveAverageCondition.GetPriority());
aboveAverageCondition.SetLastPriority();
worksheet.GetRange("C2").SetValue("After priority: " + aboveAverageCondition.GetPriority());
```
