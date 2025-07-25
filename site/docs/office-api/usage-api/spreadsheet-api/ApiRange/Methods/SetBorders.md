# SetBorders

Sets the border to the cell / cell range with the parameters specified.

## Syntax

```javascript
expression.SetBorders(bordersIndex, lineStyle, oColor);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bordersIndex | Required | [BordersIndex](../../Enumeration/BordersIndex.md) |  | Specifies the cell border position. |
| lineStyle | Required | [LineStyle](../../Enumeration/LineStyle.md) |  | Specifies the line style used to form the cell border. |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color object which specifies the color to be set to the cell border. |

## Returns

This method doesn't return any data.

## Example

This example sets the border to the cell with the parameters specified.

```javascript editor-xlsx
// How to set the thick bottom border to a cell.

// Get a range and set its border specifying its side, type and color.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 50);
worksheet.GetRange("A2").SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
worksheet.GetRange("A2").SetValue("This is a cell with a bottom border");
```
