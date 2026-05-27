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

Insert an inline text container with editable content into a document.

```javascript editor-docx
// How do I add an inline text box that sits inside a paragraph in a document?

// Wrap typed text inside an inline field that flows with the surrounding paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control.");
inlineLvlSdt.AddElement(run, 0);
paragraph.Push(inlineLvlSdt);
```
