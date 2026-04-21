# GetText

返回当前表单中的文本。

继承自 [ApiFormBase.GetText](../../ApiFormBase/Methods/GetText.md)。

## 示例

获取文档中表单的文本。

```javascript editor-forms
// How to get a raw text of a text form.

// Display the answer of the form as a raw text.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
let text = textForm.GetText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form text: " + text);
doc.Push(paragraph);
```
