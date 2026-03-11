# GetSpacing

Gets the text spacing from the current text properties measured in twentieths of a point.

## Syntax

```javascript
expression.GetSpacing();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example

This example shows how to find out a text is spacing size.

```javascript editor-pptx
// How to know a text spacing.

// Get the text properties of the run and display its spacing size.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
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
textPr.SetSpacing(80);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const spacing = textPr.GetSpacing();
paragraph.AddText("Text spacing: " + spacing);
docContent.Push(paragraph);

```
