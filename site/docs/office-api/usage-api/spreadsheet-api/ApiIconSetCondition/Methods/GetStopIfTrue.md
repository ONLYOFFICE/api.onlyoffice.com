# GetStopIfTrue

Returns whether the editor will stop evaluating additional formatting rules if this rule evaluates to true. This rule type cannot stop the evaluation, so the value can be changed only by opening a file where it is set.

## Syntax

```javascript
expression.GetStopIfTrue();
```

`expression` - A variable that represents an [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether an icon set rule prevents the lower priority rules from being applied in a spreadsheet.

```javascript editor-xlsx
// How do I find out if an icon set rule stops the evaluation of the other rules in a spreadsheet?

// Read the "stop if true" flag of an icon set rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let iconSet = formatConditions.AddIconSetCondition();

worksheet.GetRange("C1").SetValue("Stop if true:");
worksheet.GetRange("C2").SetValue(iconSet.GetStopIfTrue() ? "Yes" : "No");
```
