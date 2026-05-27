# GetFormsHighlight

Returns the highlight color of the forms in the document.

## Syntax

```javascript
expression.GetFormsHighlight();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md) \| null

## Example

Read back the highlight color applied to all form fields in a document.

```javascript editor-docx
// How do I retrieve the current form highlight color in a document?

// Confirm a highlight was applied correctly by displaying its hex value in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
doc.SetFormsHighlight(191, 219, 254);
let highlight = doc.GetFormsHighlight();
paragraph = Api.CreateParagraph();
paragraph.AddText("The forms highlight color is: " + highlight.GetHex());
doc.Push(paragraph);
```
