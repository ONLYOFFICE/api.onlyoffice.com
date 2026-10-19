# GetPosInParent

Returns the position (index) of the current run within its parent element.

## Syntax

```javascript
expression.GetPosInParent();
```

`expression` - A variable that represents an [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

Determine the index of a text run within its parent element.

```javascript editor-docx
// The position is the text run's index within its containing element.

// Read a run's position within its paragraph and write it into the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Intro ");
let run = Api.CreateRun();
run.AddText("measured run");
paragraph.AddElement(run);
let position = run.GetPosInParent();
let report = Api.CreateParagraph();
report.AddText("The run is at position " + position + " in its parent.");
doc.Push(report);
```
