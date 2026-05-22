# SetAxisColor

Sets the axis color for the data bar conditional formatting rule.

## Syntax

```javascript
expression.SetAxisColor(oColor);
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The axis color as an ApiColor object. |

## Returns

This method doesn't return any data.

## Example

Apply a custom color to the center axis line of data bars in a spreadsheet.

```javascript editor-xlsx
// How do I change the color of the axis that divides positive and negative data bars in a spreadsheet?

// Give the data bar axis a distinct color to make the zero line stand out in a spreadsheet.

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

worksheet.GetRange("C1").SetValue("Before Color:");
worksheet.GetRange("C2").SetValue(dataBar.GetAxisColor() ? "Set" : "None");

let axisColor = Api.CreateColorFromRGB(255, 0, 0);
dataBar.SetAxisColor(axisColor);

worksheet.GetRange("C3").SetValue("After Color:");
worksheet.GetRange("C4").SetValue(dataBar.GetAxisColor() ? "Set" : "None");
```
