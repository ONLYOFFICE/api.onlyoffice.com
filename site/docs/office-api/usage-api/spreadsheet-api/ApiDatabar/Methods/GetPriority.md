# GetPriority

Returns the priority value of the conditional formatting rule.

Inherited from [ApiFormatCondition.GetPriority](../../ApiFormatCondition/Methods/GetPriority.md).

## Syntax

```javascript
expression.GetPriority();
```

`expression` - A variable that represents an [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the evaluation order of a data bar rule among other formatting rules in a spreadsheet.

```javascript editor-xlsx
// How do I check which priority a data bar rule has when multiple formatting rules overlap in a spreadsheet?

// Confirm the position at which a data bar rule is evaluated relative to other rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let priority = dataBar.GetPriority();

worksheet.GetRange("C1").SetValue("Data bar priority:");
worksheet.GetRange("C2").SetValue(priority);
```
