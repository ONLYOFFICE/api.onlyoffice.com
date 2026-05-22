# PointsToPicas

Converts points to picas (1 pica = 12 points).

## Syntax

```javascript
expression.PointsToPicas(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to picas. |

## Returns

number

## Example

Convert points to picas and display the result in a presentation.

```javascript editor-pptx
// Use Api.PointsToPicas to convert measurement units.

// Display the converted value in a shape text.

const points = 42;
const picas = Api.PointsToPicas(points);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(points + ' points are equal to ' + picas + ' picas.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
