# SetTextFill

Sets the text fill to the current text run.

Inherited from [ApiTextPr.SetTextFill](../../ApiTextPr/Methods/SetTextFill.md).

## Syntax

```javascript
expression.SetTextFill(oApiFill);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Apply a text fill color to a text run in a presentation.

```javascript editor-pptx
// Set the font color using solid fills, gradients, or patterns.

// Create a text run and apply a color fill to its content.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
const runTextFill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
run.SetTextFill(runTextFill);
run.AddText("This is a text run with the black text.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
