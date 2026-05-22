# ApiTable

ApiTable is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddColumn](./Methods/AddColumn.md) | boolean | Adds a new column to the end of the current table. |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Adds a new row to the current table. |
| [Copy](./Methods/Copy.md) | [ApiTable](../ApiTable/ApiTable.md) | Creates a copy of the specified table. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object from the parent. |
| [GetClassType](./Methods/GetClassType.md) | "table" | Returns the type of the ApiTable object. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current drawing. |
| [GetParentPage](./Methods/GetParentPage.md) | [ApiPage](../ApiPage/ApiPage.md) | Returns the type of the ApiDrawing class. |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | Gets the x position of the drawing on the page. |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | Gets the y position of the drawing on the page. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Returns a row by its index. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null". |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | Removes a table column with the specified cell. |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | Removes a table row with the specified cell. |
| [Select](./Methods/Select.md) | boolean | Selects the current graphic object. |
| [SetPosX](./Methods/SetPosX.md) | boolean | Sets the x position of the drawing on the page. |
| [SetPosY](./Methods/SetPosY.md) | boolean | Sets the y position of the drawing on the page. |
| [SetPosition](./Methods/SetPosition.md) | boolean | Sets the position of the drawing on the page. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetShd](./Methods/SetShd.md) | boolean | Specifies the shading which shall be applied to the extents of the current table. |
| [SetSize](./Methods/SetSize.md) | boolean | Sets the size of the object (image, shape, chart) bounding box. |
| [SetTableLook](./Methods/SetTableLook.md) | boolean | Specifies the components of the conditional formatting of the referenced table style (if one exists) |
