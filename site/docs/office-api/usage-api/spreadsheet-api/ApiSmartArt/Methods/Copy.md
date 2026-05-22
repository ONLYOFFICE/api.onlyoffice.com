# Copy

Creates a copy of the specified drawing object.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

Inherited from [ApiDrawing.Copy](../../ApiDrawing/Methods/Copy.md).

## Example

Duplicate a drawing on a worksheet and place the copy next to the original in a spreadsheet.

```javascript editor-xlsx
// How do I make a copy of a drawing in a spreadsheet?

// Clone a drawing and add the copy to the sheet at a different cell anchor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let copyDrawing = shape.Copy();
worksheet.AddDrawing(copyDrawing, 4, 2 * 36000, 2, 3 * 36000);
```
