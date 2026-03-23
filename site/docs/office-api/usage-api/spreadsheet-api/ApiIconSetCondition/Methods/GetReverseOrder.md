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

This example shows how to check if icon order is reversed.

```javascript editor-xlsx
// How to determine if icon set displays icons in reverse order.

// Check if the icon set rule reverses the icon display order.

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
