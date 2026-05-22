# AddPagesCount

Inserts a number of pages in the current document into the paragraph.

## Syntax

```javascript
expression.AddPagesCount();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Insert a total page count field into a paragraph in a document.

```javascript editor-docx
// How do I show the total number of pages inside a header or footer paragraph in a document?

// Combine a page-number field with a page-count field to produce a "Page X of Y" indicator in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First page");
paragraph.AddPageBreak();
paragraph.AddText("Second page");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page ");
paragraph.AddPageNumber();
paragraph.AddText(" of ");
paragraph.AddPagesCount();
```
