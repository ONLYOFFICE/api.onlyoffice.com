# GetLastSlide

Returns the last slide of the presentation.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetLastSlide();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md)

## Example

Access the final slide of a presentation in a presentation.

```javascript editor-pptx
// How can I retrieve the last slide in a presentation in a presentation?

// Select the last slide and modify its contents in a presentation.

const presentation = Api.GetPresentation();
const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);

const slide = Api.GetLastSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
```
