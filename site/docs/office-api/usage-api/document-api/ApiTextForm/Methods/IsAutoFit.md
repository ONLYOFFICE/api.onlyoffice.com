# IsAutoFit

Checks if the text field content is autofit, i.e. whether the font size adjusts to the size of the fixed size form.

## Syntax

```javascript
expression.IsAutoFit();
```

`expression` - A variable that represents a [ApiTextForm](../ApiTextForm.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a text field automatically resizes its content in a document.

```javascript editor-docx
// How do I find out if a text field is set to shrink text to fit in a document?

// Confirm the auto-fit setting on a form field before adjusting its layout in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let autoFit = textForm.IsAutoFit();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first text form from this document is autofit: " + autoFit);
doc.Push(paragraph);
```
