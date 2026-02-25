# GroupDrawings

Groups an array of drawings in the current slide master.

## Syntax

```javascript
expression.GroupDrawings(aDrawings);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aDrawings | Required | [DrawingForGroup](../../Enumeration/DrawingForGroup.md)[] |  | An array of drawings to group. |

## Returns

[ApiGroup](../../ApiGroup/ApiGroup.md)

## Example

This example shows how to group drawings on master slide.

```javascript editor-pptx playground
// How to group drawings on master slide.

// Create two shapes and group them. on master slide

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const layout = slide.GetLayout();
const master = layout.GetMaster();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const fill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.CreateRGBColor(111, 255, 61));
const shape1 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, fill1, stroke);
const shape2 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, fill2, stroke);
shape1.SetPosition(608400, 1267200);
shape2.SetPosition(608400, 1400000);
master.AddObject(shape1);
master.AddObject(shape2);
master.GroupDrawings([shape1, shape2]);

```
