# GetPriority

Returns the priority value of the conditional formatting rule.

Inherited from [ApiFormatCondition.GetPriority](../../ApiFormatCondition/Methods/GetPriority.md).

## Syntax

```javascript
expression.GetPriority();
```

`expression` - A variable that represents an [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the evaluation priority assigned to an icon set formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I find out the priority number of an icon set rule in a spreadsheet?

// Inspect the order in which an icon set rule is evaluated against other formatting rules in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Numbers");
worksheet.GetRange("A2").SetValue(95);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(55);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let priority = iconCondition.GetPriority();

worksheet.GetRange("B1").SetValue("Priority: " + priority);
```
