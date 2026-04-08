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
| [ApplyFilter](./Methods/ApplyFilter.md) | void | Reapplies the AutoFilter to the worksheet using the existing filter criteria. This method corresponds to the Excel AutoFilter.ApplyFilter behavior: it does not change the currently defined filter conditions; it only reevaluates which rows should be visible based on the active filters. If no AutoFilter is defined for the worksheet, the method does nothing. |
| [GetFilterMode](./Methods/GetFilterMode.md) | boolean | Returns a value that indicates whether the worksheet has an AutoFilter applied. |
| [GetFilters](./Methods/GetFilters.md) | [ApiFilter](../ApiFilter/ApiFilter.md)[] | Returns the array of ApiFilter objects that represents the filters applied to the AutoFilter range. |
| [GetParent](./Methods/GetParent.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns the parent ApiWorksheet object for the AutoFilter. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange object that represents the AutoFilter range. |
| [ShowAllData](./Methods/ShowAllData.md) | void | Clears all filters and displays all rows in the AutoFilter range. This method corresponds to the Excel AutoFilter.ShowAllData behavior: it removes any active filtering from the worksheet while preserving the AutoFilter drop-downs on the header row. If no AutoFilter is defined for the worksheet, the method does nothing. |
