# GetSmallCaps

Specifies whether the text with the current text properties are displayed capitalized two points smaller than the actual font size.

## Syntax

```javascript
expression.GetSmallCaps();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to find out whether a text is uncapitalized.

```javascript editor-pptx
// How to know whether the text letters are lowercase or not.

// Get the text properties of the run and find whether it is uncapitalized or not.

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
textPr.SetSmallCaps(true);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const smallCaps = textPr.GetSmallCaps();
paragraph.AddText("Property of the small capitalized letters: " + smallCaps);
docContent.Push(paragraph);

```
