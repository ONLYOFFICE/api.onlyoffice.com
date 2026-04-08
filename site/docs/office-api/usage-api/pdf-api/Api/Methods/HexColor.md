# HexColor

Creates a color from a HEX string.

## Syntax

```javascript
expression.HexColor(hexString);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| hexString | Required | string |  | No description provided. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

This example shows how to create a hex color and use it as a shape fill.

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const color = Api.HexColor('#DECADE');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

```
