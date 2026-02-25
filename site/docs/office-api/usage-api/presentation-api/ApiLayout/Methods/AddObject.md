# AddObject

Adds an object (image, shape or chart) to the current slide layout.

## Syntax

```javascript
expression.AddObject(oDrawing);
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oDrawing | Required | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | The object which will be added to the current slide layout. |

## Returns

boolean

## Example

This example adds a shape to slide.

```javascript editor-pptx playground
// How to add a shape object to the master layout.

// Add a drawing to the ApiLayout object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
layout.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("This shape was added to the current layout.");

```
