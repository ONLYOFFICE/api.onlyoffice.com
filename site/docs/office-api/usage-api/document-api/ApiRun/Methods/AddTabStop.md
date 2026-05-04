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

Add a tab stop to the run in a document.

```javascript editor-docx
// How to start a sentence after a tab stop in a document.

// Break two lines of a text with a tab in a document.

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
