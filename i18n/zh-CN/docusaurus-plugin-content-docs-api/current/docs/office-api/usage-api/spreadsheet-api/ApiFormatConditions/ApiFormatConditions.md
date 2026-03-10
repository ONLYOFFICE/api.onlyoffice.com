# ApiFormatConditions

表示 ApiFormatConditions 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Count | number | 返回集合中条件格式规则的数量。 |
| Parent | [ApiRange](../ApiRange/ApiRange.md) | 返回与当前条件格式集合关联的父区域对象。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Add](./Methods/Add.md) | [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md) \| null | 向集合添加新的格式条件。 |
| [AddAboveAverage](./Methods/AddAboveAverage.md) | [ApiAboveAverage](../ApiAboveAverage/ApiAboveAverage.md) \| null | 向集合添加新的高于平均值条件格式规则。 |
| [AddColorScale](./Methods/AddColorScale.md) | [ApiColorScale](../ApiColorScale/ApiColorScale.md) \| null | 向集合添加新的色阶条件格式规则。 |
| [AddDatabar](./Methods/AddDatabar.md) | [ApiDatabar](../ApiDatabar/ApiDatabar.md) \| null | 向集合添加新的数据条条件格式规则。 |
| [AddIconSetCondition](./Methods/AddIconSetCondition.md) | [ApiIconSetCondition](../ApiIconSetCondition/ApiIconSetCondition.md) \| null | 向集合添加新的图标集条件格式规则。 |
| [AddTop10](./Methods/AddTop10.md) | [ApiTop10](../ApiTop10/ApiTop10.md) \| null | 向集合添加新的前 10 项条件格式规则。 |
| [AddUniqueValues](./Methods/AddUniqueValues.md) | [ApiUniqueValues](../ApiUniqueValues/ApiUniqueValues.md) \| null | 向集合添加新的唯一值条件格式规则。 |
| [Delete](./Methods/Delete.md) | 无 | 从集合中删除所有格式条件。 |
| [GetCount](./Methods/GetCount.md) | number | 返回集合中条件格式规则的数量。 |
| [GetItem](./Methods/GetItem.md) | [ApiFormatCondition](../ApiFormatCondition/ApiFormatCondition.md) \| null | 按索引返回格式条件。 |
| [GetParent](./Methods/GetParent.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回与当前条件格式集合关联的父区域对象。 |
