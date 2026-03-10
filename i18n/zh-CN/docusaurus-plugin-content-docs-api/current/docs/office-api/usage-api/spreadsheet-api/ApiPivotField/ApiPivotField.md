# ApiPivotField

表示 ApiPivotField 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| AutoSortField | string | 返回用于对指定字段进行排序的字段名称。 |
| AutoSortOrder | [SortOrder](../Enumeration/SortOrder.md) | 返回指定字段的排序顺序。 |
| Caption | string | 返回或设置表示透视字段标签文本的值。 |
| CurrentPage | string \| number | 返回为页字段显示的当前页面（仅对页字段有效）。 |
| DragToColumn | boolean | 返回或设置指定是否可以将指定字段拖动到列位置的设置。 |
| DragToData | boolean | 返回或设置指定是否可以将指定字段拖动到数据位置的设置。 |
| DragToPage | boolean | 返回或设置指定是否可以将指定字段拖动到页位置的设置。 |
| DragToRow | boolean | 返回或设置指定是否可以将指定字段拖动到行位置的设置。 |
| Formula | number | 返回或设置表示对象公式的值。 |
| Index | number | 返回数据透视表字段的索引。 |
| LayoutBlankLine | boolean | 返回并设置指定是否在每个项目后插入空白行的设置。 |
| LayoutCompactRow | boolean | 返回或设置指定数据透视表字段是否紧凑的设置。 |
| LayoutForm | number | 返回或设置指定数据透视表项目的显示方式 - 表格格式或大纲格式。 |
| LayoutPageBreak | boolean | 返回或设置指定是否在每个字段后插入分页符的设置。 |
| LayoutSubtotalLocation | number | 返回或设置布局分类汇总位置。 |
| LayoutSubtotals | boolean | 返回或设置指定是否显示分类汇总的设置。 |
| Name | string | 返回或设置表示对象名称的值。 |
| NumberFormat | string \| null | 返回或设置表示对象格式代码的值。 |
| Orientation | number | 返回或设置表示字段在指定数据透视表报表中位置的透视字段方向值。 |
| Parent | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | 返回当前字段的父对象。 |
| PivotFilters | [ApiPivotFilters](../ApiPivotFilters/ApiPivotFilters.md) | 返回表示指定字段筛选器的对象。 |
| PivotItems | [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md) \| [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md)[] | 返回表示单个数据透视表项（ApiPivotItem 对象）或指定字段中所有可见和隐藏项集合（ApiPivotItem 对象数组）的对象。 |
| Position | number | 返回或设置表示字段在其方向（行、列、页、数据）中所有字段中的位置（第一、第二、第三等）的值。 |
| RepeatLabels | boolean | 返回或设置指定是否在每行重复项目标签的设置。 |
| ShowAllItems | boolean | 返回或设置指定是否显示无数据项的设置。 |
| ShowingInAxis | boolean | 返回指定数据透视表字段当前是否在数据透视表中可见的设置。 |
| SourceName | string | 返回数据透视表字段的源名称。 |
| SubtotalName | string | 返回或设置在指定数据透视表报表的分类汇总列或行标题中显示的文本标签。 |
| Subtotals | object | 返回或设置分类汇总。 |
| Table | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | 返回表示当前字段的数据透视表的 ApiPivotTable 对象。 |
| Value | string | 返回或设置表示数据透视表报表中指定字段名称的值。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AutoSort](./Methods/AutoSort.md) | 无 | 为数据透视表报表建立自动字段排序规则。 |
| [ClearAllFilters](./Methods/ClearAllFilters.md) | 无 | 删除当前应用于透视字段的所有筛选器。 |
| [ClearLabelFilters](./Methods/ClearLabelFilters.md) | 无 | 从透视筛选器集合中删除所有标签筛选器或所有日期筛选器。 |
| [ClearManualFilters](./Methods/ClearManualFilters.md) | 无 | 从透视筛选器集合中删除所有手动筛选器。 |
| [ClearValueFilters](./Methods/ClearValueFilters.md) | 无 | 从透视筛选器集合中删除所有值筛选器。 |
| [GetCaption](./Methods/GetCaption.md) | string | 返回表示透视字段标签文本的值。 |
| [GetCurrentPage](./Methods/GetCurrentPage.md) | string \| number | 返回为页字段显示的当前页面（仅对页字段有效）。 |
| [GetDragToColumn](./Methods/GetDragToColumn.md) | boolean | 返回指定是否可以将指定字段拖动到列位置的设置。 |
| [GetDragToData](./Methods/GetDragToData.md) | boolean | 返回指定是否可以将指定字段拖动到数据位置的设置。 |
| [GetDragToPage](./Methods/GetDragToPage.md) | boolean | 返回指定是否可以将指定字段拖动到页位置的设置。 |
| [GetDragToRow](./Methods/GetDragToRow.md) | boolean | 返回指定是否可以将指定字段拖动到行位置的设置。 |
| [GetIndex](./Methods/GetIndex.md) | number | 返回数据透视表字段的索引。 |
| [GetLayoutBlankLine](./Methods/GetLayoutBlankLine.md) | boolean | 返回指定是否在每个项目后插入空白行的设置。 |
| [GetLayoutCompactRow](./Methods/GetLayoutCompactRow.md) | boolean | 返回指定数据透视表字段是否紧凑的设置。 |
| [GetLayoutForm](./Methods/GetLayoutForm.md) | [PivotLayoutType](../Enumeration/PivotLayoutType.md) | 返回指定数据透视表项目的显示方式 - 表格格式或大纲格式。 |
| [GetLayoutPageBreak](./Methods/GetLayoutPageBreak.md) | boolean | 返回指定是否在每个字段后插入分页符的设置。 |
| [GetLayoutSubtotalLocation](./Methods/GetLayoutSubtotalLocation.md) | [LayoutSubtotalLocationType](../Enumeration/LayoutSubtotalLocationType.md) | 返回布局分类汇总位置。 |
| [GetLayoutSubtotals](./Methods/GetLayoutSubtotals.md) | boolean | 返回指定是否显示分类汇总的设置。 |
| [GetName](./Methods/GetName.md) | string | 返回表示对象名称的值。 |
| [GetOrientation](./Methods/GetOrientation.md) | [PivotFieldOrientationType](../Enumeration/PivotFieldOrientationType.md) | 返回表示字段在指定数据透视表报表中位置的透视字段方向值。 |
| [GetParent](./Methods/GetParent.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | 返回当前字段的父对象。 |
| [GetPivotFilters](./Methods/GetPivotFilters.md) | [ApiPivotFilters](../ApiPivotFilters/ApiPivotFilters.md) | 返回应用于指定透视字段的透视筛选器集合。 |
| [GetPivotItems](./Methods/GetPivotItems.md) | [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md)[] \| [ApiPivotItem](../ApiPivotItem/ApiPivotItem.md) \| null | 返回表示单个数据透视表项（ApiPivotItem 对象）或指定字段中所有可见和隐藏项集合（ApiPivotItem 对象数组）的对象。 |
| [GetPosition](./Methods/GetPosition.md) | number | 返回表示字段在其方向（行、列、页、数据）中所有字段中的位置（第一、第二、第三等）的值。 |
| [GetRepeatLabels](./Methods/GetRepeatLabels.md) | boolean | 返回指定是否在每行重复项目标签的设置。 |
| [GetShowAllItems](./Methods/GetShowAllItems.md) | boolean | 返回指定是否显示无数据项的设置。 |
| [GetShowingInAxis](./Methods/GetShowingInAxis.md) | boolean | 返回指定数据透视表字段当前是否在数据透视表中可见的设置。 |
| [GetSourceName](./Methods/GetSourceName.md) | string | 返回数据透视表字段的源名称。 |
| [GetSubtotalName](./Methods/GetSubtotalName.md) | string | 返回在指定数据透视表报表的分类汇总列或行标题中显示的文本标签。 |
| [GetSubtotals](./Methods/GetSubtotals.md) | [PivotFieldSubtotals](../Enumeration/PivotFieldSubtotals.md) | 返回表示所有分类汇总的对象。 |
| [GetTable](./Methods/GetTable.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | 返回表示当前字段的数据透视表的 ApiPivotTable 对象。 |
| [GetValue](./Methods/GetValue.md) | string | 返回表示数据透视表报表中指定字段名称的值。 |
| [Move](./Methods/Move.md) | 无 | 在类别内移动当前透视字段。 |
| [Remove](./Methods/Remove.md) | 无 | 从数据透视表中删除当前透视字段。 |
| [SetCaption](./Methods/SetCaption.md) | 无 | 设置表示透视字段标签文本的值。 |
| [SetDragToColumn](./Methods/SetDragToColumn.md) | 无 | 设置指定是否可以将指定字段拖动到列位置的设置。 |
| [SetDragToData](./Methods/SetDragToData.md) | 无 | 设置指定是否可以将指定字段拖动到数据位置的设置。 |
| [SetDragToPage](./Methods/SetDragToPage.md) | 无 | 设置指定是否可以将指定字段拖动到页位置的设置。 |
| [SetDragToRow](./Methods/SetDragToRow.md) | 无 | 设置指定是否可以将指定字段拖动到行位置的设置。 |
| [SetLayoutBlankLine](./Methods/SetLayoutBlankLine.md) | 无 | 设置指定是否在每个项目后插入空白行的设置。 |
| [SetLayoutCompactRow](./Methods/SetLayoutCompactRow.md) | 无 | 设置指定数据透视表字段是否紧凑的设置。 |
| [SetLayoutForm](./Methods/SetLayoutForm.md) | 无 | 设置指定数据透视表项目的显示方式 - 表格格式或大纲格式。 |
| [SetLayoutPageBreak](./Methods/SetLayoutPageBreak.md) | 无 | 设置指定是否在每个字段后插入分页符的设置。 |
| [SetLayoutSubtotalLocation](./Methods/SetLayoutSubtotalLocation.md) | 无 | 设置布局分类汇总位置。 |
| [SetLayoutSubtotals](./Methods/SetLayoutSubtotals.md) | 无 | 设置指定是否显示分类汇总的设置。 |
| [SetName](./Methods/SetName.md) | 无 | 设置表示对象名称的值。 |
| [SetOrientation](./Methods/SetOrientation.md) | 无 | 设置表示字段在指定数据透视表报表中位置的透视字段方向值。 |
| [SetPosition](./Methods/SetPosition.md) | 无 | 设置表示字段在其方向（行、列、页、数据）中所有字段中的位置（第一、第二、第三等）的值。 |
| [SetRepeatLabels](./Methods/SetRepeatLabels.md) | 无 | 设置指定是否在每行重复项目标签的设置。 |
| [SetShowAllItems](./Methods/SetShowAllItems.md) | 无 | 设置指定是否显示无数据项的设置。 |
| [SetSubtotalName](./Methods/SetSubtotalName.md) | 无 | 设置在指定数据透视表报表的分类汇总列或行标题中显示的文本标签。 |
| [SetSubtotals](./Methods/SetSubtotals.md) | 无 | 设置表示所有分类汇总的对象。 |
| [SetValue](./Methods/SetValue.md) | 无 | 设置表示数据透视表报表中指定字段名称的值。 |
