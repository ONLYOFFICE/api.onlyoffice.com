# GetPriority

Returns the priority value of the conditional formatting rule.

Inherited from [ApiFormatCondition.GetPriority](../../ApiFormatCondition/Methods/GetPriority.md).

## Syntax

```javascript
expression.GetPriority();
```

`expression` - A variable that represents an [ApiColorScale](../ApiColorScale.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the evaluation order of a color gradient rule among all formatting rules in a spreadsheet.

```javascript editor-xlsx
// How do I check which position a color scale rule holds in the priority list in a spreadsheet?

// Inspect the rank assigned to a color gradient condition to understand its order of evaluation in a spreadsheet.

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

let priority = colorScale.GetPriority();

worksheet.GetRange("C1").SetValue("Color scale priority:");
worksheet.GetRange("C2").SetValue(priority);
```
