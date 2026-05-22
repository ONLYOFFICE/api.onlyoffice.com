# SetFormKey

为当前表单设置键。

继承自 [ApiFormBase.SetFormKey](../../ApiFormBase/Methods/SetFormKey.md)。

## 示例

为文档中的表单字段分配标识键。

```javascript editor-forms
// How do I set the key that identifies a form field in a document?

// Label a form field with a custom key so it can be referenced or grouped with related fields in a document.

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
