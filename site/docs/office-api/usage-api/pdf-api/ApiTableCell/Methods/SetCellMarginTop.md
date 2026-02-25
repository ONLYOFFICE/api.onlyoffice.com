# SetCellMarginTop

Specifies an amount of space which shall be left between the top extent of the current cell contents and the
top edge border of a specific individual table cell within a table.

## Syntax

```javascript
expression.SetCellMarginTop(nValue);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | If this value is &lt;code&gt;null&lt;/code&gt;, then default table cell top margin shall be used, otherwise override the table cell top margin with specified value for the current cell. |

## Returns

boolean