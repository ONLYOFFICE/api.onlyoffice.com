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

This example adds a page break and starts the next element from a new page.

```javascript editor-docx
// How to start a sentence from the new page.

// Break two lines of a text run with a page break. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the text for the first page. After it a page break will be added. Scroll down to the second page to see the text there.");
run.AddPageBreak();
run.AddText("This is the text which starts from the beginning of the second page. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
```
