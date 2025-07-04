# ApiTable

Represents the ApiTable class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddCaption](./Methods/AddCaption.md) | boolean | Adds a caption paragraph after (or before) the current table. 💡 Please note that the current table must be in the document (not in the footer/header). And if the current table is placed in a shape, then a caption is added after (or before) the parent shape. |
| [AddColumn](./Methods/AddColumn.md) | boolean | Adds a new column to the current table. |
| [AddColumns](./Methods/AddColumns.md) | [ApiTable](../ApiTable/ApiTable.md) | Adds the new columns to the current table. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to all contents of the current table. 💡 Please note that this table must be in the document. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds a paragraph or a table or a blockLvl content control using its position in the cell. |
| [AddRow](./Methods/AddRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) | Adds a new row to the current table. |
| [AddRows](./Methods/AddRows.md) | [ApiTable](../ApiTable/ApiTable.md) | Adds the new rows to the current table. |
| [Clear](./Methods/Clear.md) | boolean | Clears the content from the table. |
| [Copy](./Methods/Copy.md) | [ApiTable](../ApiTable/ApiTable.md) | Creates a copy of the current table. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current table. |
| [GetCell](./Methods/GetCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a cell by its position. |
| [GetClassType](./Methods/GetClassType.md) | "table" | Returns a type of the ApiTable class. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a content control that contains the current table. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a table that contains the current table. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a table cell that contains the current table. |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | Returns the table position within its parent element. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified table. |
| [GetRow](./Methods/GetRow.md) | [ApiTableRow](../ApiTableRow/ApiTableRow.md) \| null | Returns a table row by its position in the table. |
| [GetRowsCount](./Methods/GetRowsCount.md) | number | Returns a number of rows in the current table. |
| [GetTableDescription](./Methods/GetTableDescription.md) | string | Returns the table description. |
| [GetTableTitle](./Methods/GetTableTitle.md) | string | Returns the table title (caption). |
| [GetTables](./Methods/GetTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns an array of tables that represents all the tables nested within the specified table. |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiTable](../ApiTable/ApiTable.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Wraps the current table object with a content control. |
| [MergeCells](./Methods/MergeCells.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) | Merges an array of cells. If the merge is done successfully, it will return the resulting merged cell, otherwise the result will be "null". 💡 The number of cells in any row and the number of rows in the current table may be changed. |
| [RemoveColumn](./Methods/RemoveColumn.md) | boolean | Removes a table column with a specified cell. |
| [RemoveRow](./Methods/RemoveRow.md) | boolean | Removes a table row with a specified cell. |
| [ReplaceByElement](./Methods/ReplaceByElement.md) | boolean | Replaces the current table with a new element. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a table object. The search results are a collection of ApiRange objects. |
| [Select](./Methods/Select.md) | boolean | Selects the current table. |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | Sets the background color to all cells in the current table. |
| [SetCellSpacing](./Methods/SetCellSpacing.md) | boolean | Specifies the default table cell spacing (the spacing between adjacent cells and the edges of the table). |
| [SetHAlign](./Methods/SetHAlign.md) | boolean | Sets the horizontal alignment to the table. |
| [SetJc](./Methods/SetJc.md) | boolean | Specifies the alignment of the current table with respect to the text margins in the current section. |
| [SetPaddings](./Methods/SetPaddings.md) | boolean | Sets the table paddings. If table is inline, then only left padding is applied. |
| [SetShd](./Methods/SetShd.md) | boolean | Specifies the shading which is applied to the extents of the current table. |
| [SetStyle](./Methods/SetStyle.md) | boolean | Sets a style to the current table. |
| [SetStyleColBandSize](./Methods/SetStyleColBandSize.md) | boolean | Specifies a number of columns which will comprise each table column band for this table style. |
| [SetStyleRowBandSize](./Methods/SetStyleRowBandSize.md) | boolean | Specifies a number of rows which will comprise each table row band for this table style. |
| [SetTableBorderAll](./Methods/SetTableBorderAll.md) | boolean | Specifies a border which will be displayed on all table cell borders. |
| [SetTableBorderBottom](./Methods/SetTableBorderBottom.md) | boolean | Sets the border which will be displayed at the bottom of the current table. |
| [SetTableBorderInsideH](./Methods/SetTableBorderInsideH.md) | boolean | Specifies the border which will be displayed on all horizontal table cell borders which are not on the outmost edge of the parent table (all horizontal borders which are not the topmost or bottommost borders). |
| [SetTableBorderInsideV](./Methods/SetTableBorderInsideV.md) | boolean | Specifies the border which will be displayed on all vertical table cell borders which are not on the outmost edge of the parent table (all vertical borders which are not the leftmost or rightmost borders). |
| [SetTableBorderLeft](./Methods/SetTableBorderLeft.md) | boolean | Sets the border which will be displayed on the left of the current table. |
| [SetTableBorderRight](./Methods/SetTableBorderRight.md) | boolean | Sets the border which will be displayed on the right of the current table. |
| [SetTableBorderTop](./Methods/SetTableBorderTop.md) | boolean | Sets the border which will be displayed at the top of the current table. |
| [SetTableCellMarginBottom](./Methods/SetTableCellMarginBottom.md) | boolean | Specifies an amount of space which will be left between the bottom extent of the cell contents and the border of all table cells within the parent table (or table row). |
| [SetTableCellMarginLeft](./Methods/SetTableCellMarginLeft.md) | boolean | Specifies an amount of space which will be left between the left extent of the cell contents and the left border of all table cells within the parent table (or table row). |
| [SetTableCellMarginRight](./Methods/SetTableCellMarginRight.md) | boolean | Specifies an amount of space which will be left between the right extent of the cell contents and the right border of all table cells within the parent table (or table row). |
| [SetTableCellMarginTop](./Methods/SetTableCellMarginTop.md) | boolean | Specifies an amount of space which will be left between the top extent of the cell contents and the top border of all table cells within the parent table (or table row). |
| [SetTableDescription](./Methods/SetTableDescription.md) | boolean | Sets the table description. |
| [SetTableInd](./Methods/SetTableInd.md) | boolean | Specifies the indentation which will be added before the leading edge of the current table in the document (the left edge in the left-to-right table, and the right edge in the right-to-left table). |
| [SetTableLayout](./Methods/SetTableLayout.md) | boolean | Specifies the algorithm which will be used to lay out the contents of the current table within the document. |
| [SetTableLook](./Methods/SetTableLook.md) | boolean | Specifies the conditional formatting components of the referenced table style (if one exists)  which will be applied to the set of table rows with the current table-level property exceptions. A table style  can specify up to six different optional conditional formats, for example, different formatting for the first column,  which then can be applied or omitted from individual table rows in the parent table. The default setting is to apply the row and column band formatting, but not the first row, last row, first  column, or last column formatting. |
| [SetTableTitle](./Methods/SetTableTitle.md) | boolean | Sets the table title (caption). |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | Applies the text settings to the entire contents of the table. |
| [SetVAlign](./Methods/SetVAlign.md) | boolean | Sets the vertical alignment to the table. |
| [SetWidth](./Methods/SetWidth.md) | boolean | Sets the preferred width to the current table. 💡 Tables are created with the [ApiTable#SetWidth](../ApiTable/Methods/SetWidth.md) method properties set by default, which always override the [ApiTablePr#SetWidth](../ApiTablePr/Methods/SetWidth.md) method properties. That is why there is no use to try and apply [ApiTablePr#SetWidth](../ApiTablePr/Methods/SetWidth.md). We recommend you to use the  [ApiTablePr#SetWidth](../ApiTablePr/Methods/SetWidth.md) method instead. |
| [SetWrappingStyle](./Methods/SetWrappingStyle.md) | boolean | Sets the table wrapping style. |
| [Split](./Methods/Split.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Splits the cell into a given number of rows and columns. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiTable object into the JSON object. |
