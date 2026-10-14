# ApiTable

Class representing a table.

ApiTable is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Cells | [ApiTableCell](../ApiTableCell/ApiTableCell.md)[][] | Returns all cells of the current table as a two-dimensional array indexed by [row][cell]. |
| Rows | [ApiTableRow](../ApiTableRow/ApiTableRow.md)[] | Returns all rows of the current table. |

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddColumn](./Methods/AddColumn.md) | None | Adds a new column to the end of the current table. |
| [AddColumns](./Methods/AddColumns.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Adds the new columns to the current table. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds a paragraph using its position in the cell. |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Adds a new row to the current table. |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Adds the new rows to the current table. |
| [Clear](./Methods/Clear.md) | boolean | Clears the content from the table. |
| [Copy](./Methods/Copy.md) | [ApiTable](../ApiTable/ApiTable.md) | Creates a copy of the current table. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object from the parent. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetCell](./Methods/GetCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a cell by its position. |
| [GetClassType](./Methods/GetClassType.md) | "table" | Returns the type of the ApiTable object. |
| [GetColumnWidth](./Methods/GetColumnWidth.md) | [EMU](../Enumeration/EMU.md) \| null | Returns the width of the specified column (by index) of the current table. |
| [GetColumnsCount](./Methods/GetColumnsCount.md) | number | Returns a number of columns in the current table. |
| [GetDescription](./Methods/GetDescription.md) | string \| null | Gets the description of the current drawing. |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | Gets the fill formatting properties from the current graphic object. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetHyperlink](./Methods/GetHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | Returns the hyperlink from the current drawing object (shape or image). |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current table. |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | Gets the outline properties from the current graphic object. |
| [GetLockAspect](./Methods/GetLockAspect.md) | boolean | Returns whether the aspect ratio of the drawing is locked. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetParent](./Methods/GetParent.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| [ApiLayout](../ApiLayout/ApiLayout.md) \| [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent object. |
| [GetParentLayout](./Methods/GetParentLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | Returns the drawing parent slide layout. |
| [GetParentMaster](./Methods/GetParentMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent slide master. |
| [GetParentSlide](./Methods/GetParentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | Returns the drawing parent slide. |
| [GetPlaceholder](./Methods/GetPlaceholder.md) | [ApiPlaceholder](../ApiPlaceholder/ApiPlaceholder.md) \| null | Returns a placeholder from the current drawing object. |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | Gets the x position of the drawing on the slide. |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | Gets the y position of the drawing on the slide. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null \| undefined | Returns a row by its index. |
| [GetRowsCount](./Methods/GetRowsCount.md) | number | Returns a number of rows in the current table. |
| [GetSelectedCells](./Methods/GetSelectedCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md)[] | Returns the selected cells of the current table. |
| [GetSelectedColumnsCells](./Methods/GetSelectedColumnsCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md)[] | Returns all cells from the columns that contain the currently selected cells. This method identifies which columns contain selected cells and then returns all cells in those columns, not just the selected cells themselves. |
| [GetSelectedRows](./Methods/GetSelectedRows.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md)[] | Returns the rows that contain the currently selected cells of the current table. |
| [GetShadow](./Methods/GetShadow.md) | [ApiShadow](../ApiShadow/ApiShadow.md) \| null | Returns the shadow of the current graphic object. |
| [GetTableDescription](./Methods/GetTableDescription.md) | string | Returns the table description. |
| [GetTableLook](./Methods/GetTableLook.md) | [TableLook](../Enumeration/TableLook.md) | Gets table look properties |
| [GetTableTitle](./Methods/GetTableTitle.md) | string | Returns the table title. |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns an ApiTextRange covering the full text content of the shape. Creates a text body if the shape does not yet have one. |
| [GetTitle](./Methods/GetTitle.md) | string \| null | Gets the title of the current drawing. |
| [GetVisitor](./Methods/GetVisitor.md) | [ApiPresentationVisitor](../ApiPresentationVisitor/ApiPresentationVisitor.md) | Returns a visitor object for traversing the text of the current drawing, including the drawings nested in a group. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [HasTextContent](./Methods/HasTextContent.md) | boolean | Checks whether the drawing has an associated text body. |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null \| undefined | Merges an array of cells. |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | Removes a table column with the specified cell. |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | Removes a table row with the specified cell. When the last row is removed, the whole table is deleted from the slide |
| [ReplacePlaceholder](./Methods/ReplacePlaceholder.md) | boolean | Replaces the placeholder by a drawing on the slide. |
| [Select](./Methods/Select.md) | boolean | Selects the current graphic object. |
| [SelectRange](./Methods/SelectRange.md) | boolean | Selects a range of cells in the current table. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color for all cells in the current table. |
| [SetColumnWidth](./Methods/SetColumnWidth.md) | [EMU](../Enumeration/EMU.md) \| null | Sets the width of the specified column in the current table. |
| [SetDescription](./Methods/SetDescription.md) | boolean | Sets the description of the current drawing. |
| [SetFill](./Methods/SetFill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetHeight](./Methods/SetHeight.md) | boolean | Sets the total height of the current table, distributing it evenly among the table rows. The value is applied as a minimum height for each row, so a row can be taller if its content requires more space. |
| [SetHyperlink](./Methods/SetHyperlink.md) | boolean | Sets a hyperlink to the current drawing object (shape or image). |
| [SetLine](./Methods/SetLine.md) | boolean | Sets the outline properties to the current graphic object. |
| [SetLockAspect](./Methods/SetLockAspect.md) | boolean | Sets whether the aspect ratio of the drawing is locked. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetPlaceholder](./Methods/SetPlaceholder.md) | boolean | Sets the specified placeholder to the current drawing object. |
| [SetPosX](./Methods/SetPosX.md) | boolean | Sets the x position of the drawing on the slide. |
| [SetPosY](./Methods/SetPosY.md) | boolean | Sets the y position of the drawing on the slide. |
| [SetPosition](./Methods/SetPosition.md) | None | Sets the position of the drawing on the slide. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetShadow](./Methods/SetShadow.md) | boolean | Sets the shadow to the current graphic object. |
| [SetShd](./Methods/SetShd.md) | None | Specifies the shading which shall be applied to the extents of the current table. |
| [SetSize](./Methods/SetSize.md) | boolean | Sets the table size. |
| [SetStyle](./Methods/SetStyle.md) | boolean | Sets the style for the current table. |
| [SetTableDescription](./Methods/SetTableDescription.md) | boolean | Sets the table description. |
| [SetTableLook](./Methods/SetTableLook.md) | None | Specifies the components of the conditional formatting of the referenced table style (if one exists) which shall be applied to the set of table rows with the current table-level property exceptions. A table style can specify up to six different optional conditional formats [Example: Different formatting for first column], which then can be applied or omitted from individual table rows in the parent table. |
| [SetTableTitle](./Methods/SetTableTitle.md) | boolean | Sets the table title. |
| [SetTitle](./Methods/SetTitle.md) | boolean | Sets the title of the current drawing. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTable object into the JSON object. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current graphic object from the selection. |
