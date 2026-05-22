# GetLabel

Returns the label attribute for the current container.

## Syntax

```javascript
expression.GetLabel();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Retrieve the label value assigned to an inline content control in a document.

```javascript editor-docx
// How do I read the label of an inline content control in a document?

// Confirm the numeric label set on an inline content control by printing it to the page in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a label set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetLabel(2147483647);
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let label = inlineLvlSdt.GetLabel();
paragraph = Api.CreateParagraph();
paragraph.AddText("Label: " + label);
doc.Push(paragraph);
```
