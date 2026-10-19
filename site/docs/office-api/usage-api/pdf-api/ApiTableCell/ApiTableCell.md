# ApiTableCell

Class representing a table cell.

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddColumns](./Methods/AddColumns.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Adds the new columns to the current table. |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Adds the new rows to the current table. |
| [AddText](./Methods/AddText.md) | [ApiRun](../ApiRun/ApiRun.md) | Appends text to the end of the cell content. |
| [Clear](./Methods/Clear.md) | boolean | Clears the content from the current cell. |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | Returns the background color of the current table cell. |
| [GetClassType](./Methods/GetClassType.md) | "tableCell" | Returns the type of the ApiTableCell class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the current cell content. |
| [GetIndex](./Methods/GetIndex.md) | Number | Returns the current cell index. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal id of the current table cell. |
| [GetNext](./Methods/GetNext.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns the next cell if exists. |
| [GetParentRow](./Methods/GetParentRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | Returns a parent row of the current cell. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a parent table of the current cell. |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns the previous cell if exists. |
| [GetRowIndex](./Methods/GetRowIndex.md) | number \| null | Returns an index of the parent row. |
| [GetText](./Methods/GetText.md) | string | Returns the inner text of the current table cell. |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | Removes a column containing the current cell. |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | Removes a row containing the current cell. |
| [Select](./Methods/Select.md) | boolean | Selects the current table cell. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color of the current cell. |
| [SetCellBorderBottom](./Methods/SetCellBorderBottom.md) | boolean | Sets the border which shall be displayed at the bottom of the current table cell. |
| [SetCellBorderLeft](./Methods/SetCellBorderLeft.md) | boolean | Sets the border which shall be displayed at the left of the current table cell. |
| [SetCellBorderRight](./Methods/SetCellBorderRight.md) | boolean | Sets the border which shall be displayed at the right of the current table cell. |
| [SetCellBorderTop](./Methods/SetCellBorderTop.md) | boolean | Sets the border which shall be displayed at the top of the current table cell. |
| [SetCellMarginBottom](./Methods/SetCellMarginBottom.md) | boolean | Specifies an amount of space which shall be left between the bottom extent of the cell contents and the border of a specific individual table cell within a table. |
| [SetCellMarginLeft](./Methods/SetCellMarginLeft.md) | boolean | Specifies an amount of space which shall be left between the left extent of the current cell contents and the left edge border of a specific individual table cell within a table. |
| [SetCellMarginRight](./Methods/SetCellMarginRight.md) | boolean | Specifies an amount of space which shall be left between the right extent of the current cell contents and the right edge border of a specific individual table cell within a table. |
| [SetCellMarginTop](./Methods/SetCellMarginTop.md) | boolean | Specifies an amount of space which shall be left between the top extent of the current cell contents and the top edge border of a specific individual table cell within a table. |
| [SetColumnBackgroundColor](./Methods/SetColumnBackgroundColor.md) | boolean | Sets the background color to all cells in the column containing the current cell. |
| [SetShd](./Methods/SetShd.md) | boolean | Specifies the shading which shall be applied to the extents of the current table cell. |
| [SetText](./Methods/SetText.md) | [ApiRun](../ApiRun/ApiRun.md) | Replaces all content of the current table cell with the specified text, preserving the formatting of the first paragraph. |
| [SetTextDirection](./Methods/SetTextDirection.md) | boolean | Specifies the direction of the text flow for the current table cell. |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Sets the text properties to the content of the current cell. |
| [SetVerticalAlign](./Methods/SetVerticalAlign.md) | boolean | Specifies the vertical alignment for text within the current table cell. |
| [SetWidth](./Methods/SetWidth.md) | boolean | Specifies the preferred width for this cell. |
