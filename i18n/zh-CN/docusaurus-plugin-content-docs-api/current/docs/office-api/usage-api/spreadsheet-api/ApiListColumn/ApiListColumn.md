# ApiListColumn

表示 ApiListColumn 类。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| DataBodyRange | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回列的数据正文范围，不包括标题行和汇总行。 |
| Index | number | 返回列在表格内的从 1 开始的索引。 |
| Name | string | 返回或设置列的名称。 |
| Parent | [ApiListObject](../ApiListObject/ApiListObject.md) | 返回父列表对象。 |
| Range | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回列的完整范围，包括标题行和汇总行。 |
| Total | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回列的汇总行单元格范围。 |
| TotalsCalculation | [XlTotalsCalculation](../Enumeration/XlTotalsCalculation.md) | 返回或设置汇总行的计算类型。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | boolean | 从表格中删除列。 |
| [GetDataBodyRange](./Methods/GetDataBodyRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回列的数据正文范围，不包括标题行和汇总行。 |
| [GetIndex](./Methods/GetIndex.md) | number | 返回列在表格内的从 1 开始的索引。 |
| [GetName](./Methods/GetName.md) | string | 返回表格列的名称。 |
| [GetParent](./Methods/GetParent.md) | [ApiListObject](../ApiListObject/ApiListObject.md) | 返回父列表对象。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回整个列的范围，包括标题行和汇总行。 |
| [GetTotal](./Methods/GetTotal.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回列的汇总行单元格范围。 |
| [GetTotalsCalculation](./Methods/GetTotalsCalculation.md) | [XlTotalsCalculation](../Enumeration/XlTotalsCalculation.md) | 返回列的汇总计算类型。 |
| [SetName](./Methods/SetName.md) | 无 | 设置表格列的名称。 |
| [SetTotalsCalculation](./Methods/SetTotalsCalculation.md) | 无 | 设置列的汇总计算类型。 |
