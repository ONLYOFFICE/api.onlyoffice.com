# SetLastPriority

Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md).

## Syntax

```javascript
expression.SetLastPriority();
```

`expression` - A variable that represents an [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Move an icon set formatting rule to the lowest priority in a spreadsheet.

```javascript editor-xlsx
// How do I make an icon set rule evaluate last among all formatting rules in a spreadsheet?

// Push an icon set rule to the bottom of the priority order so other rules take precedence.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Scores");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(50);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();
let colorScaleCondition = formatConditions.AddColorScale();

worksheet.GetRange("B1").SetValue("Priority before: " + iconCondition.GetPriority());

iconCondition.SetLastPriority();

worksheet.GetRange("B2").SetValue("Priority after: " + iconCondition.GetPriority());
```
