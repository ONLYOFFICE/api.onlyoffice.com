# Copy

Creates a paragraph copy. Ingnore comments, footnote references, complex fields.

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Duplicate a paragraph in a PDF.

```javascript editor-pdf
// How do I make a copy of a paragraph in a PDF?

// Create a duplicate and add it to a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
docContent.RemoveAllElements();

const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is just a sample text that was copied.");
docContent.Push(paragraph);

const copyParagraph = paragraph.Copy();
docContent.Push(copyParagraph);
page.AddObject(shape);
```
