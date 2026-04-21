# MoveCursorOutside

Places a cursor before/after the current form.

Inherited from [ApiFormBase.MoveCursorOutside](../../ApiFormBase/Methods/MoveCursorOutside.md).

## Example

Move the cursor outside in a document.

```javascript editor-forms
// How to know whether the cursor should be moved out of the text form.

// Place the cursor after the current form.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetText("The cursor will be placed after the current form.");
textForm.MoveCursorOutside(true);
```
