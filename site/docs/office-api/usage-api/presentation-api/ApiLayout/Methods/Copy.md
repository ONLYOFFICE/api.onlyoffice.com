# Copy

Creates a copy of the specified slide layout object.
Copies without master slide.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## Example

This example creates a copy of slide layout and apply it for other slide.

```javascript editor-pptx
// How to create a copy of a layout.

// Copy a layout of a presentation master.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
layout.AddObject(shape);

const slide = Api.CreateSlide();
presentation.AddSlide(slide);
const copyLayout = layout.Copy();
master.AddLayout(1, copyLayout);
slide.ApplyLayout(copyLayout);

```
