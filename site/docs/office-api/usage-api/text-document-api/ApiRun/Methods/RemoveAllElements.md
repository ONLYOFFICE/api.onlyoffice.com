# RemoveAllElements

Removes all the elements from the current run.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example removes all the elements from the run.

```javascript editor-docx
// How to clear the text run.

// Delete all elements from the run.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("This is sample text №1.");
paragraph.AddElement(run1);
let run2 = Api.CreateRun();
run2.AddText("This is sample text №2.");
paragraph.AddElement(run2);
run1.RemoveAllElements();
paragraph.AddLineBreak();
paragraph.AddText("The sample text №1 was removed from the document.");
```
