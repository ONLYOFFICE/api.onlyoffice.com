# GetSmallCaps

Returns whether the text with the current text properties are displayed capitalized two points smaller than the actual font size.

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

Check if text is displayed in small capitals in a PDF.

```javascript editor-pdf
// How do I determine if text has small capital formatting in a PDF?

// Retrieve and verify the small capitals setting applied to text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
const textPr = run.GetTextPr();
textPr.SetSmallCaps(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const smallCaps = textPr.GetSmallCaps();
paragraph.AddText("Property of the small capitalized letters: " + smallCaps);
docContent.Push(paragraph);
```
