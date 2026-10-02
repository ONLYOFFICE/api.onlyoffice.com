# GetFontFamily

Returns the font family from the current text properties.

The method automatically calculates the font from the theme if the font was set via the theme.

Inherited from [ApiTextPr.GetFontFamily](../../ApiTextPr/Methods/GetFontFamily.md).

## Syntax

```javascript
expression.GetFontFamily();
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the font name of text in a PDF.

```javascript editor-pdf
// How do I find out what font is used for text in a PDF?

// Read the font family setting of text in a PDF.

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

run.SetFontFamily("Arial");
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const fontFamily = run.GetFontFamily();
paragraph.AddText("Font family: " + fontFamily);
docContent.Push(paragraph);
```
