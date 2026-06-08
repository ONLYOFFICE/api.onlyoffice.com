# ApiListColumn

Represents the ApiListColumn class.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| DataBodyRange | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the data body range of the column, excluding header and totals rows. |
| Index | number | Returns the 1-based index of the column within the table. |
| Name | string | Returns or sets the name of the column. |
| Parent | [ApiListObject](../ApiListObject/ApiListObject.md) | Returns the parent list object. |
| Range | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the full range of the column, including header and totals rows. |
| Total | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the totals row cell range for the column. |
| TotalsCalculation | [XlTotalsCalculation](../Enumeration/XlTotalsCalculation.md) | Returns or sets the totals row calculation type. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Delete](./Methods/Delete.md) | boolean | Deletes the column from the table. |
| [GetDataBodyRange](./Methods/GetDataBodyRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the data body of the column, excluding the header and totals rows. |
| [GetIndex](./Methods/GetIndex.md) | number | Returns the 1-based index of the column within the table. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the table column. |
| [GetParent](./Methods/GetParent.md) | [ApiListObject](../ApiListObject/ApiListObject.md) | Returns the parent list object. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the entire column, including the header and totals rows. |
| [GetTotal](./Methods/GetTotal.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the range of the totals row cell for the column. |
| [GetTotalsCalculation](./Methods/GetTotalsCalculation.md) | [XlTotalsCalculation](../Enumeration/XlTotalsCalculation.md) | Returns the totals calculation type for the column. |
| [SetName](./Methods/SetName.md) | None | Sets the name of the table column. |
| [SetTotalsCalculation](./Methods/SetTotalsCalculation.md) | None | Sets the totals calculation type for the column. |
