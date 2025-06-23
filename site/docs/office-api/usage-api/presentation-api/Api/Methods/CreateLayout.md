# CreateLayout

Creates a new slide layout and adds it to the slide master if it is specified.

## Syntax

```javascript
expression.CreateLayout(oMaster);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oMaster | Optional | [ApiMaster](../../ApiMaster/ApiMaster.md) |  | Parent slide master. |

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md)

## Example

This example shows how to create layout.

```javascript editor-pptx
// How to create and apply a layout for a slide.

// Change a slide layout.

const presentation = Api.GetPresentation();
const slide1 = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = Api.CreateLayout(master);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const placeholder = Api.CreatePlaceholder("picture");
shape.SetPlaceholder(placeholder);

layout.AddObject(shape);
slide1.ApplyLayout(layout);

const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);
slide2.ApplyLayout(layout);

```
