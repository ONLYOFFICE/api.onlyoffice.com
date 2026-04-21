# ApiTable

ApiTable is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddColumn](./Methods/AddColumn.md) | None | Adds a new column to the end of the current table. |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Adds a new row to the current table. |
| [GetClassType](./Methods/GetClassType.md) | "table" | Returns the type of the ApiTable object. |
| [GetHyperlink](./Methods/GetHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | Returns the hyperlink from the current drawing object (shape or image). |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current drawing object. |
| [GetParent](./Methods/GetParent.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| [ApiLayout](../ApiLayout/ApiLayout.md) \| [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent object. |
| [GetParentLayout](./Methods/GetParentLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | Returns the drawing parent slide layout. |
| [GetParentMaster](./Methods/GetParentMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent slide master. |
| [GetParentSlide](./Methods/GetParentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | Returns the drawing parent slide. |
| [GetPlaceholder](./Methods/GetPlaceholder.md) | [ApiPlaceholder](../ApiPlaceholder/ApiPlaceholder.md) \| null | Returns a placeholder from the current drawing object. |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | Gets the x position of the drawing on the slide. |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | Gets the y position of the drawing on the slide. |
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Returns a row by its index. |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null". **Warning**: The number of cells in any row and the number of rows in the current table may be changed. |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | Removes a table column with the specified cell. |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | Removes a table row with the specified cell. |
| [ReplacePlaceholder](./Methods/ReplacePlaceholder.md) | boolean | Replaces the placeholder by a drawing on the slide. |
| [SetHyperlink](./Methods/SetHyperlink.md) | boolean | Sets a hyperlink to the current drawing object (shape or image). Pass null to remove the hyperlink. |
| [SetPlaceholder](./Methods/SetPlaceholder.md) | boolean | Sets the specified placeholder to the current drawing object. |
| [SetPosX](./Methods/SetPosX.md) | boolean | Sets the x position of the drawing on the slide. |
| [SetPosY](./Methods/SetPosY.md) | boolean | Sets the y position of the drawing on the slide. |
| [SetPosition](./Methods/SetPosition.md) | None | Sets the position of the drawing on the slide. |
| [SetShd](./Methods/SetShd.md) | None | Specifies the shading which shall be applied to the extents of the current table. |
| [SetSize](./Methods/SetSize.md) | None | Sets the table size. |
| [SetTableLook](./Methods/SetTableLook.md) | None | Specifies the components of the conditional formatting of the referenced table style (if one exists) which shall be applied to the set of table rows with the current table-level property exceptions. A table style can specify up to six different optional conditional formats [Example: Different formatting for first column], which then can be applied or omitted from individual table rows in the parent table. The default setting is to apply the row and column banding formatting, but not the first row, last row, first column, or last column formatting. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTable object into the JSON object. |
