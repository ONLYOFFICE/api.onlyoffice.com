# CreatePresetGeometry

Creates a geometry using one of the available preset shapes.

## Syntax

```javascript
expression.CreatePresetGeometry(sPreset);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPreset | Required | [ShapeType](../../Enumeration/ShapeType.md) |  | The preset name. |

## Returns

[ApiGeometry](../../ApiGeometry/ApiGeometry.md) \| null