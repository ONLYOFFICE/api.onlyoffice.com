# SetPosition

Changes the position for the drawing object.
💡 Please note that the horizontal and vertical offsets are calculated within the limits of
the specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set.

Inherited from [ApiDrawing.SetPosition](../../ApiDrawing/Methods/SetPosition.md).

## Example

Place a drawing at a specific location relative to the cells in a spreadsheet.

```javascript editor-xlsx
// How do I control exactly where a drawing appears in a spreadsheet?

// Reposition a shape by anchoring it to a chosen cell column and row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
```
