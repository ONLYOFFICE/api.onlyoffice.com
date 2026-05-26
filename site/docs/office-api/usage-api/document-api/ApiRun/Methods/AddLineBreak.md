# AddLineBreak

Adds a line break to the current run position and starts the next element from a new line.

## Syntax

```javascript
expression.AddLineBreak();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Insert a line break within a text run to continue text on the next line in a document.

```javascript editor-docx
// How do I split a single text run across two lines without starting a new paragraph in a document?

// Push the remaining text onto a fresh line while keeping it in the same paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is the text for the first line. Nothing special.");
run.AddLineBreak();
run.AddText("This is the text which starts from the beginning of the second line. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
```
