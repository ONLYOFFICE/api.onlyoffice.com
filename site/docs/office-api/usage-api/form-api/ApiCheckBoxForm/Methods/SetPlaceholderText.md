# SetPlaceholderText

Sets the placeholder text to the current form.
*Can't be set to checkbox or radio button.*

Inherited from [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md).

## Example

This example sets the placeholder text to the form.

```javascript editor-forms
// Add text as a placeholder of the form.

// Create a text form and set its placeholder text.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");
```

