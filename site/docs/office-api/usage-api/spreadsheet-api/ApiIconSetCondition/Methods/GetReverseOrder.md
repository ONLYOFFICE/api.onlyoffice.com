# GetReverseOrder

Returns whether the icon order in the icon set rule is reversed.

## Syntax

```javascript
expression.GetReverseOrder();
```

`expression` - A variable that represents a [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

Find out whether an icon set rule displays icons in reverse order in a spreadsheet.

```javascript editor-xlsx
// How do I check if the icons in a formatting rule are shown in reverse order in a spreadsheet?

// Confirm that an icon set rule is currently set to flip its icon sequence in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetReverseOrder(true);

let isReversed = iconCondition.GetReverseOrder();
worksheet.GetRange("B1").SetValue("Icons reversed: " + isReversed);
```
