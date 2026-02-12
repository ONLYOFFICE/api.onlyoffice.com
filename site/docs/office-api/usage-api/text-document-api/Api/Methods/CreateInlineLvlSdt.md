# CreateInlineLvlSdt

Creates a new inline container.

## Syntax

```javascript
expression.CreateInlineLvlSdt();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example adds an inline container to the document.

```javascript editor-docx playground
// How to create an inline text content control, add a text run to it, and add this container to the document.

// Creates an inline container and adds it to the ApiParagraph class.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
paragraph.Push(inlineLvlSdt);
```
