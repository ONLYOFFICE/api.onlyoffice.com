# SetFormKey

为当前表单设置键。

继承自 [ApiFormBase.SetFormKey](../../ApiFormBase/Methods/SetFormKey.md)。

## 示例

为表单设置键。

```javascript editor-forms
// Change the key of the text form.

// How to specify the text form key.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetFormKey("Personal information");
let key = textForm.GetFormKey();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form key: " + key);
doc.Push(paragraph);
```
