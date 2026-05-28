# SetPercentMax

Sets the percent maximum value for the data bar.

## Syntax

```javascript
expression.SetPercentMax(percent);
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| percent | Required | number |  | The maximum length of the data bar in percent. |

## Returns

This method doesn't return any data.

## Example

Cap the longest bar in a data bar rule to a specific percentage of the column width in a spreadsheet.

```javascript editor-xlsx
// How do I limit how wide the largest data bar can grow inside a cell in a spreadsheet?

// Prevent oversized bars by defining an upper percentage boundary for bar length in a spreadsheet.

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
worksheet.GetRange("C2").SetValue(dataBar.GetPercentMax() + "%");

dataBar.SetPercentMax(80);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetPercentMax() + "%");
```
