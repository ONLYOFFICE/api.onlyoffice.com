# ApiPivotDataField

表示 ApiPivotDataField 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Caption | string | 返回或设置表示数据字段标签文本的值。 |
| Function | [DataConsolidateFunctionType](../Enumeration/DataConsolidateFunctionType.md) | 返回或设置数据字段的函数。 |
| Index | number | 返回数据字段的索引。 |
| Name | string | 返回或设置表示对象名称的值。 |
| NumberFormat | string \| null | 返回或设置表示对象格式代码的值。 |
| Orientation | [PivotFieldOrientationType](../Enumeration/PivotFieldOrientationType.md) | 返回表示数据字段在指定数据透视表报表中位置的数据字段方向值。 |
| PivotField | [ApiPivotField](../ApiPivotField/ApiPivotField.md) | 返回创建数据字段的透视字段。 |
| Position | number | 返回或设置表示数据字段在类别中位置的值。 |
| Value | string | 返回或设置表示数据透视表报表中指定数据字段名称的值。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AutoSort](./Methods/AutoSort.md) | 无 | 为数据透视表报表建立自动字段排序规则。 |
| [ClearAllFilters](./Methods/ClearAllFilters.md) | 无 | 删除当前应用于透视字段的所有筛选器。 |
| [ClearLabelFilters](./Methods/ClearLabelFilters.md) | 无 | 从透视筛选器集合中删除所有标签筛选器或所有日期筛选器。 |
| [ClearManualFilters](./Methods/ClearManualFilters.md) | 无 | 从透视筛选器集合中删除所有手动筛选器。 |
| [ClearValueFilters](./Methods/ClearValueFilters.md) | 无 | 从透视筛选器集合中删除所有值筛选器。 |
| [GetCaption](./Methods/GetCaption.md) | string | 返回表示数据字段标签文本的值。 |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | string \| number | 返回为页字段显示的当前页面（仅对页字段有效）。 |
| [GetDragToColumn](./Methods/GetDragToColumn.md) | boolean | 返回指定是否可以将指定字段拖动到列位置的设置。 |
| [GetDragToData](./Methods/GetDragToData.md) | boolean | 返回指定是否可以将指定字段拖动到数据位置的设置。 |
| [GetDragToPage](./Methods/GetDragToPage.md) | boolean | 返回指定是否可以将指定字段拖动到页位置的设置。 |
| [GetDragToRow](./Methods/GetDragToRow.md) | boolean | 返回指定是否可以将指定字段拖动到行位置的设置。 |
| [GetFunction](./Methods/GetFunction.md) | [DataConsolidateFunctionType](../Enumeration/DataConsolidateFunctionType.md) | 返回在数据字段中执行的函数。 |
| [GetIndex](./Methods/GetIndex.md) | number | 返回数据字段的索引。 |
| [GetLayoutBlankLine](./Methods/GetLayoutBlankLine.md) | boolean | 返回指定是否在每个项目后插入空白行的设置。 |
| [GetLayoutCompactRow](./Methods/GetLayoutCompactRow.md) | boolean | 返回指定数据透视表字段是否紧凑的设置。 |
| [GetLayoutForm](./Methods/GetLayoutForm.md) | [PivotLayoutType](../Enumeration/PivotLayoutType.md) | 返回指定数据透视表项目的显示方式 - 表格格式或大纲格式。 |
| [GetLayoutPageBreak](./Methods/GetLayoutPageBreak.md) | boolean | 返回指定是否在每个字段后插入分页符的设置。 |
| [GetLayoutSubtotalLocation](./Methods/GetLayoutSubtotalLocation.md) | [LayoutSubtotalLocationType](../Enumeration/LayoutSubtotalLocationType.md) | 返回布局分类汇总位置。 |
| [GetLayoutSubtotals](./Methods/GetLayoutSubtotals.md) | boolean | 返回指定是否显示分类汇总的设置。 |
| [GetName](./Methods/GetName.md) | string | 返回表示对象名称的值。 |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string \| null | 返回表示对象格式代码的值。 |
| [GetOrientation](./Methods/GetOrientation.md) | [PivotFieldOrientationType](../Enumeration/PivotFieldOrientationType.md) | 返回表示数据字段在指定数据透视表报表中位置的数据字段方向值。 |
| [GetParent](./Methods/GetParent.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | 返回当前字段的父对象。 |
| [GetPivotField](./Methods/GetPivotField.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md) | 返回创建数据字段的透视字段。 |
| [GetPivotFilters](./Methods/GetPivotFilters.md) | [ApiPivotFilters](../ApiPivotFilters/ApiPivotFilters.md) | 返回应用于指定透视字段的透视筛选器集合。 |
| [GetPivotItems](./Methods/GetPivotItems.md) | [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md)[] \| [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md) \| null | 返回表示单个数据透视表项（ApiPivotItem 对象）或指定字段中所有可见和隐藏项集合（ApiPivotItem 对象数组）的对象。 |
| [GetPosition](./Methods/GetPosition.md) | number | 返回表示数据字段在类别中位置的值。 |
| [GetRepeatLabels](./Methods/GetRepeatLabels.md) | boolean | 返回指定是否在每行重复项目标签的设置。 |
| [GetShowAllItems](./Methods/GetShowAllItems.md) | boolean | 返回指定是否显示无数据项的设置。 |
| [GetShowingInAxis](./Methods/GetShowingInAxis.md) | boolean | 返回指定数据透视表字段当前是否在数据透视表中可见的设置。 |
| [GetSourceName](./Methods/GetSourceName.md) | string | 返回数据透视表字段的源名称。 |
| [GetSubtotalName](./Methods/GetSubtotalName.md) | string | 返回在指定数据透视表报表的分类汇总列或行标题中显示的文本标签。 |
| [GetSubtotals](./Methods/GetSubtotals.md) | [PivotFieldSubtotals](../Enumeration/PivotFieldSubtotals.md) | 返回表示所有分类汇总的对象。 |
| [GetTable](./Methods/GetTable.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | 返回表示当前字段的数据透视表的 ApiPivotTable 对象。 |
| [GetValue](./Methods/GetValue.md) | string | 返回表示数据透视表报表中指定数据字段名称的值。 |
| [Move](./Methods/Move.md) | 无 | 在类别内移动当前数据字段。 |
| [Remove](./Methods/Remove.md) | 无 | 从类别中删除当前数据字段。 |
| [SetCaption](./Methods/SetCaption.md) | 无 | 设置表示数据字段标签文本的值。 |
| [SetDragToColumn](./Methods/SetDragToColumn.md) | 无 | 设置指定是否可以将指定字段拖动到列位置的设置。 |
| [SetDragToData](./Methods/SetDragToData.md) | 无 | 设置指定是否可以将指定字段拖动到数据位置的设置。 |
| [SetDragToPage](./Methods/SetDragToPage.md) | 无 | 设置指定是否可以将指定字段拖动到页位置的设置。 |
| [SetDragToRow](./Methods/SetDragToRow.md) | 无 | 设置指定是否可以将指定字段拖动到行位置的设置。 |
| [SetFunction](./Methods/SetFunction.md) | 无 | 为当前数据字段设置函数。 |
| [SetLayoutBlankLine](./Methods/SetLayoutBlankLine.md) | 无 | 设置指定是否在每个项目后插入空白行的设置。 |
| [SetLayoutCompactRow](./Methods/SetLayoutCompactRow.md) | 无 | 设置指定数据透视表字段是否紧凑的设置。 |
| [SetLayoutForm](./Methods/SetLayoutForm.md) | 无 | 设置指定数据透视表项目的显示方式 - 表格格式或大纲格式。 |
| [SetLayoutPageBreak](./Methods/SetLayoutPageBreak.md) | 无 | 设置指定是否在每个字段后插入分页符的设置。 |
| [SetLayoutSubtotalLocation](./Methods/SetLayoutSubtotalLocation.md) | 无 | 设置布局分类汇总位置。 |
| [SetLayoutSubtotals](./Methods/SetLayoutSubtotals.md) | 无 | 设置指定是否显示分类汇总的设置。 |
| [SetName](./Methods/SetName.md) | 无 | 设置表示对象名称的值。 |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | 无 | 设置表示对象格式代码的值。 |
| [SetOrientation](./Methods/SetOrientation.md) | 无 | 设置表示字段在指定数据透视表报表中位置的透视字段方向值。 |
| [SetPosition](./Methods/SetPosition.md) | 无 | 设置表示数据字段在类别中位置的值。 |
| [SetRepeatLabels](./Methods/SetRepeatLabels.md) | 无 | 设置指定是否在每行重复项目标签的设置。 |
| [SetShowAllItems](./Methods/SetShowAllItems.md) | 无 | 设置指定是否显示无数据项的设置。 |
| [SetSubtotalName](./Methods/SetSubtotalName.md) | 无 | 设置在指定数据透视表报表的分类汇总列或行标题中显示的文本标签。 |
| [SetSubtotals](./Methods/SetSubtotals.md) | 无 | 设置表示所有分类汇总的对象。 |
| [SetValue](./Methods/SetValue.md) | 无 | 设置表示数据透视表报表中指定数据字段名称的值。 |
