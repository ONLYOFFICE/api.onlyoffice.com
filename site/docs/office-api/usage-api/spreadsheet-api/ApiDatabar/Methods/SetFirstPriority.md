# SetFirstPriority

Sets the priority value for the current conditional formatting rule to "1" so that it will be evaluated before all other rules on the worksheet.

Inherited from [ApiFormatCondition.SetFirstPriority](../../ApiFormatCondition/Methods/SetFirstPriority.md).

## Syntax

```javascript
expression.SetFirstPriority();
```

`expression` - A variable that represents an [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Move a data bar formatting rule to the top of the evaluation order in a spreadsheet.

```javascript editor-xlsx
// How do I make a data bar rule take precedence over all other formatting rules in a spreadsheet?

// Ensure a data bar rule is applied before any conflicting rules are considered in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar1 = formatConditions.AddDatabar();
let dataBar2 = formatConditions.AddDatabar();

dataBar2.SetFirstPriority();

let priority = dataBar2.GetPriority();

worksheet.GetRange("C1").SetValue("Data bar priority:");
worksheet.GetRange("C2").SetValue(priority);
```
