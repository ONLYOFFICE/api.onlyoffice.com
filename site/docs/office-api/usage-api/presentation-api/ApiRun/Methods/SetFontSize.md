# SetFontSize

Sets the font size to the characters of the current text run.

## Syntax

```javascript
expression.SetFontSize(nSize);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSize | Required | [hps](../../Enumeration/hps.md) |  | The text size value measured in half-points (1/144 of an inch). |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the font size to the characters of the current text run.

```javascript editor-pptx playground
// How to set font size to the text run.

// Create a new text run and change resize its font.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetFontSize(50);
run.AddText("This is a text run with the font size set to 25 points (50 half-points).");
paragraph.AddElement(run);
slide.AddObject(shape);

```
