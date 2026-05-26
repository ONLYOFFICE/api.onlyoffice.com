# GetAllParagraphs

Returns an array of all paragraphs from the current document content.

## Syntax

```javascript
expression.GetAllParagraphs();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

Retrieve all paragraphs from a content container in a document.

```javascript editor-docx
// How do I get every paragraph inside a shape or content area in a document?

// Bold the first paragraph found inside a shape to highlight it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let docContent = shape.GetDocContent();
paragraph = docContent.GetElement(0);
paragraph.AddText("Paragraph 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraph 2");
docContent.Push(paragraph);
let paragraphs = docContent.GetAllParagraphs();
paragraphs[0].SetBold(true);
```
