# PointsToInches

Converts points to inches.

## Syntax

```javascript
expression.PointsToInches(pt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | Required | number |  | The number of points to convert to inches. |

## Returns

number

## Example

This example shows how to convert points to inches.

```javascript editor-pptx
const points = 1000;
const inches = Api.PointsToInches(points);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(points + ' points are equal to ' + inches + ' inches.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
