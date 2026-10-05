# Delete

Deletes the current format condition.

Inherited from [ApiFormatCondition.Delete](../../ApiFormatCondition/Methods/Delete.md).

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents an [ApiAboveAverage](../ApiAboveAverage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Remove a highlight rule that marks values above the average in a spreadsheet.

```javascript editor-xlsx
// How do I delete a conditional formatting rule that highlights above-average cells in a spreadsheet?

// Clear an above-average rule from a range so cells return to their default appearance in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(92);
worksheet.GetRange("A4").SetValue(78);
worksheet.GetRange("A5").SetValue(95);
worksheet.GetRange("A6").SetValue(88);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();
aboveAverageCondition.GetFont().SetColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Before: " + formatConditions.GetCount() + " rules");
aboveAverageCondition.Delete();
worksheet.GetRange("C2").SetValue("After: " + formatConditions.GetCount() + " rules");
```
