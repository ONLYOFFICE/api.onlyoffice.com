# SetOutLine

Sets the text outline to the current text run.

Inherited from [ApiTextPr.SetOutLine](../../ApiTextPr/Methods/SetOutLine.md).

## Syntax

```javascript
expression.SetOutLine(oStroke);
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the text outline. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Apply an outline stroke to text in a presentation.

```javascript editor-pptx
// Add a decorative border or stroke around text characters.

// Create a text run and set its outline using a stroke object.

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
const runStroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
run.SetOutLine(runStroke);
run.AddText("This is a text run with the black text outline.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
