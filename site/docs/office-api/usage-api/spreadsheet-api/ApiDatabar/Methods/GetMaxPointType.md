# GetMaxPointType

Returns the type of the maximum value condition for the data bar.

## Syntax

```javascript
expression.GetMaxPointType();
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) \| null

## Example

This example demonstrates getting the maximum point type from a data bar conditional formatting rule.

```javascript editor-xlsx playground
// How to check the type of the maximum condition value.

// Get the maximum point type of a data bar conditional formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let maxPointType = dataBar.GetMaxPointType();

worksheet.GetRange("C1").SetValue("Max Point Type:");
worksheet.GetRange("C2").SetValue(maxPointType);

```
