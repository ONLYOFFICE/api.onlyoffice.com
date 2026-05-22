# ApiAutoFilter

表示 ApiAutoFilter 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| FilterMode | boolean | 返回一个值，指示工作表是否已应用自动筛选。 |
| Filters | [ApiFilter](../ApiFilter/ApiFilter.md)[] | 返回表示应用于区域的筛选器的 ApiFilter 对象数组。 |
| Parent | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回包含自动筛选的 ApiWorksheet 对象。 |
| Range | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示自动筛选区域的 ApiRange 对象；如果未定义自动筛选则返回 null。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [ApplyFilter](./Methods/ApplyFilter.md) | void | 使用现有筛选条件重新应用自动筛选到工作表。 |
| [GetFilterMode](./Methods/GetFilterMode.md) | boolean | 返回一个值，指示工作表是否已应用自动筛选。 |
| [GetFilters](./Methods/GetFilters.md) | [ApiFilter](../ApiFilter/ApiFilter.md)[] | 返回表示应用于自动筛选区域的筛选器的 ApiFilter 对象数组。 |
| [GetParent](./Methods/GetParent.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回自动筛选的父 ApiWorksheet 对象。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示自动筛选区域的 ApiRange 对象。 |
| [ShowAllData](./Methods/ShowAllData.md) | void | 清除所有筛选器并显示自动筛选范围中的所有行。 |
