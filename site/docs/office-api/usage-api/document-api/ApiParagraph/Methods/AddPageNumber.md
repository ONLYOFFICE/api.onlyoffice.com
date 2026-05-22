# AddPageNumber

Inserts a number of the current document page into the paragraph.

## Syntax

```javascript
expression.AddPageNumber();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Insert an automatic current-page number field into a paragraph in a document.

```javascript editor-docx
// How do I display the current page number inside a header or footer paragraph in a document?

// Place a dynamic page counter in a paragraph so each printed page shows its own number in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("First page");
paragraph.AddPageBreak();
paragraph.AddText("Second page");
paragraph.AddPageBreak();
paragraph.AddText("Third page");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
```
