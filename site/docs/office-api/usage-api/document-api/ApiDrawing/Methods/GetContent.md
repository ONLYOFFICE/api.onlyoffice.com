# GetContent

Returns the drawing inner contents where a paragraph or text runs can be inserted if it exists.

## Syntax

```javascript
expression.GetContent();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

Get content of a drawing in a document.

```javascript editor-docx
// How do I get the content in a document?

// Get the content using a drawing object object in a document.

const doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const drawing = Api.CreateShape("rect", 100 * 36000, 20 * 36000, fill, stroke);
firstParagraph.AddDrawing(drawing);

const docContent = drawing.GetContent();

const shapeParagraph = Api.CreateParagraph();
shapeParagraph.AddText('This is the text added to the paragraph inside the drawing using the GetContent method.');
docContent.AddElement(0, shapeParagraph);
```
