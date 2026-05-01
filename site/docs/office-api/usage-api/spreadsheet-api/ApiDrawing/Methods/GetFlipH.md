# GetFlipH

Get horizontal flip of current drawing.

## Syntax

```javascript
expression.GetFlipH();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

Check whether the drawing is flipped horizontally in a spreadsheet.

```javascript editor-xlsx
// How to get the horizontal flip property of the shape in a spreadsheet.

// Create a drawing and read its horizontal flip value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let flip = drawing.GetFlipH();
worksheet.SetColumnWidth(0, 25);
worksheet.GetRange("A1").SetValue("Drawing is flipped horizontally: " + flip);
```
