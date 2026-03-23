# GetParent

Returns the drawing parent object.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md) \| [ApiLayout](../../ApiLayout/ApiLayout.md) \| [ApiMaster](../../ApiMaster/ApiMaster.md) \| null

## Example

This example shows how to get parent.

```javascript editor-pptx
// How to get a parent of a slide shape.

// Get a slide shape's parent object.

const presentation = Api.GetPresentation();

const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

slide.RemoveAllObjects();
slide.AddObject(shape);
const parent = shape.GetParent();
const sType = parent.GetClassType();
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type of the shape parent = " + sType);

```
