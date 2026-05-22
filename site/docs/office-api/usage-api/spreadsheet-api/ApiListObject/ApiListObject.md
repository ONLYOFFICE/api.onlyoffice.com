# ApiListObject

Represents the ApiListObject class.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Active | boolean | Indicates whether the active cell is within the table range. |
| AlternativeText | string | Returns or sets the alternative text for the table. |
| AutoFilter | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) \| null | Returns the AutoFilter object for the table, or null. |
| Comment | string | Returns or sets the comment (summary alternative text) for the table. |
| DataBodyRange | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the data rows. |
| DisplayName | string | Returns or sets the display name of the table. |
| HeaderRowRange | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the header row. |
| Name | string | Returns or sets the display name of the table. |
| Parent | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the parent worksheet. |
| Range | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the table. |
| ShowAutoFilter | boolean | Returns or sets whether the AutoFilter is present. |
| ShowAutoFilterDropDown | boolean | Returns or sets whether the AutoFilter dropdown arrows are shown. |
| ShowHeaders | boolean | Returns or sets whether the header row is displayed. |
| ShowTableStyleColumnStripes | boolean | Returns or sets whether column stripes are applied. |
| ShowTableStyleFirstColumn | boolean | Returns or sets whether the first column style is applied. |
| ShowTableStyleLastColumn | boolean | Returns or sets whether the last column style is applied. |
| ShowTableStyleRowStripes | boolean | Returns or sets whether row stripes are applied. |
| ShowTotals | boolean | Returns or sets whether the totals row is displayed. |
| Sort | [ApiSort](../ApiSort/ApiSort.md) | Returns the Sort object associated with the table. |
| SourceType | [XlListObjectSourceType](../Enumeration/XlListObjectSourceType.md) | Returns the data source type of the table. |
| Summary | string | Returns or sets the description of the table. |
| TableStyle | string | Returns or sets the name of the table style. |
| TotalsRowRange | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the totals row; null if not shown. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddListColumn](./Methods/AddListColumn.md) | [ApiListColumn](../ApiListColumn/ApiListColumn.md) \| null | Adds a new column to the table at the specified 1-based position. |
| [AddListRow](./Methods/AddListRow.md) | [ApiListRow](../ApiListRow/ApiListRow.md) \| null | Adds a new data row to the table at the specified 1-based position. |
| [Delete](./Methods/Delete.md) | None | Deletes the ListObject object and clears the cell formatting. |
| [GetActive](./Methods/GetActive.md) | boolean | Returns a Boolean value that indicates whether the ListObject is active, |
| [GetAlternativeText](./Methods/GetAlternativeText.md) | string | Returns the alternative text for the table. |
| [GetAutoFilter](./Methods/GetAutoFilter.md) | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) \| null | Returns the ApiAutoFilter object representing the autofilter applied to the table. |
| [GetComment](./Methods/GetComment.md) | string | Returns the comment (summary alternative text) for the table. |
| [GetDataBodyRange](./Methods/GetDataBodyRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the data rows in the table, excluding the header row and totals row. |
| [GetDisplayName](./Methods/GetDisplayName.md) | string | Returns the display name of the table. |
| [GetHeaderRowRange](./Methods/GetHeaderRowRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the header row of the table. |
| [GetListColumns](./Methods/GetListColumns.md) | [ApiListColumn](../ApiListColumn/ApiListColumn.md)[] | Returns an array of all columns in the table. |
| [GetListRows](./Methods/GetListRows.md) | [ApiListRow](../ApiListRow/ApiListRow.md)[] | Returns an array of all data rows in the table, excluding the header and totals rows. |
| [GetName](./Methods/GetName.md) | string | Returns the display name of the table. |
| [GetParent](./Methods/GetParent.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the ApiWorksheet object that is the parent of the table. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange object that represents the range of the table. |
| [GetShowAutoFilter](./Methods/GetShowAutoFilter.md) | boolean | Returns whether the AutoFilter dropdown buttons are displayed on the header row of the table. |
| [GetShowAutoFilterDropDown](./Methods/GetShowAutoFilterDropDown.md) | boolean | Returns whether the AutoFilter dropdown arrows are displayed on the header row of the table. |
| [GetShowHeaders](./Methods/GetShowHeaders.md) | boolean | Returns whether the header row is displayed for the table. |
| [GetShowTableStyleColumnStripes](./Methods/GetShowTableStyleColumnStripes.md) | boolean | Returns whether banded column formatting is applied to the table. |
| [GetShowTableStyleFirstColumn](./Methods/GetShowTableStyleFirstColumn.md) | boolean | Returns whether the first column formatting is applied to the table. |
| [GetShowTableStyleLastColumn](./Methods/GetShowTableStyleLastColumn.md) | boolean | Returns whether the last column formatting is applied to the table. |
| [GetShowTableStyleRowStripes](./Methods/GetShowTableStyleRowStripes.md) | boolean | Returns whether banded row formatting is applied to the table. |
| [GetShowTotals](./Methods/GetShowTotals.md) | boolean | Returns whether the totals row is displayed for the table. |
| [GetSort](./Methods/GetSort.md) | [ApiSort](../ApiSort/ApiSort.md) | Returns the Sort object for this list object. |
| [GetSourceType](./Methods/GetSourceType.md) | string | Returns the source type of the table. Always returns "xlSrcRange" for range-based tables. |
| [GetSummary](./Methods/GetSummary.md) | string | Returns the summary description (alternative text summary) for the table. |
| [GetTableStyle](./Methods/GetTableStyle.md) | string | Returns the name of the table style applied to the table. |
| [GetTotalsRowRange](./Methods/GetTotalsRowRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the totals row of the table. |
| [Resize](./Methods/Resize.md) | None | Resizes the ListObject to a new range. Cells are not inserted or moved. |
| [SetAlternativeText](./Methods/SetAlternativeText.md) | None | Sets the alternative text for the table. |
| [SetComment](./Methods/SetComment.md) | None | Sets the comment (summary alternative text) for the table. |
| [SetDisplayName](./Methods/SetDisplayName.md) | boolean | Sets the display name of the table. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the table. Equivalent to SetDisplayName. |
| [SetShowAutoFilter](./Methods/SetShowAutoFilter.md) | None | Sets whether the AutoFilter is present on the table. |
| [SetShowAutoFilterDropDown](./Methods/SetShowAutoFilterDropDown.md) | None | Sets whether the AutoFilter dropdown arrows are displayed on the header row of the table. |
| [SetShowHeaders](./Methods/SetShowHeaders.md) | None | Sets whether the header row is displayed for the table. |
| [SetShowTableStyleColumnStripes](./Methods/SetShowTableStyleColumnStripes.md) | None | Sets whether banded column formatting is applied to the table. |
| [SetShowTableStyleFirstColumn](./Methods/SetShowTableStyleFirstColumn.md) | None | Sets whether the first column formatting is applied to the table. |
| [SetShowTableStyleLastColumn](./Methods/SetShowTableStyleLastColumn.md) | None | Sets whether the last column formatting is applied to the table. |
| [SetShowTableStyleRowStripes](./Methods/SetShowTableStyleRowStripes.md) | None | Sets whether banded row formatting is applied to the table. |
| [SetShowTotals](./Methods/SetShowTotals.md) | None | Sets whether the totals row is displayed for the table. |
| [SetSummary](./Methods/SetSummary.md) | None | Sets the summary description (alternative text summary) for the table. |
| [SetTableStyle](./Methods/SetTableStyle.md) | None | Sets the table style by name. |
| [Unlist](./Methods/Unlist.md) | None | Removes the list functionality from the ListObject and converts it to a regular data range. |
