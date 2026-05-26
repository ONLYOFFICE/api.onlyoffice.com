# GetBorderColor

Returns the border color of the current form.

## Syntax

```javascript
expression.GetBorderColor();
```

`expression` - A variable that represents a [ApiFormBase](../ApiFormBase.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../../document-api/ApiColor/ApiColor.md)

## Example

Read the border color of a form field in a document.

```javascript editor-forms
// How do I get the border color of a form field in a document?

// Verify a custom border color by reading its RGB values back after applying it.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBorderColor(Api.RGB(255, 111, 61));
let borderColor = textForm.GetBorderColor();
paragraph = Api.CreateParagraph();
paragraph.AddText("Border color (RGB): (" + borderColor.r + ", " + borderColor.g + ", " + borderColor.b + ")");
doc.Push(paragraph);
```
