# GetTransparent

Returns the transparency of the fill.

## Syntax

```javascript
expression.GetTransparent();
```

`expression` - A variable that represents an [ApiFill](../ApiFill.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read back the transparency of a shape's fill on a slide in a presentation.

```javascript editor-pptx
// Find out how transparent a shape's fill is in a presentation.

// Check the transparency that was applied to a shape's fill on a slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const appliedFill = shape.GetFill();
paragraph.AddText("Fill transparency: " + appliedFill.GetTransparent());
```
