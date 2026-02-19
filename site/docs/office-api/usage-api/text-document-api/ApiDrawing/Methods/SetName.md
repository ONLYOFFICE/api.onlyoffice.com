# SetName

Sets the name of the current drawing.\
If another drawing with the same name already exists, that drawing's name will be reset to a default auto-generated name.

## Syntax

```javascript
expression.SetName(name);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name which will be set to the current drawing. |

## Returns

boolean