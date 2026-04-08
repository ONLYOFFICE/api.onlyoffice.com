# ApiFilter

Represents the ApiFilter class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Criteria1 | string \| string[] \| number \| [XlDynamicFilterCriteria](../Enumeration/XlDynamicFilterCriteria.md) \| null | Returns the first criteria associated with the filter. |
| Criteria2 | string \| null | Returns the second criteria associated with the filter (used with xlAnd/xlOr). |
| On | boolean | Indicates whether any filter is applied to this column. |
| Operator | [XlAutoFilterOperator](../Enumeration/XlAutoFilterOperator.md) \| null | Returns the operator used for the filter on this column. |
| Parent | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) | Returns the parent filters collection for this filter column. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetCriteria1](./Methods/GetCriteria1.md) | string \| string[] \| number \| [XlDynamicFilterCriteria](../Enumeration/XlDynamicFilterCriteria.md) \| null | Returns the first criteria associated with the filter for this column. |
| [GetCriteria2](./Methods/GetCriteria2.md) | string \| null | Returns the second criteria associated with the filter for this column. |
| [GetOn](./Methods/GetOn.md) | boolean | Indicates whether any filter is applied on this column. The property is true when at least one of the following underlying structures is present for the column: - Filters - CustomFiltersObj - DynamicFilter - ColorFilter - Top10 |
| [GetOperator](./Methods/GetOperator.md) | [XlAutoFilterOperator](../Enumeration/XlAutoFilterOperator.md) \| null | Returns the operator used for the filter on this column. |
| [GetParent](./Methods/GetParent.md) | [ApiAutoFilter](../ApiAutoFilter/ApiAutoFilter.md) | Returns the parent filters collection for this filter column. |
