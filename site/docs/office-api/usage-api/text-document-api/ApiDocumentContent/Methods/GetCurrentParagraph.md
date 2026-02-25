# GetCurrentParagraph

Returns the current paragraph where the cursor is located.

## Syntax

```javascript
expression.GetCurrentParagraph();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example shows how to get the current paragraph from the document content.

```javascript editor-docx playground
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const rgb = Api.CreateRGBColor(100, 150, 200);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);

const docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
const newParagraph = Api.CreateParagraph();
newParagraph.AddText("This is a new paragraph inside the shape.");
docContent.Push(newParagraph);

const currentParagraph = docContent.GetCurrentParagraph();
currentParagraph.AddText("(Current paragraph detected!)");

```
