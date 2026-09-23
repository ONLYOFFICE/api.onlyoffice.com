# ApiListObject

表示 ApiListObject 类。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Active | boolean | 指示活动单元格是否在表格范围内。 |
| AlternativeText | string | 返回或设置表格的替代文本。 |
| AutoFilter | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) \| null | 返回表格的 AutoFilter 对象，或 null。 |
| Comment | string | 返回或设置表格的批注（摘要替代文本）。 |
| DataBodyRange | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回数据行的范围。 |
| DisplayName | string | 返回或设置表格的显示名称。 |
| HeaderRowRange | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回标题行的范围。 |
| Name | string | 返回或设置表格的显示名称。 |
| Parent | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回父工作表。 |
| Range | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表格的范围。 |
| ShowAutoFilter | boolean | 返回或设置是否存在自动筛选。 |
| ShowAutoFilterDropDown | boolean | 返回或设置是否显示自动筛选下拉箭头。 |
| ShowHeaders | boolean | 返回或设置是否显示标题行。 |
| ShowTableStyleColumnStripes | boolean | 返回或设置是否应用列条带。 |
| ShowTableStyleFirstColumn | boolean | 返回或设置是否应用第一列样式。 |
| ShowTableStyleLastColumn | boolean | 返回或设置是否应用最后一列样式。 |
| ShowTableStyleRowStripes | boolean | 返回或设置是否应用行条带。 |
| ShowTotals | boolean | 返回或设置是否显示汇总行。 |
| Sort | [ApiSort](../ApiSort/ApiSort.md) | 返回与表格关联的 Sort 对象。 |
| SourceType | [XlListObjectSourceType](../Enumeration/XlListObjectSourceType.md) | 返回表格的数据源类型。 |
| Summary | string | 返回或设置表格的描述。 |
| TableStyle | string | 返回或设置表格样式的名称。 |
| TotalsRowRange | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回汇总行的范围；如果未显示则为 null。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddListColumn](./Methods/AddListColumn.md) | [ApiListColumn](../ApiListColumn/ApiListColumn.md) \| null | 在表格中指定的从 1 开始的位置添加新列。 |
| [AddListRow](./Methods/AddListRow.md) | [ApiListRow](../ApiListRow/ApiListRow.md) \| null | 在表格中指定的从 1 开始的位置添加新数据行。 |
| [Delete](./Methods/Delete.md) | 无 | 删除 ListObject 对象并清除单元格格式。 |
| [GetActive](./Methods/GetActive.md) | boolean | 返回一个布尔值，指示 ListObject 是否处于活动状态， |
| [GetAlternativeText](./Methods/GetAlternativeText.md) | string | 返回表格的替代文本。 |
| [GetAutoFilter](./Methods/GetAutoFilter.md) | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) \| null | 返回表示应用于表格的自动筛选的 ApiAutoFilter 对象。 |
| [GetComment](./Methods/GetComment.md) | string | 返回表格的批注（摘要替代文本）。 |
| [GetDataBodyRange](./Methods/GetDataBodyRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表格中数据行的范围，不包括标题行和汇总行。 |
| [GetDisplayName](./Methods/GetDisplayName.md) | string | 返回表格的显示名称。 |
| [GetHeaderRowRange](./Methods/GetHeaderRowRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表格标题行的范围。 |
| [GetListColumns](./Methods/GetListColumns.md) | [ApiListColumn](../ApiListColumn/ApiListColumn.md)[] | 返回表格中所有列的数组。 |
| [GetListRows](./Methods/GetListRows.md) | [ApiListRow](../ApiListRow/ApiListRow.md)[] | 返回表格中所有数据行的数组，不包括标题行和汇总行。 |
| [GetName](./Methods/GetName.md) | string | 返回表格的显示名称。 |
| [GetParent](./Methods/GetParent.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回作为表格父级的 ApiWorksheet 对象。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示表格范围的 ApiRange 对象。 |
| [GetShowAutoFilter](./Methods/GetShowAutoFilter.md) | boolean | 返回表格标题行上是否显示自动筛选下拉按钮。 |
| [GetShowAutoFilterDropDown](./Methods/GetShowAutoFilterDropDown.md) | boolean | 返回表格标题行上是否显示自动筛选下拉箭头。 |
| [GetShowHeaders](./Methods/GetShowHeaders.md) | boolean | 返回表格是否显示标题行。 |
| [GetShowTableStyleColumnStripes](./Methods/GetShowTableStyleColumnStripes.md) | boolean | 返回是否对表格应用了条带列格式。 |
| [GetShowTableStyleFirstColumn](./Methods/GetShowTableStyleFirstColumn.md) | boolean | 返回是否对表格应用了第一列格式。 |
| [GetShowTableStyleLastColumn](./Methods/GetShowTableStyleLastColumn.md) | boolean | 返回是否对表格应用了最后一列格式。 |
| [GetShowTableStyleRowStripes](./Methods/GetShowTableStyleRowStripes.md) | boolean | 返回是否对表格应用了条带行格式。 |
| [GetShowTotals](./Methods/GetShowTotals.md) | boolean | 返回表格是否显示汇总行。 |
| [GetSort](./Methods/GetSort.md) | [ApiSort](../ApiSort/ApiSort.md) | 返回此列表对象的 Sort 对象。 |
| [GetSourceType](./Methods/GetSourceType.md) | string | 返回表格的源类型。对于基于范围的表格，始终返回 “xlSrcRange”。 |
| [GetSummary](./Methods/GetSummary.md) | string | 返回表格的摘要描述（替代文本摘要）。 |
| [GetTableStyle](./Methods/GetTableStyle.md) | string | 返回应用于表格的表格样式名称。 |
| [GetTotalsRowRange](./Methods/GetTotalsRowRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表格汇总行的范围。 |
| [Resize](./Methods/Resize.md) | 无 | 将 ListObject 调整为新范围。不插入或移动单元格。 |
| [SetAlternativeText](./Methods/SetAlternativeText.md) | 无 | 设置表格的替代文本。 |
| [SetComment](./Methods/SetComment.md) | 无 | 设置表格的批注（摘要替代文本）。 |
| [SetDisplayName](./Methods/SetDisplayName.md) | boolean | 设置表格的显示名称。 |
| [SetName](./Methods/SetName.md) | boolean | 设置表格的名称。等同于 SetDisplayName。 |
| [SetShowAutoFilter](./Methods/SetShowAutoFilter.md) | 无 | 设置表格上是否存在自动筛选。 |
| [SetShowAutoFilterDropDown](./Methods/SetShowAutoFilterDropDown.md) | 无 | 设置表格标题行上是否显示自动筛选下拉箭头。 |
| [SetShowHeaders](./Methods/SetShowHeaders.md) | 无 | 设置表格是否显示标题行。 |
| [SetShowTableStyleColumnStripes](./Methods/SetShowTableStyleColumnStripes.md) | 无 | 设置是否对表格应用条带列格式。 |
| [SetShowTableStyleFirstColumn](./Methods/SetShowTableStyleFirstColumn.md) | 无 | 设置是否对表格应用第一列格式。 |
| [SetShowTableStyleLastColumn](./Methods/SetShowTableStyleLastColumn.md) | 无 | 设置是否对表格应用最后一列格式。 |
| [SetShowTableStyleRowStripes](./Methods/SetShowTableStyleRowStripes.md) | 无 | 设置是否对表格应用条带行格式。 |
| [SetShowTotals](./Methods/SetShowTotals.md) | 无 | 设置表格是否显示汇总行。 |
| [SetSummary](./Methods/SetSummary.md) | 无 | 设置表格的摘要描述（替代文本摘要）。 |
| [SetTableStyle](./Methods/SetTableStyle.md) | 无 | 按名称设置表格样式。 |
| [Unlist](./Methods/Unlist.md) | 无 | 从 ListObject 中移除列表功能并将其转换为常规数据范围。 |
