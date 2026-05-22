# SetSpacing

Sets the text spacing measured in twentieths of a point.

## Syntax

```javascript
expression.SetSpacing(nSpacing);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSpacing | Required | [twips](../../Enumeration/twips.md) |  | The value of the text spacing measured in twentieths of a point (1/1440 of an inch). |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Adjust the space between text characters in a presentation.

```javascript editor-pptx
// Can I widen or reduce the gap between letters in a presentation?

// Set the character spacing value in twentieths of a point in a presentation.

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
textPr.SetSpacing(80);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the spacing set to 4 points (80 twentieths of a point) using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
