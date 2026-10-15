# ApiTableRow

Class representing a table row.

ApiTableRow is a subclass of [ApiTableRowPr](../ApiTableRowPr/ApiTableRowPr.md).

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Adds the new rows to the current table. |
| [Clear](./Methods/Clear.md) | boolean | Clears the content from the current row. |
| [GetCell](./Methods/GetCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | Returns a cell by its position in the current row. |
| [GetCellsCount](./Methods/GetCellsCount.md) | number | Returns a number of cells in the current row. |
| [GetClassType](./Methods/GetClassType.md) | "tableRow" | Returns the type of the ApiTableRow class. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) \| null | Returns the height of the current table row. |
| [GetIndex](./Methods/GetIndex.md) | Number | Returns the current row index. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal id of the current table row. |
| [GetNext](./Methods/GetNext.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | Returns the next row if exists. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns the parent table of the current row. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | Returns the previous row if exists. |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Merges the cells in the current row. |
| [Remove](./Methods/Remove.md) | boolean | Removes the current table row. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to all cells in the current table row. |
| [SetHeight](./Methods/SetHeight.md) | [EMU](../Enumeration/EMU.md) \| null | Sets the height to the current table row. |
| [SetRowPr](./Methods/SetRowPr.md) | boolean | Sets the properties to the current table row. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the current row. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTableRowPr object into the JSON object. |
