# CreateStroke

Creates a stroke adding shadows to the element.

## Syntax

```javascript
expression.CreateStroke(width, fill, sDash);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The width of the shadow measured in English measure units. |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to create the shadow. |
| sDash | Optional | [DashType](../../Enumeration/DashType.md) | "solid" | The type of line dash. |

## Returns

[ApiStroke](../../ApiStroke/ApiStroke.md)