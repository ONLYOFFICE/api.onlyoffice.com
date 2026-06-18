# MoveCursorOutsideField

Moves the cursor outside a field to the position before or after it.

## Syntax

```javascript
expression.MoveCursorOutsideField(fieldId, isBefore);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fieldId | Optional | string |  | Field ID. If it is not specified, the current field is used. |
| isBefore | Optional | boolean | true | Defines whether the cursor is moved before (**true**) or after (**false**) the field. |

## Returns

This method doesn't return any data.

## Example

```javascript
Asc.plugin.executeMethod("MoveCursorOutsideField", [fieldId, false]);
```
