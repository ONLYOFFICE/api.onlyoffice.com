# ApiSortField

表示 ApiSortField 类。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Key | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回或设置排序键范围（完整表格列）。 |
| Order | [SortOrder](../Enumeration/SortOrder.md) | 返回或设置排序顺序。 |
| Parent | [ApiSortFields](../ApiSortFields/ApiSortFields.md) | 返回父 SortFields 集合。 |
| Priority | number | 返回或设置从 1 开始的排序优先级。 |
| SortOn | [XlSortOn](../Enumeration/XlSortOn.md) | 返回或设置用作排序条件的值。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | 无 | 从集合中移除此排序字段。 |
| [GetKey](./Methods/GetKey.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回排序键范围（完整表格列）。 |
| [GetOrder](./Methods/GetOrder.md) | [SortOrder](../Enumeration/SortOrder.md) | 返回排序顺序：“xlAscending” 或 “xlDescending”。 |
| [GetParent](./Methods/GetParent.md) | [ApiSortFields](../ApiSortFields/ApiSortFields.md) | 返回父 SortFields 集合。 |
| [GetPriority](./Methods/GetPriority.md) | number | 返回此排序字段在集合中从 1 开始的优先级。 |
| [GetSortOn](./Methods/GetSortOn.md) | [XlSortOn](../Enumeration/XlSortOn.md) | 返回排序依据类型：“xlSortOnValues”、“xlSortOnCellColor”、“xlSortOnFontColor”、“xlSortOnIcon”。 |
| [GetSortOnValue](./Methods/GetSortOnValue.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 返回此排序字段排序依据的值（颜色或 null）。 |
| [ModifyKey](./Methods/ModifyKey.md) | 无 | 更改排序键列。 |
| [SetOrder](./Methods/SetOrder.md) | 无 | 设置排序顺序。 |
| [SetPriority](./Methods/SetPriority.md) | 无 | 设置此排序字段从 1 开始的优先级，在集合中重新定位。 |
| [SetSortOn](./Methods/SetSortOn.md) | 无 | 设置排序依据类型。 |
| [SetSortOnColor](./Methods/SetSortOnColor.md) | 无 | 设置基于颜色排序的颜色。 |
