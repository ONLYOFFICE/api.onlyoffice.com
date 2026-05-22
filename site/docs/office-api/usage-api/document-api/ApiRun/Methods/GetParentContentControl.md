# GetParentContentControl

Returns a content control that contains the current run.

## Syntax

```javascript
expression.GetParentContentControl();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null

## Example

Find the content control that wraps a text run in a document.

```javascript editor-docx
// How do I access the container holding a specific piece of text in a document?

// Reach the enclosing structured region from a text run in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("This is a block text content control.");
paragraph.Push(run);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
let contentControl = run.GetParentContentControl();
let classType = contentControl.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
