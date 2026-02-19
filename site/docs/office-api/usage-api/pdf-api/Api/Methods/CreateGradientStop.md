# CreateGradientStop

Creates a gradient stop used for different types of gradients.

## Syntax

```javascript
expression.CreateGradientStop(color, pos);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color used for the gradient stop. |
| pos | Required | [PositivePercentage](../../Enumeration/PositivePercentage.md) |  | The position of the gradient stop measured in 1000th of percent. |

## Returns

[ApiGradientStop](../../ApiGradientStop/ApiGradientStop.md)