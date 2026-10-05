# SetFillColor

Sets the background color to the format condition with the previously created color object.

Sets 'No Fill' when previously created color object is null.

Inherited from [ApiFormatCondition.SetFillColor](../../ApiFormatCondition/Methods/SetFillColor.md).

## Syntax

```javascript
expression.SetFillColor(oColor);
```

`expression` - A variable that represents an [ApiTop10](../ApiTop10.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color object that specifies the background color for the format condition. |

## Returns

This method doesn't return any data.

## Example

Color the cells that match a top 10 conditional formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I choose a background color for highlighted top values in a spreadsheet?

// Make the highest-ranking cells stand out with a custom fill color in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();

let colorBefore = condition1.GetFillColor();
condition1.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));
let colorAfter = condition1.GetFillColor();

worksheet.GetRange("C1").SetValue("Fill color changed");
worksheet.GetRange("C2").SetValue("Top 2 values now green");
```
