# SetRequired

指定当前表单是否为必填项。

继承自 [ApiFormBase.SetRequired](../../ApiFormBase/Methods/SetRequired.md)。

## 示例

将文档中的表单字段标记为必填以强制完成。

```javascript editor-forms
// How do I make a form field mandatory in a document?

// Ensure a field must be filled before the document form is submitted.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetRequired(true);
let required = textForm.IsRequired();
paragraph = Api.CreateParagraph();
paragraph.AddText("The first form from this document is required: " + required);
doc.Push(paragraph);
```
