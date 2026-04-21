# SetLock

Sets the lock state of the current form.

Inherited from [ApiFormBase.SetLock](../../ApiFormBase/Methods/SetLock.md).

## Example

Specify if the current form should be locked.

```javascript editor-forms
// How to lock a form.

// Make sure that the form cannot be edited.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetLock(true);
let locked = textForm.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is locked: " + locked);
doc.Push(paragraph);
```
