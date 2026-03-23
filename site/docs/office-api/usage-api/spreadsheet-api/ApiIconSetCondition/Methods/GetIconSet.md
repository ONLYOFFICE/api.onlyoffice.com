# GetIconSet

Returns the icon set type used in the conditional formatting rule.

## Syntax

```javascript
expression.GetIconSet();
```

`expression` - A variable that represents a [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlIconSet](../../Enumeration/XlIconSet.md) \| null

## Example

This example shows how to get the icon set type from conditional formatting.

```javascript editor-xlsx
// How to retrieve the current icon set type used in conditional formatting.

// Get the icon set type assigned to the formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Score");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(45);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetIconSet("xl3TrafficLights1");

let iconSet = iconCondition.GetIconSet();
worksheet.GetRange("B1").SetValue("Current icon set: " + iconSet);

```
