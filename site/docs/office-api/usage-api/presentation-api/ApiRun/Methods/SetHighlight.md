# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current run.

## Syntax

```javascript
expression.SetHighlight(sColor);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | Required | [highlightColor](../../Enumeration/highlightColor.md) |  | Available highlight color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies a highlighting color which is applied as a background to the contents of the run.

```javascript editor-pptx
// How to set highlight to the text run.

// Create a new text run and highlight it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is a text run with the text highlighted with light gray color.");
paragraph.AddElement(run);
run.SetHighlight("lightGray");
slide.AddObject(shape);

```
