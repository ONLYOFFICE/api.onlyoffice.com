# AddColumnBreak

Adds a column break to the current run position and starts the next element from a new column.

## Syntax

```javascript
expression.AddColumnBreak();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example adds a column break to the run position and starts the next element from a new column.

```javascript editor-docx
// How to add a column break between the text.

// Add text to the text run and separate it with a column break.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection(paragraph);
section.SetEqualColumns(2, 720);
let run = Api.CreateRun();
run.AddText("This is the text for the first column. It is written all in one text run. Nothing special.");
run.AddColumnBreak();
run.AddText("This is the text which starts from the beginning of the second column. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
```
