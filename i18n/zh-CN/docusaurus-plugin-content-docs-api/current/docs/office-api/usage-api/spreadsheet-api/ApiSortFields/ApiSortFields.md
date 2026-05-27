# ApiSortFields

表示 ApiSortFields 类。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Count | number | 返回集合中排序字段的数量。 |
| Parent | [ApiSort](../ApiSort/ApiSort.md) | 返回父 Sort 对象。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Add](./Methods/Add.md) | [ApiSortField](../ApiSortField/ApiSortField.md) \| null | 向集合添加排序字段。 |
| [Add2](./Methods/Add2.md) | [ApiSortField](../ApiSortField/ApiSortField.md) \| null | 添加支持链接数据类型（股票、地理）子字段的排序字段。 |
| [Clear](./Methods/Clear.md) | 无 | 从集合中移除所有排序字段。 |
| [GetCount](./Methods/GetCount.md) | number | 返回排序字段的数量。 |
| [GetParent](./Methods/GetParent.md) | [ApiSort](../ApiSort/ApiSort.md) | 返回父 Sort 对象。 |
| [Item](./Methods/Item.md) | [ApiSortField](../ApiSortField/ApiSortField.md) \| null | 返回给定从 1 开始的索引处的排序字段。 |
