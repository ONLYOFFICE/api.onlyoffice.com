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

This example shows how to change the icon set type for conditional formatting.

```javascript editor-xlsx playground
// How to modify the icon set type used in conditional formatting.

// Set a different icon set type for the formatting rule.

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
