# GetTextPr

Returns the text properties from the current form.
*Used if possible for this type of form*

Inherited from [ApiFormBase.GetTextPr](../../ApiFormBase/Methods/GetTextPr.md).

## Example

Read the text formatting properties applied to a form field in a document.

```javascript editor-docx
// How do I access the font and style settings of a form field in a document?

// Retrieve the current text properties of a form so they can be adjusted and reapplied in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textForm.SetTextPr(textPr);
let formTextPr = textForm.GetTextPr();
formTextPr.SetItalic(true);
textForm.SetTextPr(formTextPr);
```
