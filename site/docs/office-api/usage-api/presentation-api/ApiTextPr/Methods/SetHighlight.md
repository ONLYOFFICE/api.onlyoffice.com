# SetHighlight

Specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph.

## Syntax

```javascript
expression.SetHighlight(sColor);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | Required | [highlightColor](../../Enumeration/highlightColor.md) |  | Available highlight color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Add background highlighting color to text in a presentation.

```javascript editor-pptx
// What highlight colors work best for text in a presentation?

// Set a background color that fills behind the text characters in a presentation.

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
textPr.SetHighlight("lightGray");
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the text highlighted with light gray color using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
