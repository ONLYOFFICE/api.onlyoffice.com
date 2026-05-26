# ApiSort

表示 ApiSort 类。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Header | string | 返回标题设置（对于 ListObject 始终为 “xlYes”）。 |
| MatchCase | boolean | 返回或设置排序是否区分大小写。 |
| Orientation | [XlSortOrientation](../Enumeration/XlSortOrientation.md) | 返回或设置排序方向。 |
| Parent | [ApiListObject](../ApiListObject/ApiListObject.md) | 返回父列表对象。 |
| Rng | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回排序应用于的数据正文范围。 |
| SortFields | [ApiSortFields](../ApiSortFields/ApiSortFields.md) | 返回排序字段的集合。 |
| SortMethod | [XlSortMethod](../Enumeration/XlSortMethod.md) | 返回或设置中文文本的排序方法。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Apply](./Methods/Apply.md) | 无 | 将当前排序设置应用于表格。 |
| [GetHeader](./Methods/GetHeader.md) | string | 返回标题设置。对于 ListObject 始终为 “xlYes”。 |
| [GetMatchCase](./Methods/GetMatchCase.md) | boolean | 返回排序是否区分大小写。 |
| [GetOrientation](./Methods/GetOrientation.md) | [XlSortOrientation](../Enumeration/XlSortOrientation.md) | 返回排序方向：“xlTopToBottom” 或 “xlLeftToRight”。 |
| [GetParent](./Methods/GetParent.md) | [ApiListObject](../ApiListObject/ApiListObject.md) | 返回父列表对象。 |
| [GetRng](./Methods/GetRng.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回排序应用于的数据正文范围。 |
| [GetSortFields](./Methods/GetSortFields.md) | [ApiSortFields](../ApiSortFields/ApiSortFields.md) | 返回排序字段集合。 |
| [GetSortMethod](./Methods/GetSortMethod.md) | [XlSortMethod](../Enumeration/XlSortMethod.md) | 返回排序方法：“xlPinYin” 或 “xlStroke”。 |
| [SetMatchCase](./Methods/SetMatchCase.md) | 无 | 设置排序是否区分大小写。 |
| [SetOrientation](./Methods/SetOrientation.md) | 无 | 设置排序方向。 |
| [SetSortMethod](./Methods/SetSortMethod.md) | 无 | 设置排序方法。 |
