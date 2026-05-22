# ApiTable

ApiTable is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddColumn](./Methods/AddColumn.md) | None | Adds a new column to the end of the current table. |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Adds a new row to the current table. |
| [Copy](./Methods/Copy.md) | [ApiTable](../ApiTable/ApiTable.md) | Creates a copy of the specified table. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object from the parent. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetClassType](./Methods/GetClassType.md) | "table" | Returns the type of the ApiTable object. |
| [GetColumnWidth](./Methods/GetColumnWidth.md) | [EMU](../Enumeration/EMU.md) \| null | Returns the width of the specified column (by index) of the current table. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetHyperlink](./Methods/GetHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | Returns the hyperlink from the current drawing object (shape or image). |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current drawing object. |
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
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Returns a row by its index. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null". |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | Removes a table column with the specified cell. |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | Removes a table row with the specified cell. |
| [ReplacePlaceholder](./Methods/ReplacePlaceholder.md) | boolean | Replaces the placeholder by a drawing on the slide. |
| [Select](./Methods/Select.md) | boolean | Selects the current graphic object. |
| [SetColumnWidth](./Methods/SetColumnWidth.md) | [EMU](../Enumeration/EMU.md) \| null | Sets the width of the specified column in the current table. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetHyperlink](./Methods/SetHyperlink.md) | boolean | Sets a hyperlink to the current drawing object (shape or image). |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetPlaceholder](./Methods/SetPlaceholder.md) | boolean | Sets the specified placeholder to the current drawing object. |
| [SetPosX](./Methods/SetPosX.md) | boolean | Sets the x position of the drawing on the slide. |
| [SetPosY](./Methods/SetPosY.md) | boolean | Sets the y position of the drawing on the slide. |
| [SetPosition](./Methods/SetPosition.md) | None | Sets the position of the drawing on the slide. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetShd](./Methods/SetShd.md) | None | Specifies the shading which shall be applied to the extents of the current table. |
| [SetSize](./Methods/SetSize.md) | None | Sets the table size. |
| [SetTableLook](./Methods/SetTableLook.md) | None | Specifies the components of the conditional formatting of the referenced table style (if one exists) |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTable object into the JSON object. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current graphic object from the selection. |
