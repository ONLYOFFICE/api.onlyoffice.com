# SetTransparent

Sets the transparency of the fill.

## Syntax

```javascript
expression.SetTransparent(transparent);
```

`expression` - A variable that represents an [ApiFill](../ApiFill.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| transparent | Required | number |  | The transparency value, from 0 (fully opaque) to 1 (fully transparent). |

## Returns

boolean

## Example

Make a shape's fill semi-transparent on a slide in a presentation.

```javascript editor-pptx
// Adjust how see-through a shape's fill is in a presentation.

// Fade a shape's solid fill on a slide so the background shows through in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
```
