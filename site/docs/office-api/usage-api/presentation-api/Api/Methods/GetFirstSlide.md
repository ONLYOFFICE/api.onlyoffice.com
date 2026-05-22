# GetFirstSlide

Returns the first slide of the presentation.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetFirstSlide();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md)

## Example

Access the first slide of a presentation in a presentation.

```javascript editor-pptx
// How can I retrieve the opening slide in a presentation in a presentation?

// Select the first slide and add a shape to it in a presentation.

const slide = Api.GetFirstSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
```
