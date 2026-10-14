# SelectRange

Selects a range of cells in the current table.

## Syntax

```javascript
expression.SelectRange(startRowIndex, startCellIndex, endRowIndex, endCellIndex);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startRowIndex | Required | number |  | The start row index. |
| startCellIndex | Required | number |  | The start cell index within the start row. |
| endRowIndex | Required | number |  | The end row index. |
| endCellIndex | Required | number |  | The end cell index within the end row. |

## Returns

boolean

## Example

Select a rectangular range of cells in a table on a slide.

```javascript editor-pptx
// Highlight a block of cells spanning several rows and columns to apply changes to them.

// Select the cells from the first cell of the first row to the second cell of the second row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(3, 3);
table.SetPosition(0, 0);
slide.AddObject(table);
table.SelectRange(0, 0, 1, 1);
const selectedCells = table.GetSelectedCells();
selectedCells.forEach(function(cell){
    cell.SetBackgroundColor(Api.RGB(150, 0, 0))
})
```
