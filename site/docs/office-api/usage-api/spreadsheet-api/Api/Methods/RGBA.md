# RGBA

Creates an RGBA color from red, green, blue and alpha components.

## Syntax

```javascript
expression.RGBA(r, g, b, a);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red component (0-255). |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green component (0-255). |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue component (0-255). |
| a | Required | [byte](../../Enumeration/byte.md) |  | Alpha component (0-255). |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

This example shows how to create an RGBA color and use it as a shape fill.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const color = Api.RGBA(110, 160, 180, 127);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

```
