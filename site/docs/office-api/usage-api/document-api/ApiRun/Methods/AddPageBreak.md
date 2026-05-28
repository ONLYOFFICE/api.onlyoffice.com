# AddPageBreak

Adds a page break and starts the next element from a new page.

## Syntax

```javascript
expression.AddPageBreak();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Insert a page break inside a text run to continue text on the next page in a document.

```javascript editor-docx
// How do I make part of a text run appear on the following page in a document?

// Force the remaining text in a run to start at the top of a new page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the text for the first page. After it a page break will be added. Scroll down to the second page to see the text there.");
run.AddPageBreak();
run.AddText("This is the text which starts from the beginning of the second page. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
```
