# Select

Selects the current run.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Highlight a text run as the active selection in a document.

```javascript editor-docx
// How do I programmatically select a piece of text in a document?

// Mark a run so it appears selected for the user in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run.Select();
paragraph.AddLineBreak();
paragraph.AddText("The text from the first run was selected.");
```
