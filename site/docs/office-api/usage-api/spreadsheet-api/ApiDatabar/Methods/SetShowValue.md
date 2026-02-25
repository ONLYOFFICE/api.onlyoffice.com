# SetShowValue

Specifies whether the data bar displays the cell value.

## Syntax

```javascript
expression.SetShowValue(showValue);
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| showValue | Required | boolean |  | True to show the value, false to hide it. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates setting the show value setting of a data bar conditional formatting rule.

```javascript editor-xlsx playground
// How to control whether the data bar shows the value.

// Set the show value setting of a data bar conditional formatting rule.

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
worksheet.GetRange("C2").SetValue(dataBar.GetShowValue() ? "Yes" : "No");

dataBar.SetShowValue(false);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetShowValue() ? "Yes" : "No");

```
