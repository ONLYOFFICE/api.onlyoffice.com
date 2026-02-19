# CreatePatternFill

Creates a pattern fill to apply to the object using the selected pattern as the object background.

## Syntax

```javascript
expression.CreatePatternFill(patternType, bgColor, fgColor);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| patternType | Required | [PatternType](../../Enumeration/PatternType.md) |  | The pattern type used for the fill selected from one of the available pattern types. |
| bgColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The background color used for the pattern creation. |
| fgColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The foreground color used for the pattern creation. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)