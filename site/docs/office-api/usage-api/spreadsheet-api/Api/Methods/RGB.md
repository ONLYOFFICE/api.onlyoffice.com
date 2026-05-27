# RGB

Creates an RGB color from red, green and blue components.

## Syntax

```javascript
expression.RGB(r, g, b);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red component (0-255). |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green component (0-255). |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue component (0-255). |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Create a color from red, green, and blue values and apply it as a shape fill in a spreadsheet.

```javascript editor-xlsx
// How do I define a custom color using RGB components in a spreadsheet?

// Fill a shape with a color built from specific red, green, and blue intensities in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const color = Api.RGB(186, 218, 85);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
worksheet.AddShape("rect", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
```
