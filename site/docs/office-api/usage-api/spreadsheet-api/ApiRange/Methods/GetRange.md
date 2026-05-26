# GetRange

Returns a Range object that represents a cell or a range of cells.
When applied to a Range object, the property is relative to that Range object.

## Syntax

```javascript
expression.GetRange(cell1, cell2);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cell1 | Required | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | The first cell address (e.g., "A1" or "A1:B2"). |
| cell2 | Optional | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | The second cell address (optional, defines the corner with "cell1"). |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Select a smaller range of cells from within a larger range in a spreadsheet.

```javascript editor-xlsx
// How do I pick out a subset of cells from an existing range in a spreadsheet?

// Highlight distinct sections of a range by filling each sub-selection with a different color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let parentRange = worksheet.GetRange("B2:F6");
parentRange.SetValue("Parent Range");
parentRange.SetBorders("xlEdgeTop", "xlThick", Api.CreateColorFromRGB(255, 111, 61));

let subRange1 = parentRange.GetRange("A1:B2");
subRange1.SetValue("Sub 1");
subRange1.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

let subRange2 = parentRange.GetRange("C3:D4");
subRange2.SetValue("Sub 2");
subRange2.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

// Test two-parameter syntax: define range by specifying two corners
let subRange3 = parentRange.GetRange("B1", "D2");
subRange3.SetValue("Sub 3");
subRange3.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));
```
