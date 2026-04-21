# GetIcon

Returns the icon associated with the current icon criterion.

## Syntax

```javascript
expression.GetIcon();
```

`expression` - A variable that represents a [ApiIconCriterion](../ApiIconCriterion.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlIcon](../../Enumeration/XlIcon.md) \| null

## Example

Get the icon of a criterion in a spreadsheet.

```javascript editor-xlsx
// How to retrieve the icon from an icon set criterion in a spreadsheet.

// Get the icon assigned to this criterion in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Quality");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(40);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
let firstIcon = criteria[0].GetIcon();

worksheet.GetRange("B1").SetValue("First criterion icon: " + firstIcon);
```
