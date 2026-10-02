# SetLastPriority

Sets the evaluation order for the current conditional formatting rule so it is evaluated after all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md).

## Syntax

```javascript
expression.SetLastPriority();
```

`expression` - A variable that represents an [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Move a data bar formatting rule to the bottom of the evaluation order in a spreadsheet.

```javascript editor-xlsx
// How do I make a data bar rule evaluate after all other formatting rules in a spreadsheet?

// Defer a data bar rule so it only applies when no higher-priority rule already matches in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar1 = formatConditions.AddDatabar();
let dataBar2 = formatConditions.AddDatabar();

dataBar1.SetLastPriority();

let priority = dataBar1.GetPriority();

worksheet.GetRange("C1").SetValue("Data bar priority:");
worksheet.GetRange("C2").SetValue(priority);
```
