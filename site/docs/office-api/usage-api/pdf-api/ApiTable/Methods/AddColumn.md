# AddColumn

Adds a new column to the end of the current table.

## Syntax

```javascript
expression.AddColumn(oCell, isBefore);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | If not specified, a new column will be added to the end of the table. |
| isBefore | Optional | boolean | false | Add a new column before or after the specified cell. If no cell is specified, then this parameter will be ignored. |

## Returns

boolean