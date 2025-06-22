# GetLayout

Returns a layout of the specified slide master by its position.

## Syntax

```javascript
expression.GetLayout(nPos);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | Layout position. |

## Returns

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## Example

This example shows how to get a layout of the specified slide master by its position.

```javascript editor-pptx
// How to get a master layout knowing its index.

// Get a layout object from the master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const layout = Api.CreateLayout();
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

layout.AddObject(shape);
master.AddLayout(0, layout);
slide.ApplyLayout(master.GetLayout(0));

```
