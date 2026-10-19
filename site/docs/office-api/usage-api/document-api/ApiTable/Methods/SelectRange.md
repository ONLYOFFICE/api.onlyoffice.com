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

Select a rectangular range of cells in a table in a document.

```javascript editor-docx
// Highlight a block of cells spanning several rows and columns for further editing.

// Select the cells from the first cell of the first row to the second cell of the third row.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.GetCell(0, 0).SetText("Start of the selected range.");
table.GetCell(2, 1).SetText("End of the selected range.");
table.SelectRange(0, 0, 2, 1);
```
