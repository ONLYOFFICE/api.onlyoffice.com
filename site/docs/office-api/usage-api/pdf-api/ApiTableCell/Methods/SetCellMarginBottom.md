# SetCellMarginBottom

Specifies an amount of space which shall be left between the bottom extent of the cell contents and the border
of a specific individual table cell within a table.

## Syntax

```javascript
expression.SetCellMarginBottom(nValue);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | If this value is &lt;code&gt;null&lt;/code&gt;, then default table cell bottom margin shall be used, otherwise override the table cell bottom margin with specified value for the current cell. |

## Returns

boolean