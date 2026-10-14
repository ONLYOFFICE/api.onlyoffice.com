# SetColor

Sets the text color to the current text run.

## Syntax

```javascript
expression.SetColor(color);
```

`expression` - A variable that represents an [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) \| null |  | The text color. Pass *null* to remove the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Set the font color through the text properties of a run in a presentation.

```javascript editor-pptx
// How do I change the text color with text properties in a presentation?

// Get the text properties of a run and apply a dark blue color to its characters in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetColor(Api.RGB(31, 56, 100));
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font color set to dark blue using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
