# ApiListRow

表示 ApiListRow 类。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Index | number | 返回行在数据正文中从 1 开始的索引。 |
| Parent | [ApiListObject](../ApiListObject/ApiListObject.md) | 返回父列表对象。 |
| Range | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回跨所有列的整行范围。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | boolean | 从表格中删除行。 |
| [GetIndex](./Methods/GetIndex.md) | number | 返回行在表格数据正文中从 1 开始的索引。 |
| [GetParent](./Methods/GetParent.md) | [ApiListObject](../ApiListObject/ApiListObject.md) | 返回父列表对象。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回跨表格所有列的整行范围。 |
