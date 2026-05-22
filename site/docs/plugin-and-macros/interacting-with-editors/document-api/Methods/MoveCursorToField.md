# MoveCursorToField

Moves the cursor to the beginning or end of a field.

## Syntax

```javascript
expression.MoveCursorToField(fieldId, isBegin);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fieldId | Optional | string |  | Field ID. If it is not specified, the current field is used. |
| isBegin | Optional | boolean | false | Defines whether the cursor is moved to the beginning (**true**) or end (**false**) of the field. |

## Returns

This method doesn't return any data.

## Example

```javascript
Asc.plugin.executeMethod("MoveCursorToField", [fieldId, true]);
```
