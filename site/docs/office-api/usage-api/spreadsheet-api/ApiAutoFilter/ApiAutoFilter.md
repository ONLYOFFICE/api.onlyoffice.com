# ApiAutoFilter

Represents the ApiAutoFilter class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| FilterMode | boolean | Returns a value that indicates whether the worksheet has an AutoFilter applied. |
| Filters | [ApiFilter](../ApiFilter/ApiFilter.md)[] | Returns the array of ApiFilter objects that represents the filters applied to the range. |
| Parent | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the ApiWorksheet object that contains the AutoFilter. |
| Range | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange object that represents the AutoFilter range; null if no AutoFilter is defined. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [ApplyFilter](./Methods/ApplyFilter.md) | void | Reapplies the AutoFilter to the worksheet using the existing filter criteria. |
| [GetFilterMode](./Methods/GetFilterMode.md) | boolean | Returns a value that indicates whether the worksheet has an AutoFilter applied. |
| [GetFilters](./Methods/GetFilters.md) | [ApiFilter](../ApiFilter/ApiFilter.md)[] | Returns the array of ApiFilter objects that represents the filters applied to the AutoFilter range. |
| [GetParent](./Methods/GetParent.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the parent ApiWorksheet object for the AutoFilter. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange object that represents the AutoFilter range. |
| [ShowAllData](./Methods/ShowAllData.md) | void | Clears all filters and displays all rows in the AutoFilter range. |
