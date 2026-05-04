# GetParentParagraph

Returns a parent paragraph of the current run.

## Syntax

```javascript
expression.GetParentParagraph();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Get a parent paragraph of run for further manipulation in a document.

```javascript editor-docx
// How to get the parent paragraph for a text run in a document?

// Get the parent paragraph and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is paragraph with example run: ");
let run = Api.CreateRun();
run.AddText('EXAMPLE RUN');
run.SetBold(true);
paragraph.AddElement(run);
let parentParagraph = run.GetParentParagraph();
parentParagraph.SetItalic(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("The parent paragraph of run was set to Italic");
doc.Push(paragraph);
```
