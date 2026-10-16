# GetPosition

Returns the cell anchor of the current drawing; the offsets are limited by the anchor cell.

Inherited from [ApiDrawing.GetPosition](../../ApiDrawing/Methods/GetPosition.md).

## Syntax

```javascript
expression.GetPosition();
```

`expression` - A variable that represents an [ApiImage](../ApiImage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[DrawingCellAnchor](../../Enumeration/DrawingCellAnchor.md) \| null

## Example

Read the cell anchor of a drawing in a spreadsheet.

```javascript editor-xlsx
// How do I check where a shape was placed after SetPosition in a spreadsheet?

// Get the anchor column, row and offsets of a shape and display them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetPosition(2, 5 * 36000, 3, 2 * 36000);
let position = drawing.GetPosition();
worksheet.GetRange("A1").SetValue("Column: " + position.fromCol + ", offset: " + position.colOffset);
worksheet.GetRange("A2").SetValue("Row: " + position.fromRow + ", offset: " + position.rowOffset);
```
