# PointsToCentimeters

Converts points to centimeters.

## Syntax

```javascript
expression.PointsToCentimeters(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to centimeters. |

## Returns

number

## Example

Convert points to centimeters in a presentation.

```javascript editor-pptx
// Use the Api object to convert measurement units.

// Display the conversion result in a shape on the slide.

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(points + ' points are equal to ' + centimeters + ' centimeters.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
