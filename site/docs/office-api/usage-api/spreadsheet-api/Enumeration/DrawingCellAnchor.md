# DrawingCellAnchor

The cell anchor of a drawing.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| colOffset | [EMU](../Enumeration/EMU.md) | The offset from the fromCol column to the left part of the drawing object. |
| fromCol | number | The number of the column where the drawing object begins. |
| fromRow | number | The number of the row where the drawing object begins. |
| rowOffset | [EMU](../Enumeration/EMU.md) | The offset from the fromRow row to the upper part of the drawing object. |

## Example

Anchor a shape to a cell and read the anchor back.

```javascript editor-xlsx
// How to use the cell anchor of a drawing in a spreadsheet.

// Place a shape with a cell anchor and read it back in the same form.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 0, 0, 0);
let anchor = {fromCol: 2, colOffset: 5 * 36000, fromRow: 3, rowOffset: 2 * 36000};
drawing.SetPosition(anchor.fromCol, anchor.colOffset, anchor.fromRow, anchor.rowOffset);
let position = drawing.GetPosition();
worksheet.GetRange("A1").SetValue("Anchored at column " + position.fromCol + ", row " + position.fromRow);
```
