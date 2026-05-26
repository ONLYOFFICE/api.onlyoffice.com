# ApiSortField

Represents the ApiSortField class.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Key | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns or sets the sort key range (the full table column). |
| Order | [SortOrder](../Enumeration/SortOrder.md) | Returns or sets the sort order. |
| Parent | [ApiSortFields](../ApiSortFields/ApiSortFields.md) | Returns the parent SortFields collection. |
| Priority | number | Returns or sets the 1-based sort priority. |
| SortOn | [XlSortOn](../Enumeration/XlSortOn.md) | Returns or sets what value is used as the sort criteria. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | None | Removes this sort field from the collection. |
| [GetKey](./Methods/GetKey.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the sort key range (the full table column). |
| [GetOrder](./Methods/GetOrder.md) | [SortOrder](../Enumeration/SortOrder.md) | Returns the sort order: "xlAscending" or "xlDescending". |
| [GetParent](./Methods/GetParent.md) | [ApiSortFields](../ApiSortFields/ApiSortFields.md) | Returns the parent SortFields collection. |
| [GetPriority](./Methods/GetPriority.md) | number | Returns the 1-based priority of this sort field within the collection. |
| [GetSortOn](./Methods/GetSortOn.md) | [XlSortOn](../Enumeration/XlSortOn.md) | Returns the sort-on type: "xlSortOnValues", "xlSortOnCellColor", "xlSortOnFontColor", "xlSortOnIcon". |
| [GetSortOnValue](./Methods/GetSortOnValue.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | Returns the value (color or null) by which this sort field is sorted. |
| [ModifyKey](./Methods/ModifyKey.md) | None | Changes the sort key column. |
| [SetOrder](./Methods/SetOrder.md) | None | Sets the sort order. |
| [SetPriority](./Methods/SetPriority.md) | None | Sets the 1-based priority of this sort field, repositioning it within the collection. |
| [SetSortOn](./Methods/SetSortOn.md) | None | Sets the sort-on type. |
| [SetSortOnColor](./Methods/SetSortOnColor.md) | None | Sets the color for color-based sorting. |
