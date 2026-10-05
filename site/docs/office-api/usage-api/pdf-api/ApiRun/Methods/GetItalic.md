# GetItalic

Gets the italic property from the current text properties.

Inherited from [ApiTextPr.GetItalic](../../ApiTextPr/Methods/GetItalic.md).

## Syntax

```javascript
expression.GetItalic();
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check if text is displayed in italic style in a PDF.

```javascript editor-pdf
// How do I check whether text is styled as italic in a PDF?

// Read the italic formatting status of text content in a PDF.

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
run.SetItalic(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const italic = run.GetItalic();
paragraph.AddText("Italic property: " + italic);
docContent.Push(paragraph);
```
