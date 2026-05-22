# GetAllContentControls

Returns a collection of content control objects in the paragraph.

## Syntax

```javascript
expression.GetAllContentControls();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[]

## Example

Retrieve all content controls embedded in a paragraph in a document.

```javascript editor-docx
// How do I get every content control from a paragraph in a document?

// Inspect or modify structured input fields by collecting all content controls in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run);
let contentControls = paragraph.GetAllContentControls();
contentControls[0].GetElement(0).SetBold(true);
let classType = contentControls[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
