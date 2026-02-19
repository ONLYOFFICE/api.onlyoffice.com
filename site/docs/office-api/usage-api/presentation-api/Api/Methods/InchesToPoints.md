# InchesToPoints

Converts inches to points.

## Syntax

```javascript
expression.InchesToPoints(inches);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| inches | Required | number |  | The number of inches to convert to points. |

## Returns

number

## Example

This example shows how to convert inches to points.

```javascript editor-pptx
const inches = 100;
const points = Api.InchesToPoints(inches);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(inches + ' inches are equal to ' + points + ' points.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
