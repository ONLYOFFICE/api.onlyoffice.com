# AddLineBreak

Adds a line break to the current position and starts the next element from a new line.

## Syntax

```javascript
expression.AddLineBreak();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Force text onto a new line without starting a new paragraph in a document.

```javascript editor-docx
// How do I break a line mid-paragraph so the next text begins on a fresh line in a document?

// Keep two lines inside the same paragraph block while visually separating them with a hard line break in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text for the first line. Nothing special.");
paragraph.AddLineBreak();
paragraph.AddText("This is the text which starts from the beginning of the second line. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
```
