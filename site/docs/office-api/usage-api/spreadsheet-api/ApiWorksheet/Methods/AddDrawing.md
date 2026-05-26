# AddDrawing

Adds a detached drawing object (e.g. a copy returned by ApiDrawing.Copy) to the worksheet at the specified anchor.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.AddDrawing(oDrawing, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oDrawing | Required | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | The drawing object to add. |
| nFromCol | Required | number |  | The number of the column where the upper-left corner of the drawing will be placed. |
| nColOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromCol column to the upper-left corner of the drawing measured in English measure units. |
| nFromRow | Required | number |  | The number of the row where the upper-left corner of the drawing will be placed. |
| nRowOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromRow row to the upper-left corner of the drawing measured in English measure units. |

## Returns

boolean

## Example

Place a detached drawing onto a worksheet at a chosen cell anchor in a spreadsheet.

```javascript editor-xlsx
// How do I attach a copied drawing to a sheet at a specific cell anchor in a spreadsheet?

// Take a drawing returned by Copy and add it to the sheet next to the original in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let copyDrawing = shape.Copy();
worksheet.AddDrawing(copyDrawing, 4, 2 * 36000, 2, 3 * 36000);
```
