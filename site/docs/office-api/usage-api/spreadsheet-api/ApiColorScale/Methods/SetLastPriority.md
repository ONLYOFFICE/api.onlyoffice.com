# SetLastPriority

Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md).

## Syntax

```javascript
expression.SetLastPriority();
```

`expression` - A variable that represents an [ApiColorScale](../ApiColorScale.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Move a color gradient rule to the bottom of the evaluation order in a spreadsheet.

```javascript editor-xlsx
// How do I make a color scale rule yield to all other formatting rules in a spreadsheet?

// Demote a color gradient condition so it is always evaluated after every other competing rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();
let topRule = formatConditions.Add("xlTop10");

worksheet.GetRange("C1").SetValue("Priority before:");
worksheet.GetRange("C2").SetValue(colorScale.GetPriority());

colorScale.SetLastPriority();

worksheet.GetRange("D1").SetValue("Priority after:");
worksheet.GetRange("D2").SetValue(colorScale.GetPriority());
```
