# PointsToPixels

Converts points to pixels.

## Syntax

```javascript
expression.PointsToPixels(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to pixels. |

## Returns

number

## Example

This example shows how to convert points to pixels.

```javascript editor-pdf
const points = 1000;
const pixels = Api.PointsToPixels(points);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(points + ' points are equal to ' + pixels + ' pixels.');

const doc = Api.GetDocument();
const page = doc.GetPage(0);
page.AddObject(shape);

```
