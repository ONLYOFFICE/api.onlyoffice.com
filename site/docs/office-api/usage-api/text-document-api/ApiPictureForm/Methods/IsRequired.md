# IsRequired

Checks if the current form is required.

Inherited from [ApiFormBase.IsRequired](../../ApiFormBase/Methods/IsRequired.md).

## Example

Check if the current form is required.

```javascript editor-docx
// How to know whether a text form is required or not.

// Display a boolean representing whether a text form is required.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let required = textForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
