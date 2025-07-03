# AddLayout

Adds a layout to the specified slide master.

## Syntax

```javascript
expression.AddLayout(nPos, oLayout);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | ApiMaster.GetLayoutsCount() | Position where a layout will be added. |
| oLayout | Required | [ApiLayout](../../ApiLayout/ApiLayout.md) |  | A layout to be added. |

## Returns

boolean

## Example

This example adds a layout to the specified slide master.

```javascript editor-pptx
// Create a layout and add it to the slide master.

// Add layout to the slide master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = master.GetLayoutsCount();
const layout = Api.CreateLayout();
master.AddLayout(0, layout);
const countAfter = master.GetLayoutsCount();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of layouts before adding new layout: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of layouts after adding new layout: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
