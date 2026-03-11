# LinesToPoints

Converts lines to points (1 line = 12 points).

## Syntax

```javascript
expression.LinesToPoints(lines);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lines | Required | number |  | The number of lines to convert to points. |

## Returns

number

## Example

This example shows how to convert lines to points.

```javascript editor-pptx
const lines = 100;
const points = Api.LinesToPoints(lines);

const rgb = Api.RGB(50, 150, 250);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText(lines + ' lines are equal to ' + points + ' points.');

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
