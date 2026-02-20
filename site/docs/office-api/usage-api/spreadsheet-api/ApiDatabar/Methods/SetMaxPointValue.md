# SetMaxPointValue

Sets the value for the maximum value condition for the data bar.

## Syntax

```javascript
expression.SetMaxPointValue(value);
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | string \| number |  | The value of the maximum value condition. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates setting the maximum point value of a data bar conditional formatting rule.

```javascript editor-xlsx playground
// How to change the value of the maximum condition.

// Set the maximum point value of a data bar conditional formatting rule.

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
worksheet.GetRange("C2").SetValue(dataBar.GetMaxPointValue() || "Auto");

dataBar.SetMaxPointValue(500);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetMaxPointValue() || "Auto");

```
