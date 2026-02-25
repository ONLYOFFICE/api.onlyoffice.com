# GetJc

Returns the paragraph contents justification.

## Syntax

```javascript
expression.GetJc();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"left" \| "right" \| "both" \| "center" \| undefined

## Example

This example shows how to get the paragraph contents justification.

```javascript editor-pptx playground
// How to set a justification of a paragraph property.

// Change a justification type of a text property from the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
const paraPr = paragraph.GetParaPr();
paraPr.SetJc("center");
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");

const jc = paraPr.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + jc);
docContent.Push(paragraph);

```
