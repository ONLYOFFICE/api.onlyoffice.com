# GetValue

Returns the threshold value for the icon criterion.

## Syntax

```javascript
expression.GetValue();
```

`expression` - A variable that represents a [ApiIconCriterion](../ApiIconCriterion.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| number \| null

## Example

Read the threshold value from an icon criterion in a spreadsheet.

```javascript editor-xlsx
// How do I find out what number or formula an icon criterion uses as its cutoff in a spreadsheet?

// Retrieve the exact boundary value that determines which icon a cell receives in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(50);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
let secondCriterion = criteria[1];
let criterionValue = secondCriterion.GetValue();

worksheet.GetRange("B1").SetValue("Second criterion value: " + criterionValue);
```
