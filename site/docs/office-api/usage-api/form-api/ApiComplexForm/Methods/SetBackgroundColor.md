# SetBackgroundColor

Sets the background color to the current form.

Inherited from [ApiFormBase.SetBackgroundColor](../../ApiFormBase/Methods/SetBackgroundColor.md).

## Example

Set the background color to the form.

```javascript editor-forms
// Apply an RGB background color to the text form element.

// How to change background color of the text form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetBackgroundColor(Api.HexColor('#FF6F3D'));
```
