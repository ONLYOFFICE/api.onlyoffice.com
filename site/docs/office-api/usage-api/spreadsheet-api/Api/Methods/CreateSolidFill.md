# CreateSolidFill

Creates a solid fill to apply to the object using a selected solid color as the object background.

## Syntax

```javascript
expression.CreateSolidFill(color);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color used for the element fill. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

Paint a shape with a single flat color as its background in a spreadsheet.

```javascript editor-xlsx
// How do I fill a shape with one uniform color in a spreadsheet?

// Cover a shape's surface with a plain, unblended color to make it stand out in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let rgbColor = Api.RGB(255, 111, 61);
let fill = Api.CreateSolidFill(rgbColor);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
