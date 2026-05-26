# GetAllHeadingParagraphs

Returns all heading paragraphs from the current document.

## Syntax

```javascript
expression.GetAllHeadingParagraphs();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

Retrieve all heading paragraphs in a document.

```javascript editor-docx
// How do I collect every heading paragraph present in a document?

// Apply capitalization to the first heading when enforcing a consistent title style.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
let headingParagraphs = doc.GetAllHeadingParagraphs();
headingParagraphs[0].SetCaps(true);
```
