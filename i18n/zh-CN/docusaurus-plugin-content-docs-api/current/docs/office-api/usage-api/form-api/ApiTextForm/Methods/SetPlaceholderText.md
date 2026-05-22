# SetPlaceholderText

设置当前表单的占位符文本。
*不能设置为复选框或单选按钮。*

继承自 [ApiFormBase.SetPlaceholderText](../../ApiFormBase/Methods/SetPlaceholderText.md)。

## 示例

在文档中为表单字段设置占位符文本以指导用户输入。

```javascript editor-forms
// How do I add hint text inside an empty form field in a document?

// Display a prompt inside a field before the user fills it in.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
let paragraph = doc.GetElement(0);
paragraph.AddElement(textForm);
textForm.SetPlaceholderText("First name");
```
