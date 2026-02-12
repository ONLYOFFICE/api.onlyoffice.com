# SetBorders

Sets the border style for the conditional formatting rule.

## Syntax

```javascript
expression.SetBorders(bordersIndex, lineStyle, oColor);
```

`expression` - A variable that represents a [ApiColorScale](../ApiColorScale.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bordersIndex | Required | [BordersIndex](../../Enumeration/BordersIndex.md) |  | Specifies the cell border position. |
| lineStyle | Required | [LineStyle](../../Enumeration/LineStyle.md) |  | Specifies the line style used to form the cell border. |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color object which specifies the color to be set to the cell border. |

## Returns

This method doesn't return any data.

## Example

This example sets borders for a conditional formatting rule.

```javascript editor-xlsx playground
// How to apply border formatting to conditional formatting rules.

// Set conditional formatting rule borders.

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
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let borderColor = Api.CreateColorFromRGB(255, 0, 0);
condition1.SetBorders("Top", "Thick", borderColor);
condition1.SetBorders("Bottom", "Thick", borderColor);

worksheet.GetRange("C1").SetValue("Borders applied:");
worksheet.GetRange("C2").SetValue("Red thick top/bottom borders");

```
