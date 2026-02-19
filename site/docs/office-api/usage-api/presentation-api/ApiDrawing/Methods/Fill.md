# Fill

Sets the fill formatting properties to the current graphic object.

## Syntax

```javascript
expression.Fill(oFill);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the graphic object. |

## Returns

boolean

## Example

This example sets the fill formatting properties to the current graphic object.

```javascript editor-pptx
// How to color a drawing with a radiant fill.

// Change the background color of the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const gradientFill = Api.CreateRadialGradientFill([gs1, gs2]);
drawing.Fill(gradientFill);

```
