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

Access a slide by its position in a presentation.

```javascript editor-pptx
// How do I find a specific slide using its index in a presentation?

// Retrieve the first slide from the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
```
