# GetUnderline

Gets the underline property from the current text properties.

Inherited from [ApiTextPr.GetUnderline](../../ApiTextPr/Methods/GetUnderline.md).

## Syntax

```javascript
expression.GetUnderline();
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check if text has an underline decoration in a PDF.

```javascript editor-pdf
// How do I determine if text is underlined in a PDF?

// Verify the underline status of text in a PDF.

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
run.SetUnderline(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const underline = run.GetUnderline();
paragraph.AddText("Underline property: " + underline);
docContent.Push(paragraph);
```
