# SetFillColor

Sets the background color to the format condition with the previously created color object.
Sets 'No Fill' when previously created color object is null.

## Syntax

```javascript
expression.SetFillColor(oColor);
```

`expression` - A variable that represents a [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color object that specifies the background color for the format condition. |

## Returns

This method doesn't return any data.

## Example

This example sets the background color for a conditional formatting rule.

```javascript editor-xlsx
// How to apply background colors to conditional formatting rules.

// Set conditional formatting rule background color.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");

worksheet.GetRange("C1").SetValue("Original color:");
worksheet.GetRange("C2").SetValue("No Fill");

let fillColor = Api.CreateColorFromRGB(255, 255, 0);
condition1.SetFillColor(fillColor);

worksheet.GetRange("C4").SetValue("New color:");
worksheet.GetRange("C5").SetValue("Yellow background");

```
