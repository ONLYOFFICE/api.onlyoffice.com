# SetTipText

Sets the tip text to the current form.

Inherited from [ApiFormBase.SetTipText](../../ApiFormBase/Methods/SetTipText.md).

## Example

Set tooltip text on a form field to provide guidance in a document.

```javascript editor-forms
// How do I add a tooltip that appears when hovering over a form field in a document?

// Give users helpful instructions that appear when they hover over a field.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetTipText("Enter your first name");
let tipText = textForm.GetTipText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Tip text: " + tipText);
doc.Push(paragraph);
```
