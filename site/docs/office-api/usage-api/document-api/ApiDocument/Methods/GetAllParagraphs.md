# GetAllParagraphs

Returns an array of all paragraphs from the current document content.

Inherited from [ApiDocumentContent.GetAllParagraphs](../../ApiDocumentContent/Methods/GetAllParagraphs.md).

## Syntax

```javascript
expression.GetAllParagraphs();
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

Retrieve all paragraphs in a document.

```javascript editor-docx
// How do I collect every paragraph present in a document?

// Make the first paragraph bold to visually distinguish it from the rest of the content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraph 2");
doc.AddElement(1, paragraph);
let paragraphs = doc.GetAllParagraphs();
paragraphs[0].SetBold(true);
```
