# SetIcon

Sets the icon for the current icon criterion.

## Syntax

```javascript
expression.SetIcon(icon);
```

`expression` - A variable that represents a [ApiIconCriterion](../ApiIconCriterion.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| icon | Required | [XlIcon](../../Enumeration/XlIcon.md) |  | The icon constant to set. |

## Returns

This method doesn't return any data.

## Example

This example shows how to change the icon of a criterion.

```javascript editor-xlsx playground
// How to modify the icon assigned to an icon set criterion.

// Set a custom icon for this criterion threshold.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Status");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(65);
worksheet.GetRange("A4").SetValue(45);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
worksheet.GetRange("B1").SetValue("Before: Default icons");

criteria[0].SetIcon("xlIconRedFlag");
worksheet.GetRange("B2").SetValue("After: First icon changed to red flag");

```
