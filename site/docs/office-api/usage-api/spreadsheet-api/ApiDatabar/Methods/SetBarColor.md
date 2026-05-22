# SetBarColor

Sets the bar color for the data bar.

## Syntax

```javascript
expression.SetBarColor(oColor);
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The ApiColor object representing the bar color. |

## Returns

This method doesn't return any data.

## Example

Apply a custom fill color to data bars used for conditional formatting in a spreadsheet.

```javascript editor-xlsx
// How do I change the color of data bars shown inside cells in a spreadsheet?

// Make data bars stand out by assigning them a specific color that fits your design in a spreadsheet.

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
worksheet.GetRange("C2").SetValue(dataBar.GetBarColor() ? "Set" : "None");

let barColor = Api.CreateColorFromRGB(0, 128, 255);
dataBar.SetBarColor(barColor);

worksheet.GetRange("C3").SetValue("After Color:");
worksheet.GetRange("C4").SetValue(dataBar.GetBarColor() ? "Set" : "None");
```
