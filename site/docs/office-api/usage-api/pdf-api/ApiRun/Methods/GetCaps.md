# GetCaps

Returns whether the text with the current text properties are capitalized.

Inherited from [ApiTextPr.GetCaps](../../ApiTextPr/Methods/GetCaps.md).

## Syntax

```javascript
expression.GetCaps();
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check if text is in all caps in a PDF.

```javascript editor-pdf
// How do I know if text has uppercase formatting in a PDF?

// Verify the capitalization setting of text in a PDF.

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
run.SetCaps(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const caps = run.GetCaps();
paragraph.AddText("Property of the capitalized letters: " + caps);
docContent.Push(paragraph);
```
