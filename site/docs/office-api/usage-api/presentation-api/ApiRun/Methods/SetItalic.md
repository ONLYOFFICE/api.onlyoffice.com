# SetItalic

Sets the italic property to the text character.

## Syntax

```javascript
expression.SetItalic(isItalic);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies that the contents of the current run are displayed italicized. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the italic property to the text character.

```javascript editor-pptx
// How to make text run italic.

// Create a new text run and make its style italic.

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
run.SetItalic(true);
run.AddText("This is a text run with the font set to italicized letters.");
paragraph.AddElement(run);
slide.AddObject(shape);

```
