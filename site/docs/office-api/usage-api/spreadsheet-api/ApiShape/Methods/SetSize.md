# SetSize

Sets a size of the object (image, shape, chart) bounding box.

Inherited from [ApiDrawing.SetSize](../../ApiDrawing/Methods/SetSize.md).

## Syntax

```javascript
expression.SetSize(nWidth, nHeight);
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The object width measured in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The object height measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

Resize a drawing to exact dimensions by specifying its width and height in a spreadsheet.

```javascript editor-xlsx
// How do I make a drawing larger or smaller in a spreadsheet?

// Scale a shape to fit a particular area by defining its bounding box dimensions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
