# SetIconSet

Sets the icon set type for the conditional formatting rule.

## Syntax

```javascript
expression.SetIconSet(iconSet);
```

`expression` - A variable that represents a [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| iconSet | Required | [XlIconSet](../../Enumeration/XlIconSet.md) |  | The icon set type to apply. |

## Returns

boolean

## Example

Apply a specific icon set to a conditional formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I choose which icon set appears in a conditional formatting rule in a spreadsheet?

// Switch the icons used to visualize data ranges without changing the rule itself.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Performance");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(75);
worksheet.GetRange("A4").SetValue(60);
worksheet.GetRange("A5").SetValue(40);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Before: Default icon set");
iconCondition.SetIconSet("xl4Arrows");
worksheet.GetRange("B2").SetValue("After: Changed to 4 arrows");
```
