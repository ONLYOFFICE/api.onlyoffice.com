# AddGuide

Adds a guide (formula) to the current geometry.

## Syntax

```javascript
expression.AddGuide(sName, sFormula, sX, sY, sZ);
```

`expression` - A variable that represents a [ApiGeometry](../ApiGeometry.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The guide name. |
| sFormula | Required | [GeometryFormulaType](../../Enumeration/GeometryFormulaType.md) |  | The formula type. |
| sX | Required | string |  | The X parameter. |
| sY | Required | string |  | The Y parameter. |
| sZ | Required | string |  | The Z parameter. |

## Returns

boolean