# GetInternalId

Returns an internal id of the current form.

Inherited from [ApiFormBase.GetInternalId](../../ApiFormBase/Methods/GetInternalId.md).

## Example

Retrieve the internal identifier of a form field in a document.

```javascript editor-docx
// How do I get the internal ID of a form field in a document?

// Uniquely track a form by reading its auto-assigned internal identifier.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let internalId = textForm.GetInternalId();
paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + internalId);
doc.Push(paragraph);
```
