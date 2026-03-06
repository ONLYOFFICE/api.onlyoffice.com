# PixelsToPoints

Converts pixels to points.

## Syntax

```javascript
expression.PixelsToPoints(px);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | Required | number |  | The number of pixels to convert to points. |

## Returns

number

## Example

This example shows how to convert pixels to points.

```javascript editor-pdf
const pixels = 100;
const points = Api.PixelsToPoints(pixels);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(pixels + ' pixels are equal to ' + points + ' points.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);

```
