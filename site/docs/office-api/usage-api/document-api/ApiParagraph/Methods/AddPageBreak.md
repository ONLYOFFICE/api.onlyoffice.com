# AddPageBreak

Adds a page break and starts the next element from the next page.

## Syntax

```javascript
expression.AddPageBreak();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Split paragraph content across two pages with a page break in a document.

```javascript editor-docx
// How do I force the text that follows to start at the top of the next page in a document?

// Divide a long paragraph so that a chosen point becomes the opening line of a new page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text for the first page. After it a page break will be added. Scroll down to the second page to see the text there.");
paragraph.AddPageBreak();
paragraph.AddText("This is the text which starts from the beginning of the second page. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
```
