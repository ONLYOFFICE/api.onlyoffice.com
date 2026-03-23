# GetAllDrawings

Returns an array with all the drawing objects from the slide layout.

## Syntax

```javascript
expression.GetAllDrawings();
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Drawing](../../Enumeration/Drawing.md)[]

## Example

This example shows how to get an array with all the drawing objects from the slide layout.

```javascript editor-pptx
// How to get all drawings from the layout of presentation.

// Get all drawings from the presentation as an array.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);

layout.AddObject(drawing);
const drawings = layout.GetAllDrawings();
const placeholder = Api.CreatePlaceholder("picture");
drawings[0].SetPlaceholder(placeholder);

```
