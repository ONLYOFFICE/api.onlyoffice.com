# SetPlaceholderText

设置当前表单的占位符文本。
*不能设置为复选框或单选按钮。*

Inherited from [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md).

## 示例

此示例为表单设置占位符文本。

```javascript editor-forms
// Add text as a placeholder of the form.

// Create a text form and set its placeholder text.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");
```

