# AddTabStop

Adds a tab stop to the current run.

## Syntax

```javascript
expression.AddTabStop();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Insert one or more tab stops into a text run to align content horizontally in a document.

```javascript editor-docx
// How do I add spacing between words using tab stops inside a text run in a document?

// Shift part of a text run to a new horizontal position with tab characters in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. After it three tab stops will be added.");
run.AddTabStop();
run.AddTabStop();
run.AddTabStop();
run.AddText("This is the text which starts after the tab stops.");
paragraph.AddElement(run);
```
