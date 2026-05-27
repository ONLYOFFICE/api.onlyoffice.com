# GetHeight

Returns the height of the current drawing.

## Syntax

```javascript
expression.GetHeight();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EMU](../../Enumeration/EMU.md)

## Example

Retrieve the height of a drawing object in a spreadsheet.

```javascript editor-xlsx
// How do I find out how tall a drawing is in a spreadsheet?

// Measure the vertical size of a shape and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
let height = drawing.GetHeight();
worksheet.GetRange("A1").SetValue("Drawing height = " + height);
```
