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

Select a range of cells in a table in a PDF.

```javascript editor-pdf
// Select several adjacent cells in a table at once in a PDF.

// Create a table and select a 2x2 block of cells starting from the top-left corner.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
page.AddObject(table);

table.SelectRange(0, 0, 1, 1);
const paragraph = Api.CreateParagraph();
paragraph.AddText('Selected cells: ' + table.GetSelectedCells().length);
table.GetCell(0, 0).GetContent().Push(paragraph);
```
