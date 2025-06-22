# GetUnderline

Gets the underline property from the current text properties.

## Syntax

```javascript
expression.GetUnderline();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to find out whether a text is underlined.

```javascript editor-pptx
// How to know whether a text is underlined or not.

// Get the text properties of the run and find whether it is underlined or not.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
const textPr = run.GetTextPr();
textPr.SetUnderline(true);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const underline = textPr.GetUnderline();
paragraph.AddText("Underline property: " + underline);
docContent.Push(paragraph);

```
