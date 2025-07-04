# SetSize

Sets a size of the object (image, shape, chart) bounding box.

## Syntax

```javascript
expression.SetSize(nWidth, nHeight);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The object width measured in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The object height measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the size of the shape bounding box.

```javascript editor-xlsx
// How to change the size of the drawing.

// Resize a drawing by setting its width and height.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
