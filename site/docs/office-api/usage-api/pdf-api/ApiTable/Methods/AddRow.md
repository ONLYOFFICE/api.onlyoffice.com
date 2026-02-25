# AddRow

Adds a new row to the current table.

## Syntax

```javascript
expression.AddRow(oCell, isBefore);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | If not specified, a new row will be added to the end of the table. |
| isBefore | Optional | boolean | false | Adds a new row before or after the specified cell. If no cell is specified, then this parameter will be ignored. |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)