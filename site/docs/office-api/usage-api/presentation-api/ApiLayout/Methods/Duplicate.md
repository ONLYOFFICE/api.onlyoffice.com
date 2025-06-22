# Duplicate

Creates a duplicate of the specified slide layout object, adds the new slide layout to the slide layout collection.

## Syntax

```javascript
expression.Duplicate(nPos);
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | ApiMaster.GetLayoutsCount() | Position where the new slide layout will be added. |

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## Example

This example makes a duplicate of slide layout and applies it to another slide.

```javascript editor-pptx
// How to create a duplicate of a slide layout.

// Apply the layout of one slide to another by duplicating it.

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
const duplicateLayout = layout.Duplicate(1);
slide.ApplyLayout(duplicateLayout);

```
