# SetMinPointType

Sets the type for the minimum value condition for the data bar.

## Syntax

```javascript
expression.SetMinPointType(type);
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) |  | The type of the minimum value condition. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates setting the minimum point type of a data bar conditional formatting rule.

```javascript editor-xlsx playground
// How to change the type of the minimum condition value.

// Set the minimum point type of a data bar conditional formatting rule.

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

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(dataBar.GetMinPointType());

dataBar.SetMinPointType("xlConditionValuePercent");

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetMinPointType());

```
