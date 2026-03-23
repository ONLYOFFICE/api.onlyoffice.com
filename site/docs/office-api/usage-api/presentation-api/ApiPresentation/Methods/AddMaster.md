# AddMaster

Adds the slide master to the presentation slide masters collection.

## Syntax

```javascript
expression.AddMaster(nPos, oApiMaster);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | number | ApiPresentation.GetMastersCount() | No description provided. |
| oApiMaster | Required | [ApiMaster](../../ApiMaster/ApiMaster.md) |  | The slide master to be added. |

## Returns

boolean

## Example

This example adds the slide master to the presentation slide masters collection.

```javascript editor-pptx
// How to add a presentation master.

// Create a shape and set its placeholder type to "chart".

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = Api.CreateMaster();
const countBefore = presentation.GetMastersCount();
presentation.AddMaster(countBefore, master);
const countAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of masters before adding new master: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after adding new master: " + countAfter);
slide.AddObject(shape);

```
