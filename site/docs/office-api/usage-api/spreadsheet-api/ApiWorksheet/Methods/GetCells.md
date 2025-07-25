# GetCells

Returns the ApiRange that represents all the cells on the worksheet (not just the cells that are currently in use).

## Syntax

```javascript
expression.GetCells(row, col);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| row | Required | number |  | The row number or the cell number (if only row is defined). |
| col | Required | number |  | The column number. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example shows how to get the ApiRange that represents all the cells on the worksheet.

```javascript editor-xlsx
// How to get all cells.

// Get all cells from the worksheet.

let worksheet = Api.GetActiveSheet();
let cells = worksheet.GetCells();
cells.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
