# ApiFilter

表示 ApiFilter 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Criteria1 | string \| string[] \| number \| [XlDynamicFilterCriteria](../Enumeration/XlDynamicFilterCriteria.md) \| null | 返回与筛选器关联的第一个条件。 |
| Criteria2 | string \| null | 返回与筛选器关联的第二个条件（与 xlAnd/xlOr 一起使用）。 |
| On | boolean | 指示此列是否应用了任何筛选器。 |
| Operator | [XlAutoFilterOperator](../Enumeration/XlAutoFilterOperator.md) \| null | 返回此列筛选器使用的运算符。 |
| Parent | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) | 返回此筛选列的父筛选器集合。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetCriteria1](./Methods/GetCriteria1.md) | string \| string[] \| number \| [XlDynamicFilterCriteria](../Enumeration/XlDynamicFilterCriteria.md) \| null | 返回此列筛选器关联的第一个条件。 |
| [GetCriteria2](./Methods/GetCriteria2.md) | string \| null | 返回此列筛选器关联的第二个条件。 |
| [GetOn](./Methods/GetOn.md) | boolean | 指示此列是否应用了任何筛选器。当该列存在以下至少一种基础结构时，该属性为 true：- Filters - CustomFiltersObj - DynamicFilter - ColorFilter - Top10 |
| [GetOperator](./Methods/GetOperator.md) | [XlAutoFilterOperator](../Enumeration/XlAutoFilterOperator.md) \| null | 返回此列筛选器使用的运算符。 |
| [GetParent](./Methods/GetParent.md) | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) | 返回此筛选列的父筛选器集合。 |
