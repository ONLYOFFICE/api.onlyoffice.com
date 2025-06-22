# GetSlideByIndex

Returns a slide by its position in the presentation.

## Syntax

```javascript
expression.GetSlideByIndex(nIndex);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | The slide number (position) in the presentation. |

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md)

## Example

This example shows how to get a slide by its position in the presentation.

```javascript editor-pptx
// How to find a slide from the presentation using its index.

// Get slide from the presentation by its index.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

```
