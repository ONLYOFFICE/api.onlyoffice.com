# AddObject

Adds an object (image, shape or chart) to the current slide master.

## Syntax

```javascript
expression.AddObject(oDrawing);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oDrawing | Required | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | The object which will be added to the current slide master. |

## Returns

boolean

## Example

This example adds an object (image, shape or chart) to the current slide master.

```javascript editor-pptx
// Create a shape and add it to the presentation master.

// Add an element like paragraph, image or chart and etc. to the slide master.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
master.AddObject(shape);

```
