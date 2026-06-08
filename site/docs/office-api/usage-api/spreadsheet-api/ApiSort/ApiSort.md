# ApiSort

Represents the ApiSort class.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Header | string | Returns the header setting (always "xlYes" for a ListObject). |
| MatchCase | boolean | Returns or sets whether the sort is case-sensitive. |
| Orientation | [XlSortOrientation](../Enumeration/XlSortOrientation.md) | Returns or sets the sort orientation. |
| Parent | [ApiListObject](../ApiListObject/ApiListObject.md) | Returns the parent list object. |
| Rng | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the data body range that the sort applies to. |
| SortFields | [ApiSortFields](../ApiSortFields/ApiSortFields.md) | Returns the collection of sort fields. |
| SortMethod | [XlSortMethod](../Enumeration/XlSortMethod.md) | Returns or sets the sort method for Chinese text. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Apply](./Methods/Apply.md) | None | Applies the current sort settings to the table. |
| [GetHeader](./Methods/GetHeader.md) | string | Returns the header setting. Always "xlYes" for a ListObject. |
| [GetMatchCase](./Methods/GetMatchCase.md) | boolean | Returns whether the sort is case-sensitive. |
| [GetOrientation](./Methods/GetOrientation.md) | [XlSortOrientation](../Enumeration/XlSortOrientation.md) | Returns the sort orientation: "xlTopToBottom" or "xlLeftToRight". |
| [GetParent](./Methods/GetParent.md) | [ApiListObject](../ApiListObject/ApiListObject.md) | Returns the parent list object. |
| [GetRng](./Methods/GetRng.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the data body range that the sort applies to. |
| [GetSortFields](./Methods/GetSortFields.md) | [ApiSortFields](../ApiSortFields/ApiSortFields.md) | Returns the sort fields collection. |
| [GetSortMethod](./Methods/GetSortMethod.md) | [XlSortMethod](../Enumeration/XlSortMethod.md) | Returns the sort method: "xlPinYin" or "xlStroke". |
| [SetMatchCase](./Methods/SetMatchCase.md) | None | Sets whether the sort is case-sensitive. |
| [SetOrientation](./Methods/SetOrientation.md) | None | Sets the sort orientation. |
| [SetSortMethod](./Methods/SetSortMethod.md) | None | Sets the sort method. |
