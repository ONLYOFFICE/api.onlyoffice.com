# SetType

Sets the condition value type for the icon criterion.

## Syntax

```javascript
expression.SetType(type);
```

`expression` - A variable that represents a [ApiIconCriterion](../ApiIconCriterion.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) |  | The condition value type. Only "xlConditionValueNumber", "xlConditionValuePercent", "xlConditionValuePercentile", or "xlConditionValueFormula" are supported. |

## Returns

This method doesn't return any data.