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

Create a color with transparency using red, green, blue, and alpha values in a PDF.

```javascript editor-pdf
// How can I set a color that includes transparency in a PDF?

// Apply a semi-transparent color to a shape fill in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const color = Api.RGBA(110, 160, 180, 127);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);
```
