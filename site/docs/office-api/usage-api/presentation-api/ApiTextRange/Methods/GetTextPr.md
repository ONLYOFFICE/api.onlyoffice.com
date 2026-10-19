# GetTextPr

Returns the merged text properties of the entire range.

## Syntax

```javascript
expression.GetTextPr();
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Get the text properties object from a text range in a presentation shape.

```javascript editor-pptx
// Useful for inspecting the current formatting before changing it.

// Get the ApiTextPr object from the range and use it to read formatting.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetBold(true);
textPr.SetFontSize(28);
run.AddText("Formatted text in a shape.");
docContent.GetElement(0).AddElement(run);
slide.AddObject(shape);

const range = shape.GetTextRange();
const rangePr = range.GetTextPr();

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
shape2.GetDocContent().GetElement(0).AddText("GetTextPr class: " + rangePr.GetClassType());
slide.AddObject(shape2);
```
