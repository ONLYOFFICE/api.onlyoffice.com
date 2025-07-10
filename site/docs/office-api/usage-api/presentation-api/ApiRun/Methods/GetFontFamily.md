# GetFontFamily

Returns the font family from the current text properties.\
The method automatically calculates the font from the theme if the font was set via the theme.

## Syntax

```javascript
expression.GetFontFamily();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to find out a text font family.

```javascript editor-pptx
// How to know font name of a text run.

// Get the text properties of the run and display its font family.

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
textPr.SetFontFamily("Arial");
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const fontFamily = textPr.GetFontFamily();
paragraph.AddText("Font family: " + fontFamily);
docContent.Push(paragraph);

```
