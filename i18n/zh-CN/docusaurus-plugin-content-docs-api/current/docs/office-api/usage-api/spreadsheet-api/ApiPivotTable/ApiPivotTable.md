# ApiPivotTable

表示 ApiPivotTable 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| ColumnFields | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回当前在数据透视表中显示为列字段的数组。 |
| ColumnGrand | boolean | 返回或设置数据透视表列的 **总计** 设置。 |
| ColumnRange | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示数据透视表报表中列区域的 Range 对象。 |
| DataBodyRange | [ApiRange](../ApiRange/ApiRange.md) | 返回表示数据透视表中值区域的 Range 对象。 |
| DataFields | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回当前在数据透视表中显示为数据字段的数组。 |
| Description | string | 返回或设置数据透视表描述。 |
| DisplayFieldCaptions | boolean | 返回或设置指定是否显示行和列字段标题的设置。 |
| GrandTotalName | string | 返回或设置在指定数据透视表报表的总计列或行标题中显示的文本字符串标签。 |
| HiddenFields | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回表示数据透视表中所有隐藏字段的数组。 |
| LayoutBlankLine | boolean | 设置指定是否在数据透视表中每个项目后插入空白行的设置。 |
| LayoutSubtotals | boolean | 设置指定是否在数据透视表中显示分类汇总的设置。 |
| Name | string | 返回或设置数据透视表的名称。 |
| PageFields | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回当前在数据透视表中显示为页字段的数组。 |
| Parent | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回当前数据透视表的父对象。 |
| PivotFields | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回数据透视表中的所有透视字段。 |
| RepeatAllLabels | boolean | 指定是否为指定数据透视表中的所有透视字段重复项目标签。 |
| RowAxisLayout | object | 设置指定数据透视表项目的显示方式 - 表格格式或大纲格式。 |
| RowFields | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回当前在数据透视表中显示为行字段的数组。 |
| RowGrand | boolean | 返回或设置数据透视表行的 **总计** 设置。 |
| RowRange | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示数据透视表报表中行区域的 Range 对象。 |
| ShowTableStyleColumnHeaders | boolean | 返回或设置指定是否使用特殊格式突出显示数据透视表列标题的设置。 |
| ShowTableStyleColumnStripes | boolean | 返回或设置指定是否为数据透视表启用奇偶列背景颜色交替的设置。 |
| ShowTableStyleRowHeaders | boolean | 返回或设置指定是否使用特殊格式突出显示数据透视表行标题的设置。 |
| ShowTableStyleRowStripes | boolean | 返回或设置指定是否为数据透视表启用奇偶行背景颜色交替的设置。 |
| Source | [ApiRange](../ApiRange/ApiRange.md) | 返回或设置数据透视表的源区域。 |
| StyleName | string | 返回或设置数据透视表样式名称。 |
| SubtotalLocation | number | 设置布局分类汇总位置。 |
| TableRange1 | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示整个数据透视表报表的 Range 对象，但不包括页字段。 |
| TableRange2 | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示整个数据透视表报表的 Range 对象，包括页字段。 |
| Title | string | 返回或设置数据透视表标题。 |
| VisibleFields | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回表示数据透视表中所有可见字段的数组。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddDataField](./Methods/AddDataField.md) | [ApiPivotDataField](../ApiPivotDataField/ApiPivotDataField.md) | 向数据透视表报表添加数据字段。 |
| [AddFields](./Methods/AddFields.md) | 无 | 向数据透视表报表添加行、列和页字段。 |
| [ClearAllFilters](./Methods/ClearAllFilters.md) | 无 | 删除当前应用于数据透视表的所有筛选器。 |
| [ClearTable](./Methods/ClearTable.md) | 无 | 清除数据透视表。 |
| [GetColumnFields](./Methods/GetColumnFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回当前在数据透视表中显示为列字段的集合。 |
| [GetColumnGrand](./Methods/GetColumnGrand.md) | boolean | 返回数据透视表列的 **总计** 设置。 |
| [GetColumnRange](./Methods/GetColumnRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示数据透视表报表中列区域的 Range 对象。 |
| [GetData](./Methods/GetData.md) | number \| null | 返回数据透视表中数据字段的值。 |
| [GetDataBodyRange](./Methods/GetDataBodyRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示数据透视表中值区域的 Range 对象。 |
| [GetDataFields](./Methods/GetDataFields.md) | [ApiPivotDataField](../ApiPivotDataField/ApiPivotDataField.md)[] \| [ApiPivotDataField](../ApiPivotDataField/ApiPivotDataField.md) \| null | 返回表示单个数据透视表数据字段或所有可见数据字段集合的集合。 |
| [GetDescription](./Methods/GetDescription.md) | string | 返回数据透视表描述。 |
| [GetDisplayFieldCaptions](./Methods/GetDisplayFieldCaptions.md) | boolean | 返回指定是否显示行和列字段标题的设置。 |
| [GetDisplayFieldsInReportFilterArea](./Methods/GetDisplayFieldsInReportFilterArea.md) | [PivotTableFilterAreaInfo](../Enumeration/PivotTableFilterAreaInfo.md) | 返回报表筛选区域设置中的数据透视表显示字段。 |
| [GetGrandTotalName](./Methods/GetGrandTotalName.md) | string | 返回在指定数据透视表报表的总计列或行标题中显示的文本字符串标签。 |
| [GetHiddenFields](./Methods/GetHiddenFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回表示数据透视表中所有隐藏字段的数组。 |
| [GetName](./Methods/GetName.md) | string | 返回数据透视表名称。 |
| [GetPageFields](./Methods/GetPageFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回表示单个数据透视表页字段或所有可见页字段集合的集合。 |
| [GetParent](./Methods/GetParent.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回当前数据透视表的父对象。 |
| [GetPivotData](./Methods/GetPivotData.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回包含数据透视表报表中数据项信息的 Range 对象。 |
| [GetPivotFields](./Methods/GetPivotFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] \| [ApiPivotField](../ApiPivotField/ApiPivotField.md) \| [ApiPivotDataField](../ApiPivotDataField/ApiPivotDataField.md) \| null | 返回表示单个数据透视表字段或数据透视表报表中可见和隐藏字段集合的集合。 |
| [GetRowFields](./Methods/GetRowFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回当前在数据透视表中显示为行字段的集合。 |
| [GetRowGrand](./Methods/GetRowGrand.md) | boolean | 返回数据透视表行的 **总计** 设置。 |
| [GetRowRange](./Methods/GetRowRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示数据透视表报表中行区域的 Range 对象。 |
| [GetSource](./Methods/GetSource.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回数据透视表的源区域。 |
| [GetStyleName](./Methods/GetStyleName.md) | string | 返回数据透视表样式名称。 |
| [GetTableRange1](./Methods/GetTableRange1.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示整个数据透视表报表的 Range 对象，但不包括页字段。 |
| [GetTableRange2](./Methods/GetTableRange2.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示整个数据透视表报表的 Range 对象，包括页字段。 |
| [GetTableStyleColumnHeaders](./Methods/GetTableStyleColumnHeaders.md) | boolean | 返回指定是否使用特殊格式突出显示数据透视表列标题的设置。 |
| [GetTableStyleColumnStripes](./Methods/GetTableStyleColumnStripes.md) | boolean | 返回指定是否为数据透视表启用奇偶列背景颜色交替的设置。 |
| [GetTableStyleRowHeaders](./Methods/GetTableStyleRowHeaders.md) | boolean | 返回指定是否使用特殊格式突出显示数据透视表行标题的设置。 |
| [GetTableStyleRowStripes](./Methods/GetTableStyleRowStripes.md) | boolean | 返回指定是否为数据透视表启用奇偶行背景颜色交替的设置。 |
| [GetTitle](./Methods/GetTitle.md) | string | 返回数据透视表标题。 |
| [GetVisibleFields](./Methods/GetVisibleFields.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md)[] | 返回表示数据透视表中所有可见字段的数组。 |
| [MoveField](./Methods/MoveField.md) | 无 | 将指定字段从一个类别移动到另一个类别。 |
| [PivotValueCell](./Methods/PivotValueCell.md) | number \| string \| null | 返回数据透视表单元格的值。 |
| [RefreshTable](./Methods/RefreshTable.md) | 无 | 从源数据刷新数据透视表报表。 |
| [RemoveField](./Methods/RemoveField.md) | 无 | 从所有数据透视表类别中删除指定字段。 |
| [Select](./Methods/Select.md) | 无 | 选择当前数据透视表。 |
| [SetColumnGrand](./Methods/SetColumnGrand.md) | 无 | 为数据透视表列设置 **总计** 设置。 |
| [SetDescription](./Methods/SetDescription.md) | 无 | 设置数据透视表描述。 |
| [SetDisplayFieldCaptions](./Methods/SetDisplayFieldCaptions.md) | 无 | 设置是否显示行和列的字段标题。 |
| [SetDisplayFieldsInReportFilterArea](./Methods/SetDisplayFieldsInReportFilterArea.md) | 无 | 设置报表筛选区域设置中的数据透视表显示字段。 |
| [SetGrandTotalName](./Methods/SetGrandTotalName.md) | 无 | 设置在指定数据透视表报表的总计列或行标题中显示的文本字符串标签。 |
| [SetLayoutBlankLine](./Methods/SetLayoutBlankLine.md) | 无 | 设置指定是否在每个项目后插入空白行的设置。 |
| [SetLayoutSubtotals](./Methods/SetLayoutSubtotals.md) | 无 | 设置指定是否显示分类汇总的设置。 |
| [SetName](./Methods/SetName.md) | 无 | 设置数据透视表名称。 |
| [SetRepeatAllLabels](./Methods/SetRepeatAllLabels.md) | 无 | 指定是否为指定数据透视表中的所有透视字段重复项目标签。 |
| [SetRowAxisLayout](./Methods/SetRowAxisLayout.md) | 无 | 设置指定数据透视表项目的显示方式 - 表格格式或大纲格式。 |
| [SetRowGrand](./Methods/SetRowGrand.md) | 无 | 为数据透视表行设置 **总计** 设置。 |
| [SetSource](./Methods/SetSource.md) | 无 | 设置数据透视表的源区域。 |
| [SetStyleName](./Methods/SetStyleName.md) | 无 | 设置数据透视表样式名称。 |
| [SetSubtotalLocation](./Methods/SetSubtotalLocation.md) | 无 | 设置数据透视表中的布局分类汇总位置。 |
| [SetTableStyleColumnHeaders](./Methods/SetTableStyleColumnHeaders.md) | 无 | 设置指定是否使用特殊格式突出显示数据透视表列标题的设置。 |
| [SetTableStyleColumnStripes](./Methods/SetTableStyleColumnStripes.md) | 无 | 设置指定是否为数据透视表启用奇偶列背景颜色交替的设置。 |
| [SetTableStyleRowHeaders](./Methods/SetTableStyleRowHeaders.md) | 无 | 设置指定是否使用特殊格式突出显示数据透视表行标题的设置。 |
| [SetTableStyleRowStripes](./Methods/SetTableStyleRowStripes.md) | 无 | 设置指定是否为数据透视表启用奇偶行背景颜色交替的设置。 |
| [SetTitle](./Methods/SetTitle.md) | 无 | 设置数据透视表标题。 |
| [ShowDetails](./Methods/ShowDetails.md) | boolean | 显示数据透视表单元格的详细信息。 |
| [Update](./Methods/Update.md) | 无 | 更新当前数据透视表。 |
