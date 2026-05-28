# IsForm

Checks if the content control is a form.

## Syntax

```javascript
expression.IsForm();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether an inline content control belongs to a form in a document.

```javascript editor-docx
// How do I find out whether an inline content control is part of a form in a document?

// Separate form-bound controls from standalone controls to apply different processing rules in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let isForm = inlineLvlSdt.IsForm();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first content control from this document is a form: " + isForm);
doc.Push(paragraph);
```
