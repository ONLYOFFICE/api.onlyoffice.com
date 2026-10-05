# GetFontSize

Gets the font size from the current text properties.

Inherited from [ApiTextPr.GetFontSize](../../ApiTextPr/Methods/GetFontSize.md).

## Syntax

```javascript
expression.GetFontSize();
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[hps](../../Enumeration/hps.md)

## Example

Get the font size of text in a PDF.

```javascript editor-pdf
// How do I find out how large the text is in a PDF?

// Read the font size setting of text in a PDF.

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
run.SetFontSize(60);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const fontSize = run.GetFontSize();
paragraph.AddText("Font size: " + fontSize);
docContent.Push(paragraph);
```
