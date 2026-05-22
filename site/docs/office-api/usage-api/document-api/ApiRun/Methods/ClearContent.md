# ClearContent

Clears the content from the current run.

## Syntax

```javascript
expression.ClearContent();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Erase all text from a run while keeping it present in a paragraph in a document.

```javascript editor-docx
// How do I wipe the content of a text run without removing the run itself in a document?

// Empty a run so its paragraph shows no visible text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("But you will not see it in the resulting document, as it will be cleared.");
paragraph.AddElement(run);
run.ClearContent();
paragraph = Api.CreateParagraph();
run = Api.CreateRun();
run.AddText("The text in the previous paragraph cannot be seen, as it has been cleared.");
paragraph.AddElement(run);
doc.Push(paragraph);
```
