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

Create a duplicate of a slide layout and apply it to a new slide.

```javascript editor-pptx
// Duplicated layouts inherit all properties from their source.

// Apply the duplicated layout to a newly created slide.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
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
