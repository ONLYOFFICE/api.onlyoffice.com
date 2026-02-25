# MergeCells

Merges an array of cells. If merge is successful, it will return merged cell, otherwise "null".
-**Warning**: The number of cells in any row and the number of rows in the current table may be changed.

## Syntax

```javascript
expression.MergeCells(aCells);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aCells | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md)[] |  | The array of cells. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)