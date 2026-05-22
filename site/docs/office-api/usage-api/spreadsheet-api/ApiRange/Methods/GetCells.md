# GetCells

Returns a Range object that represents all the cells in the specified range or a specified cell.

## Syntax

```javascript
expression.GetCells(row, col);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| row | Required | number |  | The row number or the cell number (if only row is defined). |
| col | Required | number |  | The column number. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Access a specific cell within a range by its row and column position in a spreadsheet.

```javascript editor-xlsx
// How do I pick out one cell from a larger range in a spreadsheet?

// Target a single cell inside a multi-cell range and fill it with a highlight color.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C3");
range.GetCells(2, 1).SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
