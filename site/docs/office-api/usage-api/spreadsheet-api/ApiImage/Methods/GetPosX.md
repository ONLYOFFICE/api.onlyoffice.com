# GetPosX

Returns the x position of the current drawing on the worksheet.

Inherited from [ApiDrawing.GetPosX](../../ApiDrawing/Methods/GetPosX.md).

## Syntax

```javascript
expression.GetPosX();
```

`expression` - A variable that represents an [ApiImage](../ApiImage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EMU](../../Enumeration/EMU.md)

## Example

Get the horizontal position of a shape in a spreadsheet.

```javascript editor-xlsx
// How do I find the left edge coordinate of a drawing in a spreadsheet?

// Read and display the X position of a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetPosition(2, 5 * 36000, 3, 2 * 36000);
let posX = drawing.GetPosX();
worksheet.GetRange("A1").SetValue("Drawing X position: " + posX + " EMU");
```
